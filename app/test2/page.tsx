'use client'

import { MutableRefObject, useEffect, useState } from 'react'
import Form from './Form'
import Input from './Input'
import styler from './page.module.sass'
import { useProps } from '../hooks/ela-hooks'
import { Props } from '../types'

export default function Tester2() {
    const [name,setName] = useState()
    const [lastName,setLastName] = useState()
    const [props,setProps] = useProps((props:Props)=>{return props})
    let nameI:object

    const seeInputs = () => {
    }

    useEffect(()=>{
        console.log(':1')
    })

    return <>
        <div className={styler.general_div}>
            <div className={styler.form_div}>
                <Form styler={styler}>
                    <div>
                        <Input name="name" use={(input)=>{setName(input)}} toAccept={{
                            pattern:/^([a-z]\D+)*$/,
                            required:true
                        }}/>
                    </div>
                    <Input name="last_name" use={(input)=>setLastName(input)}/>
                    <button>B1</button>
                </Form>
                <button onClick={seeInputs} className={styler.button}>getInputs</button>
            </div>
        </div>
    </>
}