'use server'

import { axiosAPI } from '../axiosAPI'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function log_in(
    userInfo:object
) {
    let response:APIResponse<string> ={
        status:undefined,
        data:undefined
    }
    await axiosAPI.post('/auth/logi',userInfo)
    .then((res)=>{
        response = res.data
        if(response.data)
            cookies().set('userToken',response.data)
    }).catch((error)=>{
        if(error.response!=undefined)
            response = error.response.data
    })  
    //console.log(response)
    if(response.status=='ok' && response != undefined){
        redirect('/usuarios/clientes')
    }
    else{
        return response
    }
}