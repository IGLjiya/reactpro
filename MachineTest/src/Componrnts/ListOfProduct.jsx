import { useContext } from "react"
import { MdDelete, MdShoppingCart } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { ShopContext } from "../Provider/ShopProvider"
import toast from "react-hot-toast"


const ListOfProduct = ({ items, cart }) => {

    const { cartList, setCartList } = useContext(ShopContext)

    const navigate = useNavigate()

    const handleAddToCart = () => {
        const exist = cartList.find((element) => element.id == items.id)
        if (exist) {
            const response = cartList.map((element) => {
                if (element.id == items.id) {
                    return {
                        ...element,
                        qty: element.qty + 1,
                        totalPrice: (element.price - (element.price * (element.discountPercentage / 100))) * (element.qty + 1)
                    }
                }
                return element
            })
            setCartList(response)
        } else {
            items.qty = 1
            items.totalPrice = items.price - (items.price * (items.discountPercentage / 100))
            setCartList([items, ...cartList])
        }
        return toast.success("Added to cart")
    }

    const removeProduct = () => {
        const response = cartList.filter((element) => element.id != items.id)
        setCartList(response)
        return toast.success("Product Remove From Cart")
    }


    const handleQtyUpdate = (op) => {
        if (items.qty == 1 && op == "-") {
            return removeProduct()
        }
        const response = cartList.map((element) => {
            if (element.id == items.id) {
                return {
                    ...element,
                    qty: op == "+" ? element.qty + 1 : element.qty - 1,
                    totalPrice: (element.price - (element.price * element.discountPercentage / 100)) * (op == "+" ? element.qty + 1 : element.qty - 1)
                }
            } return element
        })
        setCartList(response)
    }

    return <>
        <div className='border mx-3 mt-5 p-2' style={{ width: "15rem" }}>
            <div onClick={() => navigate(`/product/${items.id}`)} style={{ cursor: "pointer" }}>
                <img src={items.images[0]} alt={items.title} style={{ aspectRatio: 1 / 1, width: "15rem", objectFit: "contain" }} />
            </div>
            <div onClick={() => navigate(`/product/${items.id}`)} style={{ cursor: "pointer" }}>
                <h6 className='text-center text-truncate'>{items.title}</h6>
                <p className='text-truncate'>{items.description}</p>
            </div>

            {
                !cart && <>
                    <div className="d-flex justify-content-evenly" onClick={() => navigate(`/product/${items.id}`)} style={{ cursor: "pointer" }}>
                        <s><p className="text-secondary">{items.price}</p></s>
                        <p className="text-success">{items.discountPercentage}%</p>
                    </div>
                    <p className="text-center">Price :{(items.price - (items.discountPercentage * items.price) / 100).toFixed(2)}</p>
                </>
            }
            {
                cart && <>
                    <div className="text-center py-1">
                        <b>Price:- {items.totalPrice.toFixed(2)}</b>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2">
                        <button className="btn btn-outline-secondary" onClick={() => handleQtyUpdate("-")}>-</button>
                        <div>{items.qty}</div>
                        <button className="btn btn-outline-secondary" onClick={() => handleQtyUpdate("+")}>+</button>
                    </div>
                </>
            }
            {
                cart ? <button onClick={removeProduct} className="btn btn-outline-danger col-12 d-flex align-items-center justify-content-center"> <MdDelete /> Remove</button>
                    : <button onClick={handleAddToCart} className="btn btn-outline-primary col-12"> <MdShoppingCart /> Add to Cart</button>
            }

        </div>


    </>
}

export default ListOfProduct;
