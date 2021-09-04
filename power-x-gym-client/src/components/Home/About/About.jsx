import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import about from '../../../images/wells-chan-H-vAxuWxmi8-unsplash.jpg';
import './About.css'

const About = () => {
    return (
        <section className="about_area my-5" id="about">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="image_area">
                            <Card >
                                <Card.Img variant="top" src={about}  />
                            </Card>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="about_content">
                            <Card>
                                <h1>About Us</h1>
                                <Card.Body>
                                    <Card.Title>
                                        <span className="brand_color">
                                            We are here to drim!
                                        </span><br />
                                        Our teem is here surve you
                                    </Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis accusamus inventore dolore corrupti deserunt neque? A quas, error consequuntur pariatur ullam dolorum voluptatem minima! Id autem quo rerum, quos similique ipsam impedit reiciendis ea eligendi cupiditate assumenda incidunt soluta repudiandae accusantium corporis praesentium recusandae quas molestiae dolores consectetur vero animi.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;