import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCartContext } from '../Context/CartContext'
import{getFirestore,collection,addDoc,updateDoc,doc,getDoc} from 'firebase/firestore'
import Form from 'react-bootstrap/Form'





export const Formulario = () => {
    
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion,setDireccion]= useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmacion, setEmailConfirmacion] = useState('');
    const [error, setError] = useState('');
    const [ordenId, setOrdenId] = useState('');

    const {cart,removeProduct, totalPrice} = useCartContext();

    const manejarFormulario = (Event) =>{
        Event.preventDefault();
        if(email !== emailConfirmacion){
            setError('Los correos no coinciden');
            return;
        }
        if(!nombre || !apellido || !telefono|| !direccion|| !email || !emailConfirmacion){
            setError('Todos los campos son obligatorios');
            return;
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
                removeProduct();
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

                    {ordenId && (<p>¡Gracias por tu compra! <br /> Este es tu numero de orden: <br />{' '}{ordenId}{' '}</p>)}
                    <div>
                    <button type="submit">
                    Finalizar Compra
                    </button>
                    </div>
                    <br/>
                    <div>
                    <Link to="/">
                    <button>Volver al Home</button>
                    </Link>
                    </div>
                </Form>
            </div>
        );    
};

export default Formulario;