'use client'

import { Button, HStack, VStack } from "@/components/Core";
import { data } from "autoprefixer";
import { url } from "inspector";
import { Suspense, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation'

const Usuarios = () => {

    const [users, setUsers] = useState<any>([])

    const router = useRouter()

    useEffect(() => {
        const result = async () => {
            const res = await fetch('http://localhost:8000/user', {
                method: 'get',
            })
            
            const result = await res.json()
            setUsers(result.result.users)
        }

        result()
        
        
    }, [router])

    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const formData = watch();

      interface DataFormProps {
        username: string, 
        email: string, 
        password: string
      }

      const navigation = useRouter()

      const dataFetch = async () => {
        const result = await fetch('http://localhost:8000/user/create', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: formData.username,
                email: formData.email,
                password: formData.password
            })
        })
        if(result.status === 200) {
            navigation.push('/dashboard')
        }
      }

    
      const formSubmit = () => {
        dataFetch()    
      };

      

      

    return (
        <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }} >
            <HStack space={20}>
                
                <form onSubmit={handleSubmit(formSubmit)}>
                    <VStack space={16}>
                        <input type="username" {...register("username")} name="username" placeholder="Nome" style={{ borderColor: '#323232', borderWidth: 1, borderRadius: '24px', padding: '8px 16px' }}></input>
                        <input type="email" {...register("email")} placeholder="E-mail" style={{ borderColor: '#323232', borderWidth: 1, borderRadius: '24px', padding: '8px 16px' }}></input>
                        <input type="password" {...register("password")} placeholder="Senha" style={{ borderColor: '#323232', borderWidth: 1, borderRadius: '24px', padding: '8px 16px' }}></input>
                        <Button type="submit">Acessar</Button>
                    </VStack>
                </form>
                <div>
                    {users.map((item: any) => {
                        <div style={{ backgroundColor: "#000", borderRadius: 12, padding: 12, }}>
                            <p style={{ color: '#fff', fontSize: '20px' }}>{item.username}</p>
                        </div>
                    })}
                </div>
            </HStack>
        </div>
    )
};

export default Usuarios;