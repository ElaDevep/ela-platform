'use server'

import { gettingAPI, postingAPI } from "@/app/_api/axios"
import { cookies } from "next/headers"


export const logIn = async (formData: FormData) => {
    
    const status = (await postingAPI('/auth/login',formData))
    
    console.log(status)

    // if(status=='ok'){
    //     cookies().set('role','user')
    // }
}