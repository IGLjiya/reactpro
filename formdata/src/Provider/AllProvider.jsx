import { createContext, useState } from "react";

export const fromContext = createContext()

export const FormProvider = ({ children }) => {

    const [formData, setFormData] = useState({ username: "", password: "" })

    return <fromContext.Provider value={{ formData, setFormData }}>
        {children}
    </fromContext.Provider>
}