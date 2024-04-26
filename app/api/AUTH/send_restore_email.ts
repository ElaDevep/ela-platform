'use server'

import type { NextApiRequest, NextApiResponse } from 'next'
import { axiosAPI } from '../axiosAPI'
import { error } from 'console'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function send_restore_email(
    email:object
) {
    let response:APIResponse
    await axiosAPI.post('/forgot-password',email)
    .then((res)=>{
        response = {
            status:'ok',    
            data:res.data
        }
        //console.log(res.data)
    }).catch((error)=>{
        if(error.response!=undefined){
            response = {
                status:'error',    
                data:error.response.data
            }
        }
        console.log(error)
    })  
    return response
}