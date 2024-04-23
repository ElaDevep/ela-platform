'use client'

import { LegacyRef, useEffect, useRef, useState } from "react"
import { InputInterface } from "./types"
import useInput from "./useInput"
import styler from './input.module.sass'
import { Props } from "../types"
import MixStyles from "../lib/functions/MixStyles"



const Input: React.FC<InputInterface> = ({name,use,pattern,required,fatherStyler,className,initValue,dependencies,triggers,inputs}) => {
    const input= useInput({
        toAccept:{
            pattern:pattern,
            required:required,
            dependencies:inputs
        },
        toAble:{
            
        },
        initValue:initValue,
        use:use,
        dependencies:dependencies
    })

    useEffect(()=>{
        if(triggers!=undefined){
            triggers.map((trigger)=>{
                trigger()
            })
        }
    },[input])

    const props = new Props() 

    props.addProps({...input.props})

    props.addProps({className:MixStyles(MixStyles('input',styler,fatherStyler),className)})

    return <>
        {/*@ts-ignore*/}
        <input type="text" name={name} {...props}/>
        {input.dependRestrict &&
            <p>Error</p>
        }
    </>
}

export default Input