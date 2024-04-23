'use client'

import { useEffect } from "react"
import { TextInputInterface } from "../types"
import useInput from "./useInput"
import styler from './input.module.sass'
import { Props } from "@/app/types"
import MixStyles from "@/app/lib/functions/MixStyles"



const TextField: React.FC<TextInputInterface> = ({name,label,placeholder,use,pattern,required,fatherStyler,className,initValue,previous,previousInputs,hiders,hidersInputs,requireWarn,patternWarn,triggers}) => {
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
        <div className={MixStyles(MixStyles('textfield',styler,fatherStyler),(input.patterError || input.requireError)&&MixStyles('textfield_error',styler,fatherStyler),MixStyles(className,fatherStyler))}>
            {label &&
                <label htmlFor={name} className={(MixStyles('label',styler,fatherStyler))}>{label}{required&&<span>*</span>}</label>
            }
            <input type="text" name={name} placeholder={placeholder} {...props} className={(MixStyles('input',styler,fatherStyler))}/>
            <p className={(MixStyles('error',styler,fatherStyler))}>
            {(input.requireError && requireWarn)&&
                requireWarn
            }
            {(!input.requireError && patternWarn && input.patterError)&&
                patternWarn
            }
            </p>
        </div>
    </>
}

export default TextField