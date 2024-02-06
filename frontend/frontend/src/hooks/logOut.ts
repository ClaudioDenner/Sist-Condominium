'use server'
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'
import { ListCookiesNames } from "@/types/listCookiesNames";


export default async function logOut(){
    cookies().delete(ListCookiesNames.cookieAuth)
    
}