'use server'

import { postingAPI } from "../axios"

const changePassword = async (body:object) =>{
    try{
        console.log(body)
        const status = (await postingAPI('/reset-password',body))
        //console.log(status)
        return true
    }
    catch(e){
        //console.log(e)
    }
}

export default changePassword