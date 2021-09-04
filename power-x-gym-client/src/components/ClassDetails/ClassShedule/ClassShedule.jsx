import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { shedule } from '../../Classes/ViewClasses/classesData';

const ClassShedule = () => {
    return (
        <div className="shedule_area">
            <div className="section_heading">
                <h1> <span className="brand_color">Classess</span> Shedule</h1>
            </div>
            <div className="shedule_day my-5">
                <Row>
                    {
                        shedule.map((day, idx) =>
                            <Col md={6} key={idx}>
                                <Card className="text-center mb-4">
                                    <Card.Body>
                                        <Card.Title>{day.dayName}</Card.Title>
                                        <Card.Text className="brand_color">
                                            {day.classTime}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </div>
        </div>
    );
};

export default ClassShedule;