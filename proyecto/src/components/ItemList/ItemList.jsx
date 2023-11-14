import React from 'react'
import Item from '../Item/Item'


const ItemList = ({item}) => {
    return (
    <div className='row'> 
        {item.map( item =><div> <Item key={item.id} item={item}/></div>
        )}
    </div>
    )   
}

export default ItemList