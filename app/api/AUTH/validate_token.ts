'use server'

import { redirect } from 'next/navigation'
import { axiosAPI } from '../axiosAPI'
import { cookies } from 'next/headers'

export default async function validate_token() {
    let response:APIResponse
    const token = cookies().get('userToken')
    // const d = 
    if(token != undefined){
        //console.log(cookies().get('userToken'))
        await axiosAPI.post('/auth/validate-token',{token:token.value})
        .then((res)=>{
            console.log(res.data)
            response = res.data
        }).catch((error)=>{
            console.log(error)
            cookies().delete('userToken')
        })  
    }
    return response
    //console.log(response)
}