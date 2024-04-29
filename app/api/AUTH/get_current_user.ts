'use server'

import type { NextApiRequest, NextApiResponse } from 'next'
import { axiosAPI } from '../axiosAPI'
import { error } from 'console'
import { cookies } from 'next/headers'
import validate_token from './validate_token'
import get_user from '../USERS/get_user'
import { UserInterface } from '../USERS/types'

export default async function get_current_user(
) {
    let response:APIResponse<UserInterface> = {
        status:undefined,
        data:undefined
    }
    try{
        await validate_token()
        .then(async(res)=>{
            console.log(res)
            if(res!=undefined){
                if(res.status=='ok'){
                    if(res.data)
                    await get_user(res.data.userId)
                    .then((res)=>{
                        response=res
                    })
                    .catch((e)=>{
                        console.log(e)
                    })
                }
                else{
                    
                }
            }
        })
        .catch((e)=>{
            console.log(e)
        })
        if(response)
            return response
    }
    catch(e){
        console.log(e)
    }
}