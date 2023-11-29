import React from 'react'
import { useCartContext } from '../Context/CartContext'
import Table from 'react-bootstrap/Table'



const ItemCart=({item}) => {
    const {removeProduct} = useCartContext();

      return (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Producto</th>
              <th>Descrpción</th>
              <th>Cantidad</th>
              <th>Precio unitario</th>
              <th>Subtotal</th>
              <th>Eliminar producto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Item</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.cantidad}</td>
              <td>${item.price}</td>
              <td>${item.price * item.cantidad}</td>
              <td><button onClick={()=>removeProduct(item.id)} className='button'>Eliminar</button></td>
            </tr>
          </tbody>
        </Table>
      );
    }
export default ItemCart

//Esto se muestra en el carrito con los detalles de la compra