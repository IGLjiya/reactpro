import React, { useRef } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../Hooks';


const NavBar = () => {

    // const cartSectionRef  = useRef(null);

    // const scrollToCart = () =>{
    //     cartSectionRef.current.scrollIntoView({behavior : "smooth"})
    // }

    const { cartList } = useCart()
    return (
        <div className='px-3 d-flex justify-content-between border-bottom align-items-center ' style={{ height: "60px" }}>
            <div className='fs-3 fw-bold' style={{ cursor: "pointer" }}>SHOPIFY</div>
            <div className='d-flex'>
                <FaHeart size={20} className="me-4" />
                <div className="position-relative">
                    <FaShoppingCart size={20} cursor={"pointer"}  />
                    <div className='position-absolute text-light rounded bg-danger' style={{ top: "-10px", right: "-7px", fontSize: "13px" }}>{cartList.length}</div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
