'use client'

import { LegacyRef, useEffect, useRef } from "react"
import { InputInterface } from "./types"
import useInput from "./useInput"
import styler from './input.module.sass'
import { Props } from "../types"
import MixStyles from "../lib/functions/MixStyles"



const Input: React.FC<InputInterface> = ({name,use,toAccept,fatherStyler}) => {
    const input= useInput(toAccept)
    const props = new Props() 

    props.addProps({...input.props})

    props.addPropsIfAllTrueElse({className:styler.input},[
        fatherStyler==undefined
    ],{className:MixStyles('input',styler,fatherStyler)})

    useEffect(()=>{
        if(Object.keys(input.data).length != 0 && input.data!=undefined && input.data.value!=undefined){
            use(input.data)
        }
    },[input.data])

    return <>
        {/*@ts-ignore*/}
        <input type="text" name={name} {...props}/>
        {input.data.error &&
            <p>Error</p>
        }
    </>
}

export default Input