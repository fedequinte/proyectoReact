


const ItemDetail = ({item}) => {

    return (
        <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
            <img src={item.imageId}class="img-fluid rounded-start" alt={item.title}/>
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h3 class="card-title text-center">{item.title}</h3>
                <p class="card-text text-center">{item.description}</p>
                <p class="card-text text-center"> ${item.price}</p>
                <button type="button" class="btn btn-outline-danger w-75">Danger</button> 
            </div>
            </div>
        </div>
        </div>
    );
}

export default ItemDetail