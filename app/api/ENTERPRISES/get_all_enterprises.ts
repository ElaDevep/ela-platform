'use server'

import { axiosAPI } from '../axiosAPI'
import { EnterpriseAPIInterface } from './types'

export default async function get_all_enterprises() {
    let response:APIResponse<Array<EnterpriseAPIInterface>> ={
        status:undefined,
        data:undefined
    }    //console.log(userId)
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