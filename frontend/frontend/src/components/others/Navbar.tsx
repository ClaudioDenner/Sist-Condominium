'use client'
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useContext } from "react"
import { ContextAuth } from "@/app/context/AuthProvider"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ListCookiesNames } from "@/types/listCookiesNames"
import { getCookieUser } from "@/hooks/getCookiesUser"
import { IAuth } from "@/types/IAuth"
import { Button } from "../ui/button"
import logOut from "@/hooks/logOut"
import { useRouter } from "next/navigation"




export default function Navbar(){
    const authContext = useContext(ContextAuth)
    const router = useRouter()
    const [cookie, setCookie] = useState<IAuth>()

    
    useEffect(()=>{
        getCookieUser(ListCookiesNames.cookieAuth).then(cookie => setCookie(cookie))
    },[authContext.auth])
    
    
    function Loggout(){
        logOut()
        authContext.setAuth(false)
        router.refresh()
    }

    return(
        <>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Condominio</span>
            </Link>
            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                <div className="flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                    {!cookie?
                     <Button variant="outline"><Link href="/login">LogIn</Link></Button>
                    :
                    <Popover>
                    <PopoverTrigger>
            
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>USER</AvatarFallback>
                        </Avatar>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="px-4 py-3">
                            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{cookie?.email}</span>
                            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400 cursor-pointer"><Button variant="outline" onClick={()=>Loggout()}>Sign Out</Button></span>
                        </div>
                        <div className="z-50 md:hidden top-0 right-5 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Informations</Link>
                                </li>
                                <li>
                                    <Link href="/financeiro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Financeiro</Link>
                                </li>
                                <li>
                                    <Link href="/portaria" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Portaria</Link>
                                </li>
                            </ul>
                        </div>
                    </PopoverContent>
                </Popover>
                    }
                </div>

                <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <Link href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Informações</Link>
                </li>
                <li>
                    <Link href="/financeiro" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Financeiro</Link>
                </li>
                <li>
                    <Link href="/portaria" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Portaria</Link>
                </li>

                </ul>
            </div>
            </div>
            </nav>
        </>
    )
}