import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { feture } from '../../Classes/ViewClasses/classesData';
import ClassShedule from '../ClassShedule/ClassShedule';

const ClassContent = ({ classe }) => {
    return (
        <section className="classContent_area my-5">
            <Container>
                <Row>
                    <Col md={8}>
                        <div className="classContnent_details">
                            <Card >
                                <Card.Img variant="top" src={classe.picture} />
                                <Card.Body>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto debitis labore dicta porro? Harum perferendis, quasi, cumque dignissimos recusandae officiis autem numquam quam magnam deserunt nesciunt quo ut tenetur voluptates ab. Cupiditate culpa nobis odio iure, ad voluptates, voluptate maiores suscipit est unde cumque. Dolor, officiis ratione cum aperiam iusto non quis maxime quasi sit porro quibusdam deleniti possimus voluptatum quod modi tenetur, asperiores repudiandae ducimus repellendus autem sed sunt odio reiciendis id! Optio neque in fugiat, blanditiis porro cupiditate aut sint impedit ut voluptatem accusamus beatae qui inventore atque est repellat ducimus aperiam eaque nostrum vel. Itaque, quas doloremque.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md={4}>
                        <ClassShedule />
                    </Col>
                </Row>
                <div className="feture_area d-flex justify-content-between">
                    <ul>
                        {
                            feture.map((item, idx) => <li key={idx} className="my-3 list-unstyled"><FontAwesomeIcon className="brand_color me-2" icon={faCheckSquare}/> <span>{item}</span></li>)
                        }
                    </ul>
                    <div>
                        <Button className="brand_bg px-3 py-2">Join us</Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ClassContent;