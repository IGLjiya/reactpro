import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { RiSecurePaymentLine  } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";
import { ImMobile } from "react-icons/im";
import { GoShieldCheck } from "react-icons/go";
import './ThirdPage.css'

const ThirdPage = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className='cls1' 
                        style={{ width: '260px', height: '200px' }}><RiSecurePaymentLine size={50} />
                        <h3>100% SECURE PAYMENTS</h3>
                        <p>Moving your crd details to a much more <br />secured place </p>
                        </Col>
                    <Col className='cls1'
                        style={{ width: '260px', height: '200px' }}><GoShieldCheck size={50}/>
                        <h3>TRUSTPAY</h3>
                        <p>100% Payment Protecttion. Easy <br /> Return Policy </p>
                        </Col>
                    <Col className='cls1'
                        style={{ width: '260px', height: '200px' }}><MdOutlineMessage size={50} />
                        <h3>HELP CENTER</h3>
                        <p>Got a question? Look no further <br /> Browse our FAQs or submit your query here</p>
                        </Col>
                    <Col className='cls1'
                        style={{ width: '260px', height: '200px' }}><ImMobile size={50} />
                        <h3>SHOP ON THE GO</h3>
                        <p>Download the app and get exciting <br />app only offers at your fingertips</p>
                        </Col>

                </Row>
                <Container>
                <Row>
                    <Col className='cls2'>
                        <h6>POLCY INFO</h6>
                        <div><ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Sale</li>
                        <li>Terms of Use</li>
                        <li>Report Abuse & Takedown Plicy</li>
                        <li>Know Your BSI Standard</li>
                        <li>Products Under Cukpulory BIS</li>
                        <li>Certification</li>
                        <li>FAQ</li>
                        </ul></div>
                    </Col>
                    <Col className='cls2'>
                        <h6>COMPANY</h6>
                        <ul>
                        <li>Impact@Snapdeal</li>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>Sitemap</li>
                        <li>Contact Us</li>
                        </ul>
                    
                    </Col>
                    <Col className='cls2'>
                    <h6>SNAPDEAL BUSINESS</h6>
                    <ul >
                    <li>Shoooing App</li>
                    <li>Sell on Snapdeal</li>
                    <li>Media Enquiries</li>
                    </ul>
                    </Col>
                    <Col className='cls2'>
                    <h6>POPULAR LINKS</h6>
                    <ul >
                    <li>Lehenga</li>
                    <li>Kid's Clothing </li>
                    <li>Sarees</li>
                    <li>Winter Wear</li>
                    </ul>
                    </Col>
                    <Col className='cls2'>
                    <h6>SUBSCRIBE</h6>
                    <div className="d-flex"><Form.Control className='tet1' type='text' placeholder='Your email address'></Form.Control>
                    <button className='btn btn-dark'>SUBSCRIBE</button></div>
                    <p>Register now to get updates on promotions andcoupons. Or <a href="">Download App</a></p>
                    </Col>
                    
                </Row>
                </Container>
            </Container>
        </div>
    );
}

export default ThirdPage;
