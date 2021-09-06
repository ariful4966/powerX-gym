import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { pracingData } from '../../Classes/ViewClasses/classesData';
import PricingPlanItem from '../PricingPlanItem/PricingPlanItem';

const PricingPlan = () => {
    return (
        <section className="pricing_area my-5">
            <Container>
                <div className="section_heading">
                    <h1> <span className="brand_color">Chose The Offer</span> That suits you</h1>
                    <p className="text-secondary">Sed ut perspiciatis unde omonis iste natus error sit voluptatem accusantium doloremque <br /> laudantium, totam rem aperiam</p>
                </div>
                <div className="pricing_content">
                    <Row>
                        {
                            pracingData.map((pricingItem, idx)=>
                                <Col md={4} key={idx}>
                                    <PricingPlanItem pricingPlan={pricingItem}/>
                                </Col>
                            )
                        }
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default PricingPlan;