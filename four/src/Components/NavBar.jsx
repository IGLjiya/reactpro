import React from 'react';
import { Button, Col, Container, Dropdown, Form, Nav, Navbar, NavItem, NavLink, Row } from 'react-bootstrap';
import { GoSearch } from "react-icons/go";
import { FaOpencart, FaRegUser, FaUserCircle } from "react-icons/fa";
import { MdFavoriteBorder, MdGetApp } from "react-icons/md";
import './Navbar.css'
import { CiUser } from 'react-icons/ci';

const NavBar = () => {
    return (
        <div>
            <div style={{ backgroundColor: 'rgb(154, 15, 45)', color: 'white', height: '30px' }}>
                <div className='container d-flex justify-content-between'>
                    <div><p style={{ fontSize: '13px', marginTop: '5px' }}>Brand Waali Quality, Bazaar Waali Deal!</p></div>
                    <div>
                        <a href="" className='mx-2 text-decoration-none text-light'>Impact@Snapdeal</a>
                        <a href="" className='mx-2 text-decoration-none text-light'>Help Center</a>
                        <a href="" className='mx-2 text-decoration-none text-light'>Sell On Snapdeal</a>
                        <a href="" className='mx-2 text-decoration-none text-light'><MdGetApp className='fs-5' />Download App</a>
                    </div>
                </div>
            </div>
            <Navbar sticky='top' className="bg-danger" >
                <Container fluid>
                    <Navbar.Brand href="#" className='ms-5 ps-5'><img src='https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg'></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex ms-5 me-5" style={{ width: "50%" }}>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                style={{ borderRadius: "0px" }}
                            />
                            <Button variant="dark" style={{ marginLeft: -10, borderRadius: "0px", width: "25%" }}>Search</Button>
                        </Form>
                        {/* <Nav
                            className="me-auto m-5 p-3 my-2 my-lg-0"
                            style={{ maxHeight: '100px',position:'absolute',right:'3%',top:'',}}
                            navbarScroll>
                                <Row className='justify-content-end text-end text-light'>
                                    <Col className='text-center text-light gap-2 d-flex' style={
                                        {lineHeight:'15px '}
                                    }>Cart</Col>
                                    <Col className='justify-content-center'><CiUser size={23} /></Col>
                                </Row>
                        </Nav> */}
                       
                       <Navbar.Text className='col-1 px-3 py-3 ms-5 ' style={{ borderLeft: '1px solid grey', borderRight: '1px solid grey', }}>
                            <a href='#' className='text-white d-flex'><h6>Cart</h6><FaOpencart className='fs-3 mx-1 w-50' /></a>
                        </Navbar.Text>
                        <Dropdown as={NavItem} className='col-1 py-3'>
                            <Dropdown.Toggle as={NavLink} className='text-white'>Sign In <FaUserCircle className='fs-3 ms-3' /></Dropdown.Toggle>
                            <Dropdown.Menu style={{ backgroundColor: 'rgb(47, 46, 46)', paddingLeft: '10px', paddingRight: '10px' }}>
                                <Dropdown.Item style={{ color: 'white' }}><FaRegUser />Your Account</Dropdown.Item>
                                <Dropdown.Item style={{ color: 'white' }}><MdFavoriteBorder /> Your Orders</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.ItemText style={{ color: 'white', textAlign: 'center' }}>
                                    <span style={{ fontSize: '12px', color: 'grey' }}>If you are new user</span><br />Register
                                    <Button type="submit" className=' border-0 px-5' style={{ borderRadius: '0%', backgroundColor: 'rgb(217, 21, 64)' }}>LOGIN</Button>
                                </Dropdown.ItemText>
                            </Dropdown.Menu>
                        </Dropdown>
                       

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <div style={{backgroundColor:'rgb(154, 15, 45)',color:'white',height:'30px'}}>
                <div className='container d-flex justify-content-between'>
                    <div><p style={{fontSize:'13px',marginTop:'5px'}}>Brand Waali Quality, Bazaar Waali Deal!</p></div>
                    <div>
                        <a href="" className='mx-2'>Impact@Snapdeal</a>
                        <a href="" className='mx-2'>Help Center</a>
                        <a href="" className='mx-2'>Sell On Snapdeal</a>
                        <a href="" className='mx-2'><MdGetApp className='fs-5'/>Download App</a>
                    </div>
                </div>
            </div>
            <Navbar sticky="top" style={{height:'80px',backgroundColor:'rgb(217, 21, 64)'}} >
                <Container>
                    <Navbar.Brand className='col-2'><img src='https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg' width={'100%'} height={40}/></Navbar.Brand>
                    <Form className='col-7 ms-5 d-flex' >
                            <Col xs="7">
                                <Form.Control
                                type="text"
                                placeholder="Search products&brands"
                                style={{borderRadius:'0%',height:'40px',paddingLeft:'10%'}}
                                />
                            </Col>
                            <Col xs="3">
                                <Button type="submit" className=' border-0 py-2 px-4 d-flex' style={{borderRadius:'0%',background:'rgb(47, 46, 46)',height:'40px'}}>
                                    <GoSearch className='m-1'/> <h6>Search</h6>
                                    </Button>
                            </Col>
                    </Form>
                    <Navbar.Text className='col-1 px-3 py-3 ' style={{borderLeft:'1px solid grey',borderRight:'1px solid grey'}}>
                        <a href='#' className='text-white d-flex'><h6>Cart</h6><FaOpencart className='fs-3 mx-1 w-50' /></a>
                    </Navbar.Text>
                    <Dropdown as={NavItem} className='col-1 py-3'>
                        <Dropdown.Toggle as={NavLink} className='text-white'>Sign In <FaUserCircle className='fs-3 ms-3'/></Dropdown.Toggle>
                        <Dropdown.Menu style={{backgroundColor:'rgb(47, 46, 46)',paddingLeft:'10px',paddingRight:'10px'}}>
                            <Dropdown.Item style={{color:'white'}}><FaRegUser />Your Account</Dropdown.Item>
                            <Dropdown.Item style={{color:'white'}}><MdFavoriteBorder /> Your Orders</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.ItemText style={{color:'white',textAlign:'center'}}>
                                <span style={{fontSize:'12px',color:'grey'}}>If you are new user</span><br />Register
                                <Button type="submit" className=' border-0 px-5' style={{borderRadius:'0%',backgroundColor:'rgb(217, 21, 64)'}}>LOGIN</Button>
                            </Dropdown.ItemText>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Navbar> */}
        </div>
    );
}

export default NavBar;
