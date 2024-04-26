'use server'

import type { NextApiRequest, NextApiResponse } from 'next'
import { axiosAPI } from '../axiosAPI'
import { error } from 'console'
import { cookies } from 'next/headers'
import validate_token from './validate_token'
import get_user from '../USERS/get_user'

export default async function get_current_user(
) {
    let response
    try{
        await validate_token()
        .then(async(res)=>{
            console.log(res)
            if(res!=undefined){
                if(res.status=='ok'){
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
        return response
    }
    catch(e){
        console.log(e)
    }
}