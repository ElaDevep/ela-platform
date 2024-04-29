'use server'

import type { NextApiRequest, NextApiResponse } from 'next'
import { axiosAPI } from '../axiosAPI'
import { error } from 'console'
import { cookies } from 'next/headers'
import { UserInterface } from './types'

export default async function get_user(userId:string) {
    let response:APIResponse<UserInterface>
    //console.log(userId)
    await axiosAPI.get('/auth/user/'+userId)
    .then((res)=>{
        response = res.data
    }).catch((error)=>{
        response = error.response.data
    })  
    //console.log(response)
    //@ts-ignore
    return response
}