'use server'

import { axiosAPI } from '../axiosAPI'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function log_out() {
    console.log(cookies().get('userToken'))
    cookies().delete('userToken')
    if(cookies().get('userToken').value == ''){
        console.log(cookies().get('userToken'))
        console.log('Bd')
        redirect('/inicio_sesion')    
    }
}