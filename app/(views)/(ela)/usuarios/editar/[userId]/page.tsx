'use client'

import { useEffect, useState } from "react"
import styles from "./page.module.sass"
import Button from "@/app/components/Button"
import UserForm from "../../_components/UserForm/UserForm"
import getUser from "./get_user"
import putUser from "./put_user"


export default function UserCreator({ params }: { params: { userId: string }}) {
    const [user,setUser] = useState<object>()

    const updateUser = async(formData:object) =>{
        try{
            console.log(':v')
            putUser(params.userId,formData)
        }
        catch(e){
            console.log(e)
        }
    }

    const getUserInfo = async () =>{
        setUser(await getUser(params.userId))
    } 

    useEffect(()=>{
        getUserInfo()
    },[])


    return <>
    <div className={styles.userForm_container}>
        <h2>Actualizar usuario</h2>
        {user &&
            <UserForm action={updateUser} values={user}/>
        }
    </div>
    </>
}