'use client'
import { createContext, useState, Dispatch, SetStateAction } from "react";

interface ContextProps {
    auth: boolean,
    setAuth:Dispatch<SetStateAction<boolean>>
}
export const ContextAuth = createContext<ContextProps>({
    auth:false,
    setAuth:()=>{}
})

export default function AuthProvider({ children }){
    const [auth, setAuth]= useState(false)

    return <ContextAuth.Provider value={{auth, setAuth}}>{children}</ContextAuth.Provider>
}
