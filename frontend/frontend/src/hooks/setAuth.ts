import { handleLogin } from "@/actions"

export async function setAuth(email:string, pass:string){
    const form = JSON.stringify({email, pass})
    const res = await  fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
    {
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:form,
    }).then((res)=> {
        if(res.status!==201){
            throw new Error('fail')
        }
        return res.json()
    })
    .then((json)=>{
        handleLogin(JSON.stringify(json))
        return true
    })
    .catch((err)=>{
        return false
    })

    return res
    
}