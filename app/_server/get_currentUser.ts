'use server'

import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { gettingAPI, postingAPI } from "../_api/axios"

const getLoggedUser = async () =>{
    const token = cookies().get('token')?.value
    try{
        console.log(token)
        const userId = (await postingAPI('/auth/validate-token',{token:token})).data.userId
        const user = (await gettingAPI('/auth/user/'+userId)).data
        return user
    }
    catch(e){
        console.log(e)
    }
}

export default getLoggedUser