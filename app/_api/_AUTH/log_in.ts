'use server'

import { redirect } from "next/navigation"
import { postingAPI } from "../axios"
import { cookies } from "next/headers"

const logIn = async (userLogIn:object) =>{
    const status = (await postingAPI('/auth/login',userLogIn)).status
    
    //console.log(status)
    if(status=='ok'){
        cookies().set('role','user')
        redirect('/')
    }
}

export default logIn