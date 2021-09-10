import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NoMatch.css'

const NoMatch = () => {
    return (
        <main>
            <Container>
                <Row className="justify-content-center align-items-center text-center " style={{height: '100vh'}}>
                    <div className="notFound_area shadow" style = {{width: '25%'}}>
                        <h1>404</h1>
                        <p><span className="brand_color">Sorry!</span> Your Page is Not Found</p>
                        <p>Back to <Link to="/">Home</Link></p>
                    </div>
                </Row>
            </Container>
        </main>
    );
};

export default NoMatch;