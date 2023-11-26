import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


//Muestra tarjeta de producto en el home/categoria

const Item = ({item}) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.imageId} alt={item.title}/>
            <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
                <p>${item.price}</p>
            </Card.Text>
            <Link to={'/item/' + item.id} className='text-decoration-none'>
            <Button variant="primary">Ver más</Button>
            </Link>
            </Card.Body>
        </Card>
    );
}

export default Item