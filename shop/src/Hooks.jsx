import { useContext } from "react"
import { CartContext } from "./Provider/cartProvider"

export const useCart = () =>{
    return useContext(CartContext)
}