'use server'

import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { gettingAPI } from "@/app/_api/axios"

const getUser = async (userId:string) =>{
    try{
        const user = (await gettingAPI('/auth/user/'+userId)).data
        return user
    }
    catch(e){
        console.log(e)
    }
}

export default getUser