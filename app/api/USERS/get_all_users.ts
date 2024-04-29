'use server'

import { axiosAPI } from '../axiosAPI'
import { UserInterface } from './types'

export default async function get_all_users() {
    let response:APIResponse<Array<UserInterface>>
    //console.log(userId)
    await axiosAPI.get('/usuarios')
    .then((res)=>{
        response = res.data
    }).catch((error)=>{
        response = error.response.data
    })  
    //console.log(response)
    //@ts-ignore
    return response
}