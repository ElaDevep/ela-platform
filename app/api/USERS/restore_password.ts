'use server'

import type { NextApiRequest, NextApiResponse } from 'next'
import { axiosAPI } from '../axiosAPI'
import { error } from 'console'
import { cookies } from 'next/headers'

export default async function restore_password(restoreInfo:object) {
    let response:APIResponse<string>={
        status:undefined,
        data:undefined
    }
    await axiosAPI.post('/reset-password',restoreInfo)
    .then((res)=>{
        response = {
            status:'ok',
            data:res.data
        }
    }).catch((error)=>{
        response = {
            status:'error',
            data:error.response.data
        }
        console.log(error.response.data)
    })  
    console.log(response)
    return response
}