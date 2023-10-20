import React from 'react'


const ItemListContainer = ({greeting}) => { //greeting funciona como props,agregar foto mas adelante
    return (
        <div className='itemListContainer'>
            <h1 className='bienvenido'>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer