import React from 'react'
import Item from '../Item/Item'


const ItemList = ({item}) => {
    return (
    <div>
        {item.map(item=>
        <div key={item.id}> 
            <Item item={item}/>
        </div>
        )}
    </div>
    )   
}

export default ItemList