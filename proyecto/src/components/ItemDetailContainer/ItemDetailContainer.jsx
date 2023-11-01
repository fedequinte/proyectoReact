
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Producto from '../Json/Productos.json'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const[item,setItem] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
      const promesa = new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(Producto.find(item => item.id === parseInt(id)))
      },2000)
    });
    promesa.then((data)=>{
      setItem(data)
    })
  },[id])
  return (
    <div>
      <ItemDetail item ={item}/>
    </div>
  )
}

export default ItemDetailContainer