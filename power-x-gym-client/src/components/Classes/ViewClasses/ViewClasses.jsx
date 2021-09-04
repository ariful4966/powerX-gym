import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ClassesCard from '../ClassesCard/ClassesCard';
import { classesData } from './classesData';

const ViewClasses = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        setClasses(classesData)
    }, [classes])
    return (
        <section className="classes_area my-5">
            <Container>
                <Row>
                    {
                        classes.map((classe, idx) =>
                            <Col md={4} key={idx} className="mb-5">
                                <ClassesCard classe={classe}/>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </section>
    );
};

export default ViewClasses;