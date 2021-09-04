import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeCard from '../HomeCard/HomeCard';
import './Service.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [services])
    return (
        <section className="server_area my-5" id="service">
            <Container>
                <Row>
                    {services.map(service=>
                    <Col key={service._id} md={4}>
                        <HomeCard service={service}/>
                    </Col>
                    )}
                </Row>
            </Container>
        </section>
    );
};

export default Services;