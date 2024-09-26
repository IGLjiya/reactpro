import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'

const NavBar = () => {
    return (
        <div className='px-3 d-flex justify-content-between border-bottom align-items-center ' style={{ height: "60px" }}>
            <div className='fs-3 fw-bold' style={{cursor:"pointer"}}>SHOPIFY</div>
            <div className='d-flex gap-3'>
                <FaHeart  size={20} cursor={"pointer"}/>
                <FaShoppingCart size={20} cursor={"pointer"}/>
            </div>
        </div>
    );
}

export default NavBar;
