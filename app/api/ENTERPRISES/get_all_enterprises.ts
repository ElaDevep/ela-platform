'use server'

import { axiosAPI } from '../axiosAPI'

export default async function get_all_enterprises() {
    let response:APIResponse
    //console.log(userId)
    await axiosAPI.get('/empresa/empresas')
    .then((res)=>{
        console.log(res)
        response = {
            status:'success',
            data:res.data
        }
    }).catch((error)=>{
        response = error.response.data
    })  
    //console.log(response)
    return response
}