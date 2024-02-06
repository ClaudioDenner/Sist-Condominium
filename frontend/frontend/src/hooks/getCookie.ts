'use server'
import { cookies } from "next/headers";

export async function getCookie(name: string) {

    const result = cookies().get(name);
    return result
}