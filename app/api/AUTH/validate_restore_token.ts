'use server'

import type { NextApiRequest, NextApiResponse } from 'next'
import { axiosAPI } from '../axiosAPI'
import { error } from 'console'
import { cookies } from 'next/headers'

export default async function validate_restore_token(token:string) {
    let response:APIResponse
    if(token != undefined){
        //console.log(token)
        await axiosAPI.post('/validate-token',{token:token})
        .then((res)=>{
            response = res.data
        }).catch((error)=>{
            console.log(error.response.data)
        })  
    }
    //console.log(response)
    return response
}