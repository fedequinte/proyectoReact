import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../CssComponents/cartWidget.css'

//Muestra tarjeta de producto en el home/categoria

const Item = ({item}) => {

    return (
        <Card style={{ width: '18rem' }} className='mb-2'>
            <Card.Img variant="top" src={item.imageId} alt={item.title}/>
            <Card.Body>
            <Card.Title className='text-center'>{item.title}</Card.Title>
            <Card.Text>
                <p className='text-center'>${item.price}</p>
            </Card.Text>
            <div>
            <Link to={'/item/' + item.id} className='text-decoration-none'>
            <Button className='btn btn-danger'>Ver más</Button>
            </Link>
            </div>
            </Card.Body>
        </Card>
    );
}

export default Item