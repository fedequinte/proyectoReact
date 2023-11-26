import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCartContext } from '../Context/CartContext'
import{getFirestore,collection,addDoc,updateDoc,doc,getDoc} from 'firebase/firestore'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'



export const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion,setDireccion]= useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmacion, setEmailConfirmacion] = useState('');
    const [error, setError] = useState('');
    const [ordenId, setOrdenId] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {cart,clearCart, totalPrice} = useCartContext()  
    
    


    const manejarFormulario = (event) =>{
        event.preventDefault();
        const mailValido = email === emailConfirmacion;
        if(!mailValido){
            setError('Los correos no coinciden');
        }
        if(!nombre || !apellido || !telefono|| !direccion|| !email || !emailConfirmacion){
            setError('Todos los campos son obligatorios');
            }
            
        const pedidoValido=
        cart &&
        Object.keys(cart).length > 0 &&
        Object.values(cart).every((item)=> item.cantidad >=1 ) ;
        if (!pedidoValido){
            return alert("No hay producto en el carrito")
            }

        const precioFinal= totalPrice();
        const pedido = {
            producto: cart.map((item) =>({
                id:item.id,
                titulo: item.title,
                productos: item.cantidad,
            })),
            total: precioFinal,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            direccion,
            email,
        };
        Promise.all(
            pedido.producto.map(async(ordenProducto)=>{
                const baseDatos = getFirestore();
                const productRefe = doc(baseDatos, 'items', ordenProducto.id);
                const producto = await getDoc(productRefe);
                const actualStock = producto.data().stock;
                await updateDoc(productRefe,{
                    stock: actualStock - ordenProducto.productos,
                });
            })
        )
        .then(()=>{
            const baseDatos = getFirestore();
            addDoc(collection(baseDatos,'orders'),pedido)
            .then((docRef)=>{
                setOrdenId(docRef.id);
                clearCart();
            })
            .catch((error)=>{
                console.log('No se creo orden',error);
                setError('No se creo la orden');
            });
        })
        .catch((error)=>{
            console.log('Error al actualizar stock', error);
            setError('No se puede actualizar stock');
        });
    
        setNombre('');
        setApellido('');
        setTelefono('');
        setDireccion('');
        setEmail('');
        setEmailConfirmacion('');
        
    };
        return(
            <div>
                <Form onSubmit={manejarFormulario}>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                    type="email"
                    name='email'
                    placeholder="Enter email"
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Confirma email</Form.Label>
                    <Form.Control
                    type="email"
                    name='email'
                    placeholder="Repetir email"
                    onChange={(e)=>setEmailConfirmacion(e.target.value)}
                    value={emailConfirmacion}
                    />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                    type="text"
                    name='username'
                    placeholder="Nombre"
                    onChange={(e)=>setNombre(e.target.value)}
                    value={nombre}
                    />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                    type="text"
                    name='secon name'
                    placeholder="Apelllido"
                    onChange={(e)=>setApellido(e.target.value)}
                    value={apellido}
                    />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control
                    type="text"
                    name='phone'
                    placeholder="Telefono"
                    onChange={(e)=>setTelefono(e.target.value)}
                    value={telefono}
                    />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Direción</Form.Label>
                    <Form.Control
                    type="text"
                    name='direccion'
                    placeholder="Dirección"
                    onChange={(e)=>setDireccion(e.target.value)}
                    value={direccion}
                    />
                    </Form.Group>
                    {error && <p>{error}</p>}
                    <div>
                    <button type="submit" onClick={handleShow}>
                    Finalizar Compra
                    </button>
                    
                    {ordenId &&(
                    <div>
                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                        <Modal.Header closeButton>
                        <Modal.Title>Gracias por tu compra Millo ⚪🔴⚪!!!</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                        <p>Este es tu numero de orden: <br />{' '}{ordenId}{' '}</p>
                        </Modal.Body>

                        <Modal.Footer>
                        <Link to="/">
                        <Button variant="secondary" onClick={handleClose}>Volver al Home</Button>
                        </Link>
                        </Modal.Footer>
                        </Modal>
                        </div>)}

                    </div>
                </Form>
            </div>
        );    
};

export default Formulario;