'use server'

import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"
import { postingAPI } from "@/app/_api/axios"

const postUser = async (userInfo:object) =>{
    try{
        const response = await postingAPI('/auth/register',userInfo)
        console.log(response)   
    }
    catch(e){
        return e
    }
}

export default postUser