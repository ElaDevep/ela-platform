'use server'

import { axiosAPI } from '../axiosAPI'
import { RestorePasswordInterface } from './types'

export default async function send_restore_email(
    email:object
) {
    let response:APIResponse<RestorePasswordInterface> = {
        status:undefined,
        data:undefined
    }
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