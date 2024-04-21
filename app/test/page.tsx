'use client'

import {Form, PasswordField, Submit, TextField} from '@/ela-form'
import styles from './page.module.sass'
import { FormEvent, MutableRefObject, useEffect, useRef, useState } from 'react'
import { authenticate } from '../lib/actions/action'
import { useForm } from 'react-hook-form'
import useInput from '../components/form/useInput'

export default function Tester() {
    const [ref,setRef] = useState<MutableRefObject<any>>()
    const input = useInput()
    

    const onSubmit = (formData:object) =>{
        console.log(formData)
    }
    
    useEffect(()=>{
        console.log('state')
        console.log(input)
    })

    const changeInput = () =>{
    }

    return <div className={styles.testForm_div}>

        <Form onSubmit={onSubmit}>
            <TextField name='name' label='Nombre' getRef={(ref)=>setRef(ref)} />
            <TextField name='last_name' label='Apellido'/>
            <PasswordField name='password' label='Contraseña'/>
            <Submit>Enviar</Submit>
        </Form>
        <button onClick={changeInput}>papu</button>
    </div>
}

// dependencia = {
//     pattern:
// }
