import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeCard from '../HomeCard/HomeCard'

const Chose = () => {
    const [choses, setChoses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/chose')
            .then(res => res.json())
            .then(data => setChoses(data))
    }, [choses])
    return (
        <section className="chose_area py-5">
            <Container>
                <div className="section_heading">
                    <h1> <span className="brand_color">Why</span> Chose Us</h1>
                </div>
                <Row className="pt-5">
                    {
                        choses.map(chose =>
                            <Col md={4} key={chose._id}>
                                <HomeCard service={chose} chose/>
                            </Col>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Chose;