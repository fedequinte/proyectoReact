import React from 'react'
import { useState, useEffect } from 'react'
import Producto from '../Json/Productos.json'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'



const ItemListContainer = ({greeting}) => { //greeting funciona como props

    const[item,setItem] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const data = await new Promise((resolve) =>{
                    setTimeout(()=>{ resolve(id? Producto.filter(item=>item.categoria ===id) :Producto)}, 1000);
                });
            setItem(data);
            }
            catch(error){
                console.log('Error al cargar los productos', error);
            }
};
    fetchData()
},[id])


    return (
        <div className='itemListContainer'>
            <h1 className='bienvenido'>{greeting}</h1>
            <div>
                <ItemList item={item}/>
            </div>

        </div>
    )
}

export default ItemListContainer