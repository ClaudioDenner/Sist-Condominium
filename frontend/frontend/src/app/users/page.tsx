'use client'
import { getCookie } from "@/hooks/getCookie";
import { ListCookiesNames } from "@/types/listCookiesNames";

export default function Users() {

    async function dataFetch(){
        const cookie = await getCookie(ListCookiesNames.cookieAuth)
        const query = await fetch('http://localhost:3000/users',{
            headers: {
                Authorization:`Bearer ${cookie?.value}`,
            }
        }).then(response => response.json())
        .then(json => console.log(json))
    }

    dataFetch()

    return (
      <main className="flex w-full justify-center items-center">
        users
      </main>
    );
  }
  