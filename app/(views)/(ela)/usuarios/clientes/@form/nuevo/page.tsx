'use client'

import { useEffect } from "react"
import UserForm from "../../_components/UserForm/UserForm"
import styles from "./page.module.sass"
import postUser from "./post_user"
import Button from "@/app/components/Button"


export default function UserCreator() {

    const createUser = async(formData:object) =>{
        try{
            console.log(':v')
            const response = await postUser(formData)
            console.log(response)
        }
        catch(e){
            console.log(e)
        }
    }


    return <>
        <h2>Crear usuario</h2>
        <UserForm action={createUser}/>
    </>
}