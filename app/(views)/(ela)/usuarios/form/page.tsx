'use client'

import { Header } from "@/ela-components"
import styles from "./page.module.sass"
import { useEffect, useState } from "react"
import { gettingAPI } from "@/app/_api/axios"
import Table from "@/app/components/table/Table"
import Column from "@/app/components/table/Column"
import getUsers from "@/app/_api/get_users"
import Form from "@/app/components/form/Form"
import TextField from "@/app/components/form/TextField"

export default function UserManager() {
    const [currentUser,setCurrentUser] = useState()

    const getUser = async(userId:string = '6618043e978c737dbeaf08ff') => {
        setCurrentUser((await gettingAPI('http://localhost:4000/auth/user/'+userId)).data)
    }

    const allUsers = async() =>{
        console.log(await getUsers())
    }

    useEffect(()=>{
        getUser()
    },[])

    useEffect(()=>{
        //console.log(currentUser)
    },[currentUser])

    return <>
        <Form>
            <TextField name=''/>

        </Form>
    </>
}