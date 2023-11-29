import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from '../Loading/Loading'
import '../CssComponents/itemDetail.css'



const ItemDetailContainer = () => {
  const [items, setItem] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true);
    const queryDb = getFirestore();
    const queryDoc = doc(queryDb, 'items', id);
    getDoc(queryDoc).then((result)=>setItem({id: result.id, ...result.data()}));
    setLoading(false);
  }, [id]);
  if(loading){
    return <Loading />;
  }
  return (
    <div>
      <ItemDetail item={items} />
    </div>
  );
};

export default ItemDetailContainer;


//Contiene al Item Detail, viene del home al clickear "ver mas"
