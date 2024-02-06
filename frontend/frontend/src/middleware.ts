
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { ListCookiesNames } from '@/types/listCookiesNames'
 
export function middleware(request: NextRequest) {
  const token = request.cookies.get(ListCookiesNames.cookieAuth)
  if (token) {
    if(request.nextUrl.pathname === '/') { return NextResponse.next()}
    if(request.nextUrl.pathname === '/financeiro') { return NextResponse.next()}
    if(request.nextUrl.pathname === '/users') { return NextResponse.next()}
    if(request.nextUrl.pathname === '/portaria') { return NextResponse.next()}
    return NextResponse.redirect(new URL('/', request.url))
  }
 
  if(!token){
    if(request.nextUrl.pathname === '/login') { return NextResponse.next()}
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
    matcher: ['/','/login','/financeiro','/users','/portaria'],
  }
