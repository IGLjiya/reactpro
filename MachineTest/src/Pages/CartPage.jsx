import { useContext } from "react";
import { ShopContext } from "../Provider/ShopProvider";
import { } from "react-icons";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ListOfProduct from "../Componrnts/ListOfProduct";



const CartPage = () => {

    const { cartList, setCartList, setSearchItem, searchItem } = useContext(ShopContext)

    const navigate = useNavigate()

    return <>

        <div className='px-3 d-flex bg-secondary sticky-top justify-content-between border-bottom align-items-center ' style={{ height: "60px" }}>
            <div className='align-items-center' style={{ cursor: "pointer" }}> <p className='fs-3 fw-bold text-warning'>CART</p> </div>
            <div className='d-none gap-3 d-md-flex col-5 position-relative'>
                <input type="text" onChange={(e) => setSearchItem(e.target.value)} value={searchItem} className='form-control' placeholder='Enter Search Item' />
                <FaSearch className='position-absolute top-50 end-0 translate-middle' />


            </div>
            <div className='d-flex justify-content-center align-items-center '>
                <FaUser color='warning' size={20} className="me-4" />
                <FaHome size={25} cursor={"pointer"} onClick={() => navigate("/")} />
            </div>
        </div>

        <div className="d-flex flex-wrap">
        {
            cartList.map((items)=>{
                return <ListOfProduct
                items={items}
                key={items.id}
                cart={true}
                />
            })
        }
        </div>


    </>
}

export default CartPage;
