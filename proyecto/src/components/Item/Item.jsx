import React from 'react'
import {Link} from 'react-router-dom'




const Item = ({item}) => {
return (
    <Link to={'/item/' + item.id}>
    <div>
        <h2>{item.nombre}</h2>
    </div>
    <div>
        <img src={item.imagen} alt={item.nombre} />
    </div>
    <div>
        <p>${item.precio}</p>
    </div>
    
    </Link>
)
}

export default Item