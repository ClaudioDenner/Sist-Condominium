'use server'
import { IFinances } from "@/types/IFinances"
import { getCookie } from "./getCookie"
import { ListCookiesNames } from "@/types/listCookiesNames"
import { IAuth } from "@/types/IAuth"

export const getFinances = async ()=>{
    const cookie = await getCookie(ListCookiesNames.cookieAuth)
    const cookieValue:IAuth = await JSON.parse(cookie?.value as string)
    const url = cookieValue.role == 'admin' ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/finances`: `${process.env.NEXT_PUBLIC_BACKEND_URL}/finances`
    const query:IFinances[] =  await fetch(url,{
        headers:{
            Authorization:`Bearer ${cookieValue.token}`
        }
    })
    .then((response) => {if (response.status!==200){throw new Error('error')} return response.json()})
    .catch((error) => {
        console.log(error)
        return []});
    
    return query
}