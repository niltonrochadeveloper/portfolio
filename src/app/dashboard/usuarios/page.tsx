'use client'

import { Button, HStack, VStack } from "@/components/Core";
import { data } from "autoprefixer";
import { url } from "inspector";
import { Suspense, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation'

const Usuarios = () => {

    const [users, setUsers] = useState<any>([])

    const navigation = useRouter()

    const fetchData = async () => {
        const response = await fetch('http://localhost:8000/user', {
            method: 'GET',
        })
        
        const dados = await response.json()
        setUsers(dados.result.users)
    }
    useEffect(() => {

        if (users.length <= 0) {    
            fetchData()
        } else {
            console.log('users', users)
        }
        
    }, [users])

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
                
                {/* <form onSubmit={handleSubmit(formSubmit)}>
                    <VStack space={16}>
                        <input type="username" {...register("username")} name="username" placeholder="Nome" style={{ borderColor: '#323232', borderWidth: 1, borderRadius: '24px', padding: '8px 16px' }}></input>
                        <input type="email" {...register("email")} placeholder="E-mail" style={{ borderColor: '#323232', borderWidth: 1, borderRadius: '24px', padding: '8px 16px' }}></input>
                        <input type="password" {...register("password")} placeholder="Senha" style={{ borderColor: '#323232', borderWidth: 1, borderRadius: '24px', padding: '8px 16px' }}></input>
                        <Button type="submit">Acessar</Button>
                    </VStack>
                </form> */}

                <div>
                    {users.length > 0 ? users.map((user: {id: string, username: string, email: string, password: string, created_at: string, updated_at: string}) => (
                        <div key={user.id} style={{ width: '100%', borderRadius: 12, padding: 12, }}>
                            <table>
                                <tr style={{textAlign: 'left', padding: 4}}>
                                    <th>#</th>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    {/* <th>Cri</th>
                                    <th>At</th> */}
                                </tr>
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    {/* <td>{user.created_at}</td>
                                    <td>{user.updated_at}</td> */}
                                </tr>
                            </table>
                        </div>
                    )) : <p>Loading</p>}
                </div>
            </HStack>
        </div>
    )
};

export default Usuarios;