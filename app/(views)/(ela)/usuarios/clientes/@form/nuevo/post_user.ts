'use server'

import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"
import { axiosAPI } from "@/app/api/axiosAPI"

const postUser = async (userInfo:object) =>{
    let status
    try{
        const response = await axiosAPI.post('/auth/admin/registerCliente',userInfo)
        .then((res)=>{
            console.log(res)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    catch(e){
        return e
    }
}

export default postUser