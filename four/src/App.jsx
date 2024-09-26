import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import LandingPage from './Pages/LandingPage';

const App = () => {
  return (
    <div>

      <LandingPage/>
      {/* <Button >Welcome to the world</Button> */}
      {/* <Navbar expand="lg" className="bg-primary d-felx space-between ">
      <Container fluid className=''>
        <Navbar.Brand href="#home">Shopping</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}

{/* 
      <Form >
        <Container fluid className='w-50 p-5 m-5 bg-primary '>
          <Row className='mb-3'>
            <Form.Group as={Col} >
              <FloatingLabel label='Eamil' className='mb-3'>
                <Form.Control type='email' placeholder=''></Form.Control>
              </FloatingLabel>
            </Form.Group>
            <Form.Group as={Col} >
              <FloatingLabel label='Password'>
                <Form.Control type='password' placeholder=''></Form.Control>
              </FloatingLabel>
            </Form.Group>
          </Row>

          <Form.Group>
            <FloatingLabel label='Address' className='mb-5'>
              <Form.Control as='textarea' rows={10} placeholder=''></Form.Control>
            </FloatingLabel>
          </Form.Group>

          <Form.Group>
            <FloatingLabel label='Address 2' className='mb-5'>
              <Form.Control as='textarea' rows={10} placeholder=''></Form.Control>
            </FloatingLabel>
          </Form.Group>

          <Row>
            <Form.Group as={Col}>
              <FloatingLabel label="city" className='mb-1'>
                <Form.Control type='text' placeholder=''></Form.Control>
              </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col}>
              <FloatingLabel label="State" className='mb-1'>
                <Form.Select aria-label='Default select example'>
                  <option>Select</option>
                  <option>one</option>
                  <option>two</option>
                </Form.Select>
              </FloatingLabel>
            </Form.Group>
            <Form.Group as={Col}>
              <FloatingLabel label="zip" className='mb-1'>
                <Form.Control type='text' placeholder=''></Form.Control>
              </FloatingLabel>
            </Form.Group>
          </Row>
          <Form.Group className='mb-1'>
            <Form.Check type='checkbox' label='Check me out'/>
          </Form.Group>

            <Form.Check type='switch' label='Hi'disabled></Form.Check>
          <Button variant='danger' type='submit'>Submit</Button>
        </Container>

      </Form> */}



    </div>
  );
}

export default App;
