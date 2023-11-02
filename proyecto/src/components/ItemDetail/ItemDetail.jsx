

const ItemDetail = ({item}) => {
    return (
    <div>
        <div>
            <h1>{item.nombre}</h1>
        </div>
        <div>
            <img src={item.imagen} alt={item.nombre} />
        </div>
        <div>
            <p>{item.descripcion}</p>
            <p>${item.precio}</p>
            <div>
                <button>Agregar al Carrito</button>
            </div>
        </div>
    </div>
    )
}

export default ItemDetail