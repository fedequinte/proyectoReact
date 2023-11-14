import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const queryDb = getFirestore();
    const queryDoc = doc(queryDb, 'items', id);
    getDoc(queryDoc).then((result)=>setItem({id: result.id, ...result.data()}));
  }, [id]);
  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
