import { createContext, useState } from "react";


export const ShopContext = createContext()

export const ShopProvider = ({ children }) => {

    const [data, setData] = useState([])
    const [searchItem, setSearchItem] = useState("")
    const [cartList, setCartList] = useState([])



    return (
        <ShopContext.Provider value={{ data, setData, searchItem, setSearchItem, cartList, setCartList }} >
            {children}
        </ShopContext.Provider>
    )
}
