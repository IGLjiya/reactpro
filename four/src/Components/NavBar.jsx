import React from 'react';
import { Button, Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap';
import { BsCart3 } from "react-icons/bs";
import { CiUser } from "react-icons/ci";


const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-danger sticky-top">
                <Container fluid>
                    <Navbar.Brand href="#" className='ms-5 ps-5'><img src='https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg'></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex ms-5" style={{width:"50%"}}>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                style={{borderRadius:"0px"}}
                            />
                            <Button variant="dark" style={{marginLeft:-10, borderRadius:"0px", width:"25%"}}>Search</Button>
                        </Form>
                        <Nav
                            className="me-auto m-5 p-3 my-2 my-lg-0"
                            style={{ maxHeight: '100px',position:'absolute',right:'3%',top:'',}}
                            navbarScroll>
                                <Row className='justify-content-end text-end text-light'>
                                    <Col className='text-center text-light gap-2 d-flex' style={
                                        {lineHeight:'15px '}
                                    }>Cart<BsCart3/></Col>
                                    <Col className='justify-content-center'><CiUser size={23} /></Col>
                                </Row>
                        </Nav>
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
