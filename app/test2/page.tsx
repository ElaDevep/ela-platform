'use client'

import { MutableRefObject, useEffect, useState } from 'react'
import Form from './Form'
import Input from './Input'
import styler from './page.module.sass'
import { useProps } from '../hooks/ela-hooks'
import { Props } from '../types'

export default function Tester2() {

    const onSubmit = (formData:object) =>{
        console.log(':v')
    }

    return <>
        <div className={styler.general_div}>
            <div className={styler.form_div}>
                <Form styler={styler} onSubmit={onSubmit}>
                    <div>
                        <Input name="username"
                            initValue={':B'}
                        />
                        <Input name="tel"
                            required
                        />
                        <Input name="name"
                            pattern={/^([a-z]\D+)*$/}
                            required
                        />
                    </div>
                    <Input name="last_name" previous={['name','username']}/>
                    <input value={'Enviar'} type='submit'/>
                </Form>
            </div>
        </div>
    </>
}