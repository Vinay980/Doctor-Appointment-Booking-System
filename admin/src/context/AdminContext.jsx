import { createContext, useState } from "react";

export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const [aTokem, setAToken] = useState('')

    const backEndUrl = import.meta.env.VITE_BACKEND_URL

    const value = {
        aTokem, setAToken,
        backEndUrl
    }
    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider