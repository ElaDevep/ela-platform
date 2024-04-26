'use server'

import { axiosAPI } from '../axiosAPI'

export default async function get_all_users() {
    let response:APIResponse
    //console.log(userId)
    await axiosAPI.get('/usuarios')
    .then((res)=>{
        response = res.data
    }).catch((error)=>{
        response = error.response.data
    })  
    //console.log(response)
    return response
}