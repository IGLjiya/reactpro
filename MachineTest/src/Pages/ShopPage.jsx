import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../Provider/ShopProvider';
import ListOfProduct from '../Componrnts/ListOfProduct';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"

const ShopPage = () => {

    const { data, setData, searchItem } = useContext(ShopContext)

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products")
                const result = await response.json()
                const filteredData = result.products.filter((product) => product.title.toLowerCase().includes(searchItem.toLowerCase()))
                setData(filteredData)


            } catch (error) {
                console.log(error.message);
            }
        }
        getProduct()

    }, [searchItem])

    return <>
        <div className='d-flex flex-wrap justify-content-center align-items-center pb-5'>
            {
                data.map((items) => {
                    return <ListOfProduct
                        items={items}
                        key={items.id}
                    />
                })
            }
        </div>
        <div className='container-fluid px-5 bg-dark row text-light d-flex text-center'>
            <div className='d-flex justify-content-end  py-3 gap-3 '> 
                <FaWhatsapp size={30}  /> <FaInstagram size={30} /> <FaTwitter size={30} /> <FaFacebook size={30} />
            </div>
            <hr />

            <div className='col-12 col-lg-3 col-md-6'>
                <h6>Get to Know Us</h6>
                <div className='text-secondary text-truncate' style={{ lineHeight: "30px" }}>
                    <ul className='list-unstyled'>
                        <li className=''>About Site</li>
                        <li>Careers</li>
                        <li>Press Raleases</li>
                        <li>Site Science</li>
                    </ul>
                </div>
            </div>
            <div className='col-12 col-lg-3 col-md-6'>
                <h6>Connect With Us</h6>
                <div className='text-secondary text-truncate ' style={{ lineHeight: "30px" }}>
                    <ul className='list-unstyled'>
                        <li>FaceBook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
            <div className='col-12 col-lg-3 col-md-6'>
                <h6>Make Money With Us</h6>
                <div className='text-secondary text-truncate' style={{ lineHeight: "30px" }}>
                    <ul className='list-unstyled'>
                        <li>Sell One Site</li>
                        <li>Sell under Site Accelarator</li>
                        <li>Protect and Build Your Brand</li>
                        <li>Site Global Selling</li>
                        <li>Supply to Site</li>
                        <li>Become an Affiliate</li>
                        <li>Fullfilment by Site</li>
                        <li>Adverties Your Products</li>
                        <li>Site Pay on Marchants</li>
                    </ul>
                </div>

            </div>
            <div className='col-12 col-lg-3 col-md-6'>
                <h6>Let Us Help You</h6>
                <div className='text-secondary text-truncate' style={{ lineHeight: "30px" }}>
                    <ul className='list-unstyled'>
                        <li>Your Account</li>
                        <li>Return Centre</li>
                        <li>Recalls and Product Safety Alert</li>
                        <li>100% Purchase Protection</li>
                        <li>Site App Download</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='text-secondary text-end'>© 1996-2024, onlineshop.com, IGLjiya. or its affiliates</p>
        </div>


    </>
}

export default ShopPage;
