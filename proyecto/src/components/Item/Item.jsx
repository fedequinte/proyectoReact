import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Item = ({item}) => {
    return (
        <Link to={'/item/' + item.id} className='text-decoration-none'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.imageId} alt={item.title}/>
            <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
                <p>${item.price}</p>
            </Card.Text>
            <Button variant="primary">Ver más</Button>
            </Card.Body>
        </Card>
        </Link>
    );
}

export default Item