'use server'

import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { gettingAPI, puttingAPI } from "@/app/_api/axiosAPI"

const putUser = async (userId:string,userInfo:object) =>{
    let status
    try{
        status = (await puttingAPI('/auth/update/'+userId,userInfo)).status
        console.log(status)
    }
    catch(e){
        console.log(e)
    }
    if(status=='ok'){
        redirect('/usuarios')
    }

}

export default putUser