import React, { useContext } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { cartContext } from '../App';

const NavBar = () => {

     const {cartList} = useContext(cartContext)
    return (
        <div className='px-3 d-flex justify-content-between border-bottom align-items-center ' style={{ height: "60px" }}>
            <div className='fs-3 fw-bold' style={{cursor:"pointer"}}>SHOPIFY</div>
            <div className='d-flex'>
                <FaHeart size={20} className="me-4"/>
                <div className="position-relative">
                    <FaShoppingCart size={20} cursor={"pointer"} onClick={()=>window.location.href="#cart"} />
                    <div className='position-absolute' style={{top: "-10px", right: "-7px"}}>{ cartList.length }</div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
