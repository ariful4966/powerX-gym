
import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './Banner.css'

const Banner = ({ home, title }) => {
    return (
        <Container className="py-5">
            {home &&
                <Row>
                    <Col md={6}>
                        <article className="banner_article text-white">
                            <h1 className="banner-heading">The best fitness Solution in town</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dignissimos consequuntur, iure repellendus error eveniet deleniti temporibus, ipsum sit blanditiis sunt enim praesentium reiciendis. Voluptatem deserunt voluptates illo quibusdam laboriosam, odio nobis error, ut necessitatibus excepturi illum sed est ea! Cupiditate explicabo tempore ratione beatae inventore nam ullam id aliquam.</p>
                            <Button className="brand_bg">Join Us</Button>
                        </article>
                    </Col>
                    <Col md={6}>

                    </Col>
                </Row>
            }
            { title && <div className="page_title text-center text-white">
                <h1>{title}</h1>
            </div>}
        </Container>
    );
};

export default Banner;