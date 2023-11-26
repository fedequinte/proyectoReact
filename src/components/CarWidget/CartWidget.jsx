import { useCartContext } from '../Context/CartContext'
import '../CssComponents/cartWidget.css'

const CartWidget = () => {
    const { totalProducts, cart}= useCartContext();
    return (
        <div className='carrito'> 
            <button className='butt-carr'>
                <img className='carrito-img' src="../img/carrito.png" alt="Carrito de compras" />
                <span>{totalProducts() ||cart}</span>
            </button>
        </div>
    )
}

export default CartWidget