import { createContext, useState } from "react"

export const urlContext = createContext()

export const UrlProvider = ({ children }) => {

    const [Data, setData] = useState("")

    return <urlContext.Provider value={{ Data, setData }}>
        {children}
    </urlContext.Provider>

}