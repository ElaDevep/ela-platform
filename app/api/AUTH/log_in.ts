'use server'

import { axiosAPI } from '../axiosAPI'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export default async function log_in(
    userInfo:object
) {
    let response:APIResponse<string> ={
        status:undefined,
        data:undefined
    }
    console.log(':v')
    await axiosAPI.post('/auth/login',userInfo)
    .then((res)=>{
        response = res.data
        if(response.data)
            cookies().set('userToken',response.data)
            NextResponse.json(res.data)
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