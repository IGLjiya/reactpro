import React, { useContext } from 'react';
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa"
import { ShopContext } from '../Provider/ShopProvider';
import { useNavigate } from 'react-router-dom';


const NavBar = () => {


    const { searchItem, setSearchItem,cartList } = useContext(ShopContext)

    const navigate = useNavigate()
    return <>

        <div className='px-3 d-flex bg-secondary sticky-top justify-content-between border-bottom align-items-center ' style={{ height: "60px" }}>
            <div className='align-items-center' style={{ cursor: "pointer" }}> <p className='fs-3 fw-bold text-warning'>ONLINE SHOPPING</p> </div>
            <div className='d-none gap-3 d-md-flex col-5 position-relative'>
                <input type="text" onChange={(e)=>setSearchItem(e.target.value)} value={searchItem} className='form-control' placeholder='Enter Search Item' />
                <FaSearch className='position-absolute top-50 end-0 translate-middle' />


            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <FaUser color='warning' size={20} className="me-4" />
                <div className="position-relative">
                    <FaShoppingCart size={20} cursor={"pointer"} onClick={()=>navigate("/cart")} />
                    <div className='position-absolute text-light rounded bg-success' style={{ top: "-10px", right: "-7px", fontSize: "13px" }}>{cartList.length}</div>
                </div>
            </div>
        </div>
    </>
}

export default NavBar;
