'use server'

import { axiosAPI } from '../axiosAPI'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function log_out() {
    const token = cookies().get('userToken')
    cookies().delete('userToken')
    if(token)
        if(token.value == ''){
            // console.log(cookies().get('userToken'))
            // console.log('Bd')
            redirect('/inicio_sesion')    
        }
}