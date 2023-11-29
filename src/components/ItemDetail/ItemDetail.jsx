import { useState } from "react";
import ItemCount from "../Count/ItemCount";
import {Link} from "react-router-dom";
import {useCartContext} from "../Context/CartContext";



const ItemDetail = ({item}) => {

    const[irCart, setIrCart]= useState(false);
    const {agregarProduct} = useCartContext()
    const agregar = (cantidad) =>{
        setIrCart(true);
        agregarProduct(item,cantidad);
    }

    return (
        <div class="card mb-3 mt-3">
        <div class="row g-0">
            <div class="col-md-4">
            <img src={item.imageId}class="img-fluid rounded-start" alt={item.title}/>
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h3 class="card-title text-center">{item.title}</h3>
                <p class="card-text text-center">{item.description}</p>
                <p class="card-text text-center"> ${item.price}</p>
                <div>
                    {irCart ?<button> <Link to='/cart'>Finalizar compra</Link>
                    </button> : <ItemCount stock={5} agregar={agregar}/>}   
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default ItemDetail


