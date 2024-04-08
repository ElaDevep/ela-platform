'use server'

import { gettingAPI } from "../axios"
import { cookies } from "next/headers"

const logIn = async (userLogIn:object) =>{
    const status = (await gettingAPI('/auth/login')).status
    
    console.log(status)
    if(status=='ok'){
        cookies().set('role','user')
    }
}

export default logIn