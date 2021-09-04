
import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import yoga from '../../../images/bruce-mars-gJtDg6WfMlQ-unsplash.png';
import cardio from '../../../images/arthur-edelman-qfjuh4OLdxw-unsplash.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import './Traning.css'
const tranings = [
    {
        traningId: 'trn001',
        name: 'Yoga traning session',
        picture: yoga
    },
    {
        traningId: 'trn002',
        name: 'Cardio traning session',
        picture: cardio
    },
]

const Traning = () => {
    return (
        <section className="traning_area my-5">
            <Container>
                <div className="section_heading">
                    <h1>Traning <span className="brand_color">Programs</span></h1>
                </div>
                <div className="traning_content mt-5">
                    <Row>
                        {
                            tranings.map(traning =>
                                <Col key={traning.traningId}>
                                    <Card >
                                        <Card.Img variant="top" src={traning.picture} style={{height:'500px'}}/>
                                        <Button className="brand_bg custom_btn"><span>{traning.name}</span><FontAwesomeIcon icon={faArrowRight}/></Button>
                                    </Card>
                                </Col>
                            )
                        }
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Traning;