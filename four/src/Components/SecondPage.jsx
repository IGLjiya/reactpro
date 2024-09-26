import React from 'react';
import { Button, Card, Carousel, Col, Container, Form, Row } from 'react-bootstrap';
import myImgPincode from './img/pincode.png'
import './SecondPage.css'
import { FaApple, FaGooglePlay } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";




const SecondPage = () => {
    return (
        <div>
            <Container fluid className='pt-5 ps-5 '>
                {/* <div className='d-flex'>


                    <Col style={{ marginLeft: '9%', marginRight: '5%' }} >
                        </Col>
                    <Col style={{ marginLeft: '2%', marginRight: '4%' }}>
                        
                    </Col>
                </div>
                <div style={{ position: '' }}></div> */}

                <div className="container2">
                    <div className="item item1 ">
                        {/* <div className='bg-danger' style={{ width: '150px', height: '800px' }}></div>   style={{backgroundImage:"url('https://n1.sdlcdn.com/imgs/k/v/x/Men_sitenavigation-b972a.jpg') */}
                        <div><h6>TOP CATEGORIES</h6></div>
                        <div className='d-flex flex-column flex-wrap pe-2  text-truncate ' style={{width:"150px"}}>
                        <li className='list-unstyled py-2'><a className='text-decoration-none text-dark text-truncate' href=""><div className='text-truncate'> <img src="https://n1.sdlcdn.com/imgs/k/v/x/Men_sitenavigation-b972a.jpg" width={28} height={28} alt="" /> Mens's Fashion</div></a></li>
                        <li className='list-unstyled py-2'><a className='text-decoration-none text-dark text-truncate' href=""><div><img src="https://n1.sdlcdn.com/imgs/k/v/x/WoMen_sitenav-5a8ca.jpg" width={28} height={28} alt="" />Women's Fashion</div></a></li>
                        <li className='list-unstyled py-2'><a className='text-decoration-none text-dark text-truncate' href=""><div><img src="https://n1.sdlcdn.com/imgs/k/v/x/HOme_sitenavigation-d7a00.jpg" width={28} height={28} alt="" />Home & Kitchen</div></a></li>
                        <li className='list-unstyled py-2'><a className='text-decoration-none text-dark text-truncate' href=""><div><img src="https://n4.sdlcdn.com/imgs/k/v/x/Toys_Sitenavigation-ef666.jpg" width={28} height={28} alt="" />Toys, Kids' Fashion & more</div></a></li>
                        <li className='list-unstyled py-2'><a className='text-decoration-none text-dark text-truncate' href=""><div><img src="https://n2.sdlcdn.com/imgs/k/v/x/Beauty_Site_navigation-5f3be.jpg" width={28} height={28} alt="" />Beauty, Health & Daily Needs</div></a></li>
                        </div>
                        <div><h6>MORE CATEGORIES</h6></div>
                        <div className='d-flex flex-column flex-wrap text-truncate '>
                        <li className='list-unstyled py-2'><a style={{fontSize:"15px"}} className='text-decoration-none text-dark text-truncate' href=""><div className='text-truncate'>Automotive</div></a></li>
                        <li className='list-unstyled py-2'><a style={{fontSize:"15px"}} className='text-decoration-none text-dark text-truncate' href=""><div className='text-truncate'>Electronic</div></a></li>
                        <li className='list-unstyled py-2'><a style={{fontSize:"15px"}} className='text-decoration-none text-dark text-truncate' href=""><div className='text-truncate'>Mobile & Accessories</div></a></li>
                        <li className='list-unstyled py-2'><a style={{fontSize:"15px"}} className='text-decoration-none text-dark text-truncate' href=""><div className='text-truncate'>Sport, Fitness & outdoor</div></a></li>
                        <li className='list-unstyled py-2'><a style={{fontSize:"15px"}} className='text-decoration-none text-dark text-truncate' href=""><div className='text-truncate'>Computer & Gamming</div></a></li>
                        <li className='list-unstyled py-2'><a style={{fontSize:"15px"}} className='text-decoration-none text-dark text-truncate' href=""><div className='text-truncate'>Book, Media & Music</div></a></li>
                        <li className='list-unstyled py-2'><a style={{fontSize:"15px"}} className='text-decoration-none text-dark text-truncate' href=""><div className='text-truncate'>Hobbies</div></a></li>
                        </div>
                        <div><h6>TRENDING SEARCHES</h6></div>
                        <div className='d-flex flex-column flex-wrap text-truncate '>
                        <li className='list-unstyled'><a style={{fontSize:"15px"}} className='text-decoration-none text-dark text-truncate' href=""><div className='text-truncate d-flex align-content-center'><CiSearch className='py-1' size={25}/> <p>Kitchen Product</p></div></a></li>
                        <li className='list-unstyled'><a style={{fontSize:"15px"}} className='text-decoration-none text-dark text-truncate' href=""><div className='text-truncate d-flex align-content-center'><CiSearch className='py-1' size={25}/> <p>Shoes For Men</p></div></a></li>
                        <li className='list-unstyled'><a style={{fontSize:"15px"}} className='text-decoration-none text-dark text-truncate' href=""><div className='text-truncate d-flex align-content-center'><CiSearch className='py-1' size={25}/> <p> Kurti Set</p></div></a></li>
                        <li className='list-unstyled'><a style={{fontSize:"15px"}} className='text-decoration-none text-dark text-truncate' href=""><div className='text-truncate d-flex align-content-center'><CiSearch className='py-1' size={25}/> <p>Sandal Men</p></div></a></li>
                        <li className='list-unstyled'><a style={{fontSize:"15px"}} className='text-decoration-none text-dark text-truncate' href=""><div className='text-truncate d-flex align-content-center'><CiSearch className='py-1' size={25}/> <p>Sport Shoes Men</p></div></a></li>

                        </div>
                    </div>
                    <div className="item item2">
                        <Carousel style={{ position: 'relative' }}>
                            <Carousel.Item interval={2000}>
                                <img style={{ width: '100%', height: '450px' }} src='https://n1.sdlcdn.com/imgs/a/b/c/feedConfig/landing_banner.jpg'></img>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img style={{ width: '100%', height: '450px' }} src='https://i0.wp.com/foxstoryindia.com/wp-content/uploads/2023/01/FSI-poster.jpg?resize=1024%2C512&ssl=1' />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img style={{ width: '100%', height: '450px' }} src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sneakers-collection-design-template-ad5b6530d28e27e288344b6fbb392c5d_screen.jpg?ts=1692330040' />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img style={{ width: '100%', height: '450px' }} src="https://cdn.shopify.com/s/files/1/0031/2793/5065/files/Banner-1_Feb-23-02-2022_687d5da0-669e-4b3d-8dfe-6745741a7e94_1024x1024.jpg?v=1657003879" alt="" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="item item3">
                        <Card style={{ position: 'relative', top: '10%', }} >
                            <Card.Img variant="top" src={myImgPincode} width={20} height={200} />
                            <Card.Body>
                                <Form>
                                    <Form.Control type='text' placeholder='Enter Pincode'></Form.Control>

                                    <Button variant="dark" style={{ width: '180px', margin: '10px 10px 10px 10px' }}>Submit</Button><Button style={{ width: '70px' }} variant="secondary">Next</Button>
                                </Form>


                            </Card.Body>

                        </Card>
                    </div>
                    <div className="item item4">
                        <h4>RECENTLY VIWED PRODUCTS</h4>
                        <div className="d-flex flex-shrink-0 gap-4" >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://n2.sdlcdn.com/imgs/b/e/g/large/Tanishka-Brown-Door-Curtain-Set-SDL880259736-1-1a477.jpg" />
                                <Card.Body>
                                    <Card.Text>
                                        <h6>Tanishka Fabs Solid Semi-Transparent Eyelet Curtain</h6> <br />
                                        <del>Rs 999</del> Rs 520
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://n1.sdlcdn.com/imgs/k/o/m/large/Honey-Bunny-L-Diaper-Pants-SDL500431515-1-cfd6d.jpg" />
                                <Card.Body>
                                    <Card.Text>
                                        <h6>Honey Bunny Pants Diapers l-64pcs</h6> <br />
                                        <del>Rs 999</del> Rs 581
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://n4.sdlcdn.com/imgs/k/p/m/large/Honey-Bunny-M-Diaper-Pants-SDL307366701-1-73ca3.jpg" />
                                <Card.Body>
                                    <Card.Text>
                                        <h6>Honey Bunny -M Dipers Pants</h6><br />
                                        <del>Rs 1099</del> Rs 554
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://n2.sdlcdn.com/imgs/k/y/z/large/GKBOSS-Indoor-Three-Layer-Lucky-SDL405421240-1-ad2b9.jpg" />
                                <Card.Body>
                                    <Card.Text>
                                        <h6>GKBOSS Indoor Three Layer Lucky Bamboo Palnt Plant</h6> <br />
                                        <del>Rs 699</del> Rs 199
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://n2.sdlcdn.com/imgs/k/o/4/large/Carnival-Banana-full-plate-6-SDL942540133-1-3ce50.PNG" />
                                <Card.Body>
                                    <Card.Text>
                                        <h6>Carnival - Banana full palte 6pcs Green Melamine Dinner Set</h6> <br />
                                        <del>Rs 799</del> Rs 548
                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        </div>
                    </div>
                    <div className="item item5">
                        <h4>TRENDING PRODUCTS</h4>
                        <div className="d-flex gap-3">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://t1.sdlcdn.com/imgs/i/n/r/large/bhawna-collection-Loard-Shiv-Trishul-SDL890408077-1-86933.jpeg" />
                                <Card.Body>
                                    <Card.Text>
                                        <h6>Shiv Trishul Damru Gol-plted Lochet with Rudraksha Mala</h6> <br />
                                        <del>Rs 599</del> Rs 105
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://t3.sdlcdn.com/imgs/i/u/v/large/HeelSocks1-aeb5a.jpg" />
                                <Card.Body>
                                    <Card.Text>
                                        <h6>Stay Healthy -Foot Protector</h6> <br />
                                        <del>Rs 899</del> Rs 96
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://t3.sdlcdn.com/imgs/i/z/j/large/bc12-606ed.jpg" />
                                <Card.Body>
                                    <Card.Text>
                                        <h6>Maxbell USB Rechargeable Electronic Flameless Lighter</h6> <br />
                                        <del>Rs 899</del> Rs 172
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://t1.sdlcdn.com/imgs/j/d/1/large/Aadi-Black-Casual-Shoes-SDL461191496-3-fa710.jpeg" />
                                <Card.Body>
                                    <Card.Text>
                                        <h6>Aadi BLack Casual Shoes </h6> <br />
                                        <del>Rs 999</del> Rs 331
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://t4.sdlcdn.com/imgs/k/w/k/large/Bentag-kitchenware-Vegetable-Fruit-Clever-SDL841893040-1-1e2e8.jpg" />
                                <Card.Body>
                                    <Card.Text>
                                        <h6>Bentag kitchenware Vegetable $ fruit Clever Cutter Stainless</h6> <br />
                                        <del>Rs 499</del> Rs 139
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://t1.sdlcdn.com/imgs/k/e/u/large/Veirdo-100-Cotton-Regular-Fit-SDL051246309-1-51a91.jpg" />
                                <Card.Body>
                                    <Card.Text>
                                        <h6>Veirdo- Multicolor Cotton Regula Fit Man's T-Shirt </h6> <br />
                                        <del>Rs 1199</del> Rs 291
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://t3.sdlcdn.com/imgs/h/r/s/large/Shiv-Shakti-Kavach-5-Mukhi-SDL772359305-1-3b306.jpeg" />
                                <Card.Body>
                                    <Card.Text>
                                        <h6>Shiv Shakti Kavach 5 Mukhi Rudraksha Mala with Shiv</h6> <br />
                                        <del>Rs 599</del> Rs 176
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="item item6 d-flex">
                        <div className="left">
                            <img src="https://i1.sdlcdn.com/img/appScreenshot@1x.png" width={430} height={462} alt="" />
                        </div>
                        <div className="right">
                            <h1>Download Snapdeal App Now</h1>
                            <p>Fast, Simple & Delightful. <br /> All it takes is 30 seconds to Download.</p>
                            <button className='btn1 '><FaApple size={35} /> Download on the App Store</button>
                            <button className='btn2'><FaGooglePlay size={35} />Google Play</button>
                        </div>

                    </div>
                </div>


            </Container>

        </div>
    );
}

export default SecondPage;
