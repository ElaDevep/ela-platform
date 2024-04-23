'use client'

import { LegacyRef, useEffect, useRef, useState } from "react"
import { InputInterface, SubmitInterface } from "../types"
import useInput from "./useInput"
import styler from './input.module.sass'
import { Props } from "@/app/types"
import MixStyles from "@/app/lib/functions/MixStyles"



const Submit: React.FC<SubmitInterface> = ({disable,children,name,label,use,pattern,required,fatherStyler,className,initValue,previous,previousInputs,hiders,hidersInputs,triggers}) => {
    const input= useInput({
        toAccept:{
            pattern:pattern,
            required:required,
        },
        toAble:{
            previous:previousInputs
        },
        toVisible:{
            hiders:hidersInputs
        },
        initValue:initValue,
        use:use,
        previous:previous,
        hiders:hiders
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


    return <>
        {/*@ts-ignore*/}
        <button type="submit" name={name} {...props} className={MixStyles(MixStyles('submit',styler,fatherStyler),MixStyles(className,fatherStyler))}>
            {children}
        </button>
        {input.dependRestrict &&
            <p>Error</p>
        }
    </>
}

export default Submit