import { useCartContext } from '../Context/CartContext'
import '../CssComponents/cartWidget.css'

const CartWidget = () => {
    const { totalProducts, cart}= useCartContext();
    return (
        <div> 
            <button className='button'>
                <img className='carrito-img' src="../img/carrito.png" alt="Carrito de compras" />
                <span className="start-50 px-2 mx-2 border rounded-circle text-white">{totalProducts() ||cart}</span>
            </button>
        </div>
    )
}

export default CartWidget