import React from 'react';
import { Card} from 'react-bootstrap';
import './HomeCard.css'

const HomeCard = ({ service, chose }) => {
    const bgImg = {
        background: "url(" + service.bgImag + ")",
        backgroundSize: 'cover',
        backgroundPosition: '-5px'
    }
    return (
        <Card className={` ${chose ? 'card_chose shadow' : 'card_resize text-white'} text-center p-3`} style={bgImg}>
            <Card.Img variant="top" className="w-25 mx-auto my-2 d-block" src={service.icon} />
            <Card.Body style={{ zIndex: '1' }}>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>
                    {service.body}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default HomeCard;