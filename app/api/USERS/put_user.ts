'use server'

import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { axiosAPI } from "@/app/api/axiosAPI"

const putUser = async (userId:string,userInfo:object) =>{
    let response:APIResponse<string>={
        status:undefined,
        data:undefined
    }
    try{
        await axiosAPI.put('/auth/update/'+userId,userInfo).
        then((res)=>{
            console.log(res)
            response=res.data
        })
        .catch((error)=>{
            console.log(error)
            response = error.response.data
        })
    }
    catch(e){
        console.log(e)
    }
    return response
}

export default putUser