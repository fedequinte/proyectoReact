import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

if (cart.length === 0) {
    return (
        <div>
        <p>No hay elementos en el carrito</p>
        <Link to="/">Hacer compras</Link>
        </div>
    );
}

    return (
        <div className="cart">
        {cart.map((item) => (
        <ItemCart key={item.id} item={item} />
        ))}
        <p>total: $ {totalPrice()}</p>
        <Link to="/formulario">
        {' '}
        <button className="btn-total">Finalizar Compra</button>
        </Link>
        </div>
    );
};

export default Cart;