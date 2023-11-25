import { useState, useEffect } from 'react'
import {getFirestore,getDocs, where, query, collection} from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import '../CssComponents/itemListContainer.css'
import Loading from '../Loading/Loading'

                                  //-----ESTO ES EL HOME------//

const ItemListContainer = ({greeting}) => {
const [item, setItem] = useState([]);
const [loading, setLoading] = useState(true); 
const {id} = useParams();

useEffect(() => {
    setLoading(true);
    const queryDatebase = getFirestore();
    const queryCollection = collection(queryDatebase, 'items');
    if (id) {
    const queryFilter = query(queryCollection, where('categoryId', '==', id));
    getDocs(queryFilter).then((result) => {
        setItem(result.docs.map((product) => ({id: product.id, ...product.data()})));
        setLoading(false); 
    });
    } else {
    getDocs(queryCollection).then((result) => {
        setItem(result.docs.map((product) => ({id: product.id, ...product.data()})));
        setLoading(false);
    });
    }
}, [id]);
if (loading) {
return <Loading />}

    return (
        <div>
            <h1 className='bienvenido'>{greeting}</h1>
            <div><ItemList item={item}/></div>
        </div>
    )
}

export default ItemListContainer