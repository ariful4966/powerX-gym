import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import ClassShedule from '../ClassShedule/ClassShedule';

const ClassContent = ({ classe }) => {
    console.log(classe);
    const history = useHistory();
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
                                        {classe.body}
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
                        {   classe.fetures &&
                             classe.fetures.map((item, idx) => <li key={idx} className="my-3 list-unstyled"><FontAwesomeIcon className="brand_color me-2" icon={faCheckSquare}/> <span>{item}</span></li>)
                        }
                    </ul>
                    <div>
                        <Button className="brand_bg" onClick={()=> history.push('/prices')}>Join us</Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ClassContent;