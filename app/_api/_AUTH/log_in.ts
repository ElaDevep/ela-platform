'use server'

import { redirect } from "next/navigation"
import { postingAPI } from "../axios"
import { cookies } from "next/headers"

const logIn = async (userLogIn:object) =>{
    let status
    try{
        console.log(userLogIn)
        status = (await postingAPI('/auth/login',userLogIn)).status
    }
    catch(e){
        console.log(e)
        return true
    }

    if(status=='ok'){
        cookies().set('role','user')
        redirect('/')
    }
}

export default logIn