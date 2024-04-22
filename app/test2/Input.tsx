'use client'

import { LegacyRef, useEffect, useRef } from "react"
import { InputInterface } from "./types"
import useInput from "./useInput"
import styler from './input.module.sass'
import { Props } from "../types"
import MixStyles from "../lib/functions/MixStyles"



const Input: React.FC<InputInterface> = ({name,use,pattern,required,fatherStyler,className,initValue}) => {
    const input= useInput({
        toAccept:{
            pattern:pattern,
            required:required
        },
        initValue:initValue,
        use:use
    })
    const props = new Props() 

    props.addProps({...input.props})

    props.addProps({className:MixStyles(MixStyles('input',styler,fatherStyler),className)})

    return <>
        {/*@ts-ignore*/}
        <input type="text" name={name} {...props}/>
        {input.data.error &&
            <p>Error</p>
        }
    </>
}

export default Input