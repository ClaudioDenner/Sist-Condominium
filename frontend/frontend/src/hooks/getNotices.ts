'use server'
import { INotice } from "@/types/INotice"
import { getCookie } from "./getCookie"
import { ListCookiesNames } from "@/types/listCookiesNames"
import { IAuth } from "@/types/IAuth"

export const getNotices = async ()=>{
    try{
        const cookie = await getCookie(ListCookiesNames.cookieAuth)

        const cookieValue:IAuth = await JSON.parse(cookie?.value as string)
    
        const url = cookieValue.role == 'admin' ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/information/admin`: `${process.env.NEXT_PUBLIC_BACKEND_URL}/information`
    
            const query:INotice[] =  await fetch(url,{
                headers:{
                    Authorization:`Bearer ${cookieValue.token}`
                }
            })
            .then((response) => {if (response.status!==200){throw new Error('error')} return response.json()})
            .catch((error) => {return []})
            //.then(response => response.json())
            
            return query
    }catch(error) {
        return []
    }

}