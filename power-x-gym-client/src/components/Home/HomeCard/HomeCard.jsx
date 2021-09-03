import React from 'react';
import { Card, Button} from 'react-bootstrap';

const HomeCard = ({service}) => {
    return (
        <Card className="service_bg text-center text-white">
            <Card.Img variant="top" className="w-25 mx-auto my-2 d-block" src={service.icon} />
            <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>
                    {service.body}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default HomeCard;