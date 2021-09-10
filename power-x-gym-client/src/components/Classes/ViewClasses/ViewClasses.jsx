import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ClassesCard from '../ClassesCard/ClassesCard';

const ViewClasses = () => {
    const classess = useSelector(state => state.dataReducer.classes);
    console.log(classess);
    return (
        <section className="classes_area my-5">
            <Container>
                <Row>
                    {
                        classess.map((classe, idx) =>
                            <Col md={4} key={idx} className="mb-5">
                                <ClassesCard classe={classe} />
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </section>
    );
};

export default ViewClasses;