'use server'
import { cookies } from "next/headers";
import { IAuth } from "@/types/IAuth";


export async function getCookieUser(name: string) {
    try{
        const cookie = cookies().get(name);
        const cookieValue:IAuth = await JSON.parse(cookie?.value as string)
        return cookieValue
    }catch{
        return 
    }
}