'use server'

import { redirect } from "next/navigation"
import { postingAPI } from "../../../_api/axios"

const changePassword = async (body:object) =>{
    let status
    try{
        console.log(body)
        status = (await postingAPI('/reset-password',body))
        console.log(status)
    }
    catch(e){
        console.log(e)
    }
    redirect('/inicio_sesion')
}

export default changePassword