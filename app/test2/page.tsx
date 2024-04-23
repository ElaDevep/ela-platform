'use client'

import { MutableRefObject, useEffect, useState } from 'react'
import Form from './Form'
import Input from './Input'
import styler from './page.module.sass'
import { useProps } from '../hooks/ela-hooks'
import { Props } from '../types'

export default function Tester2() {

    const seeInputs = () => {
    }

    return <>
        <div className={styler.general_div}>
            <div className={styler.form_div}>
                <Form styler={styler}>
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
                            initValue={':D'}
                        />
                    </div>
                    <Input name="last_name" required previous={['name','username']}/>
                    <input value={'Enviar'} type='submit'/>
                </Form>
                <button onClick={seeInputs} className={styler.button} id='button'>getInputs</button>
            </div>
        </div>
    </>
}