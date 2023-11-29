import React from 'react'
import Item from '../Item/Item'
import '../CssComponents/itemList.css'

const ItemList = ({item}) => {
    return (
    <div className='item'> 
        {item.map( item => <Item key={item.id} item={item}/>
        )}
    </div>
    )   
}

export default ItemList