'use server'

import { redirect } from "next/navigation"
import { gettingAPI, postingAPI } from "../../../_api/axios"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"

const logIn = async (userLogIn:object) =>{
    let status
    try{
        cookies().set('token','none')
        const token = (await postingAPI('/auth/login',userLogIn)).data
        const response = await postingAPI('/auth/validate-token',{token:token})
        cookies().set('token',token)
        status = response.status
        console.log(response)
    }
    catch(e){
        return e
    }

    if(status == 'ok'){
        console.log(';v')
        revalidatePath('/')
        redirect('/usuarios')
    }
}

export default logIn