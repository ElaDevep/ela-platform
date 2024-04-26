'use client'

import { Button, Header } from "@/ela-components"
import styles from "./page.module.sass"
import { useEffect, useState } from "react"
import Table from "@/app/components/table/Table"
import Column from "@/app/components/table/Column"
import Link from "next/link"
import get_all_enterprises from "@/app/api/ENTERPRISES/get_all_enterprises"

export default function EnterpriseManager() {
    const [currentEnterprise,setCurrentUser] = useState<any>()

    useEffect(()=>{
        console.log(currentEnterprise)
    },[currentEnterprise])



    return <>
        <Table className={styles.users_table} endpoint={get_all_enterprises} getCurrent={setCurrentUser}>
            <Column field={'_id'}>Id</Column>
            <Column field={'nit'}>NIT</Column>
            <Column field={'razonSocial'}>Razon Social</Column>
            <Column field={'direccion'}>Dirección</Column>
            <Column field={'celular'}>Celular</Column>
            <Column field={'tipo'}>Tipo</Column> 
        </Table>
        <Link href={'/usuarios/clientes/nuevo'} className={styles.newUser_link}>Nuevo</Link>
    </>
}