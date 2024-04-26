'use server'

import { axiosAPI } from '../axiosAPI'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function log_out() {
    cookies().delete('userToken')
    redirect('/inicio_sesion')
}