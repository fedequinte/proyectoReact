import { useState, useEffect } from 'react'
import {getFirestore,getDocs, where, query, collection} from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'



                                  //-----ESTO ES EL HOME------//

const ItemListContainer = ({greeting}) => { //greeting funciona como props

    const[item,setItem] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        const queryDb = getFirestore(); //inicia firestore
        const queryCollection = collection(queryDb, 'items'); //items viened de firesbase
        if (id) {
        const queryFilter = query(queryCollection, where('caterogyId','==', id));
        getDocs(queryFilter).then((result)=> setItem(result.docs.map((p)=>({id: p.id, ...p.data()}))));
        }
        else {
            getDocs(queryCollection).then((result)=> setItem(result.docs.map((p)=>({id: p.id, ...p.data()}))));
        }
},[id])

    return (
        <div className='container'>
            <h1 className='bienvenido'>{greeting}</h1>
            <div className='row'>
                <ItemList item={item}/>
            </div>
        </div>
    )
}

export default ItemListContainer