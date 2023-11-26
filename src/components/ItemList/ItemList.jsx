import React from 'react'
import Item from '../Item/Item'


const ItemList = ({item}) => {
    return (
    <div> 
        {item.map( item => <Item key={item.id} item={item}/>
        )}
    </div>
    )   
}

export default ItemList