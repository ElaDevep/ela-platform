'use server'

import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"
import { postingAPI } from "@/app/_api/axiosAPI"

const postUser = async (userInfo:object) =>{
    let status
    try{
        const response = await postingAPI('/auth/register',userInfo)
        console.log(response)  
        status = response.status 
    }
    catch(e){
        return e
    }
    if(status=='ok'){
        redirect('/usuarios')
    }
}

export default postUser