'use client'

import { Header } from "@/ela-components"
import styles from "./page.module.sass"
import UserCard from "./_components/userCard"
import { useEffect, useState } from "react"
import { gettingAPI } from "@/app/_api/axios"
import Table from "@/app/components/table/Table"
import Column from "@/app/components/table/Column"
import getUsers from "@/app/_api/get_users"

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
        <Table className={styles.users_table} endpoint={getUsers} getCurrent={getUser}>
            <Column field={'_id'}>Id</Column>
            <Column field={'name'}>Razón Social</Column>
            <Column field={'email'}>Correo</Column>
            <Column field={'mobile'}>Celular</Column>
            <Column field={'role'}>Rol</Column>
            <Column field={'approved'}>Activo</Column>
        </Table>
        <UserCard user={currentUser}/>
    </>
}