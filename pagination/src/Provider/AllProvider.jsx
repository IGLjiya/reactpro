import { createContext, useState } from "react";

export const PageContext = createContext()

export const PageProvider = ({children})=>{
    const [product, setProducts] = useState([])

    return(
        <PageContext.Provider value={{product, setProducts}} >
            {children}
        </PageContext.Provider>
    )

}