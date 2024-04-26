'use client'

import { Button, Header } from "@/ela-components"
import styles from "./page.module.sass"
import UserCard from "./_components/UserCard/UserCard"
import { useEffect, useState } from "react"
import Table from "@/app/components/table/Table"
import Column from "@/app/components/table/Column"
import Link from "next/link"
import get_all_users from "@/app/api/USERS/get_all_users"
import { usePathname } from "next/navigation"

export default function UserManager() {
    const [currentUser,setCurrentUser] = useState<any>()

    useEffect(()=>{
        console.log(currentUser)
    },[currentUser])



    return <>
        <Table className={styles.users_table} endpoint={get_all_users} getCurrent={setCurrentUser}>
            <Column field={'_id'}>Id</Column>
            <Column field={'name'}>Nombre</Column>
            <Column field={'lastname'}>Apellido</Column>
            <Column field={'email'}>Correo</Column>
            <Column field={'mobile'}>Celular</Column>
            <Column field={'role'}>Rol</Column> 
        </Table>
        <UserCard user={currentUser}/>
        <Link href={'/usuarios/clientes/nuevo'} className={styles.newUser_link}>Nuevo</Link>
    </>
}