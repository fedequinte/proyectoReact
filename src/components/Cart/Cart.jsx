import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import '../CssComponents/cartWidget.css'





const Cart = () => {
    const { cart, totalPrice } = useCartContext();

if (cart.length === 0) {
    return (
        <div>
        <h1 className='text-center text'>No hay productos en el carrito</h1>
        <div className='container'>
        <button className="mb-3 btn btn-danger compra">
        <Link to="/" className='link'>Seguir comprando</Link>
        </button>
        </div>
        </div>
    );
}

    return (
        <div className="cart mt-3">
        {cart.map((item) => (
        <ItemCart key={item.id} item={item} />
        ))}
        <div className='total'>
        <h4>Total: ${totalPrice()}</h4>
        </div>
        <div className='container'>
        <Link to="/formulario" className='link'>
        {' '}
        <button className="btn btn-danger">Finalizar Compra</button>
        </Link>
        </div>
        </div>
    );
};

export default Cart;