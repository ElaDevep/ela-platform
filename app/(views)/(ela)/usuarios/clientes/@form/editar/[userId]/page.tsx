'use client'

import { useEffect, useState } from "react"
import styles from "./page.module.sass"
import Button from "@/app/components/Button"
import UserForm from "../../../_components/UserForm/UserForm"
import getUser from "./get_user"
import putUser from "../../../../../../../api/USERS/put_user"
import { useRouter } from "next/navigation"
import get_user from "@/app/api/USERS/get_user"


export default function UserCreator({ params }: { params: { userId: string }}) {
    const [user,setUser] = useState<object>()
    const router = useRouter()

    const updateUser = async(formData:object) =>{
        const response = await putUser(params.userId,formData)
        console.log(response)
        if(response.status == 'ok'){
            router.push('/usuarios/clientes')
        }
        //router.back()
        return response
    }

    const getUserInfo = async () =>{
        const response = await get_user(params.userId)
        if(response.status=='ok'){
            setUser(response.data)
        }
    } 

    useEffect(()=>{
        getUserInfo()
    },[])


    return <>
        <h2>Actualizar usuario</h2>
        {user &&
            <UserForm action={updateUser} values={user}/>
        }
    </>
}