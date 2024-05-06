import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const PageNotFound = () => {
    return (
        <div className='w-100 h-100'>
            <Row className="justify-content-center m-5">
                <Col xs={12} md={6} className="text-center">
                    <h1 className="display-1 text-primary">404</h1>
                    <h2 className="text-primary">Page Not Found</h2>
                    <p className="lead">The page you are looking for does not exist.</p>
                    <Button variant="primary" href="/">
                        Go Back Home
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default PageNotFound;