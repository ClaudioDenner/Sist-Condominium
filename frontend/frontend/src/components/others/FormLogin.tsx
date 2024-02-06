'use client'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useForm } from "react-hook-form"
import { useState, useContext } from "react"
import { ContextAuth } from '@/app/context/AuthProvider'
import { Loader2 } from 'lucide-react'
import { setAuth } from '@/hooks/setAuth'
import { useRouter } from "next/navigation"



export default function FormLogin(){
    const router = useRouter()
    const context = useContext(ContextAuth)
    const [isLoad, setLoading] = useState(false)


    const formSchema = z.object({
        email: z.string().email({message:'Insira um email válido.'}),
        password: z.string().min(5,{message: 'Insira um password válido.'})
      })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
        },
      })
    

    async function onSubmit(values:z.infer<typeof formSchema>){
        setLoading(true)
        const query = await setAuth(values.email, values.password)
        console.log(query)
        query ? context.setAuth(true) : context.setAuth(false)
        
        form.reset()
        setLoading(false)

        query && router.refresh()
    }
    
    
    return(
        <div className="w-2/5 mt-10">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                    control={form.control}
                    name="email"
                    disabled={isLoad}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="user@condominio.com" type="email"{...field}  />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}/>
                    
                    <FormField
                    control={form.control}
                    name="password"
                    disabled={isLoad}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}/>
                    <Button type="submit" disabled={isLoad}>
                        Login
                        {isLoad && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    </Button>
                </form>
            </Form>
            
        </div>
    )
}