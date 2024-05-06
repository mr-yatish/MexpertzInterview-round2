import React, { useState } from 'react';
import { Navbar, Container, Nav, Button, Offcanvas } from 'react-bootstrap';

const CustomNavbar = ({ details }) => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const toggleOffcanvas = () => {
        setShowOffcanvas(!showOffcanvas);
    };

    return (
        <>
            <Navbar key={"md"} expand={"md"} variant="transparent" fixed="top" className={details ? "mb-3 bg-gray " : "mb-3 bg-transparent "}>
                {
                    !showOffcanvas ?
                        <Container style={{ position: 'relative' }} >
                            <Navbar.Brand className="text-white fw-bold fs-3">Brainly Lingo</Navbar.Brand>
                            <div className="d-flex align-items-center justify-content-between " style={{ width: '70%' }}>
                                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                                    <Nav className="me-auto gap-5">
                                        <Nav.Link className="nav-link-custom text-white fs-5" href="#action1">Home</Nav.Link>
                                        <Nav.Link className="nav-link-custom text-white fs-5" href="#action2">Leadership</Nav.Link>
                                        <Nav.Link className="nav-link-custom text-white fs-5" href="#action2">Daily Quiz</Nav.Link>
                                        <Nav.Link className=" fs-5 fw-bold " style={{ color: "rgb(48, 48, 207)" }} href="#action3">Genre</Nav.Link>
                                    </Nav>
                                    <Button style={{ background: "linear-gradient(90deg,#5B26C0,#2498C3" }} className={`rounded-5 px-4 py-1 ${details ? "btn-outline-custom-nav" : ""}`}>{details ? "Sign Out" : "Sign in"}</Button>
                                </Navbar.Collapse>
                            </div>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="text-white" style={{ background: "linear-gradient(90deg,#5B26C0,#2498C3", position: 'absolute', top: '5', right: '0', borderRadius: "40px", border: 'none', outline: 'none', }} onClick={toggleOffcanvas} />
                        </Container>
                        :
                        <Offcanvas show={showOffcanvas} onHide={toggleOffcanvas} placement="top" backdropClassName="bg-white" style={{ height: '50vh' }}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Brainly Lingo</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="flex-column">

                                    <Nav.Link className="nav-link-custom text-white fs-5" href="#action1">Home</Nav.Link>
                                    <Nav.Link className="nav-link-custom text-white fs-5" href="#action2">Leadership</Nav.Link>
                                    <Nav.Link className="nav-link-custom text-white fs-5" href="#action2">Daily Quiz</Nav.Link>
                                    <Nav.Link className=" fs-5 fw-bold " style={{ color: "rgb(48, 48, 207)" }} href="#action3">Genre</Nav.Link>
                                </Nav>

                                <Button style={{ background: "linear-gradient(90deg,#5B26C0,#2498C3" }} className={`btn-custom-gradient rounded-5 px-4 py-1 ${details ? "btn-outline-custom-nav" : ""}`}>{details ? "Sign Out" : "Sign in"}</Button>
                            </Offcanvas.Body>
                        </Offcanvas>
                }
            </Navbar>


        </>
    );
};

export default CustomNavbar;
