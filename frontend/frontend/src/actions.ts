'use server'
 
import { cookies } from 'next/headers'
import { ListCookiesNames } from './types/listCookiesNames'
 
export async function handleLogin(sessionData:string) {
  cookies().set(ListCookiesNames.cookieAuth, sessionData, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/',
  })
}