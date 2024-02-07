'use client'
import { createContext, useState, Dispatch, SetStateAction } from "react";
import { ChildrenProvider } from "@/types/childrenProvider";
interface ContextProps {
    auth: boolean,
    setAuth:Dispatch<SetStateAction<boolean>>
}
export const ContextAuth = createContext<ContextProps>({
    auth:false,
    setAuth:()=>{}
})

export default function AuthProvider({ children }:ChildrenProvider){
    const [auth, setAuth]= useState(false)

    return <ContextAuth.Provider value={{auth, setAuth}}>{children}</ContextAuth.Provider>
}
