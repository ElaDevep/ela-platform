'use client'

import { useEffect, useState } from "react"
import { TextInputInterface } from "../types"
import useInput from "./useInput"
import styler from '../Form.module.sass'
import { Props } from "@/app/types"
import MixStyles from "@/app/lib/functions/MixStyles"



const PasswordField: React.FC<TextInputInterface> = ({name,label,placeholder,use,pattern,required,fatherStyler,className,initValue,previous,previousInputs,hiders,hidersInputs,requireWarn,patternWarn,triggers}) => {
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

    const [visible,setVisible] = useState<boolean>()

    const changeVisibility = (value:boolean) =>{
        if(visible)
            setTimeout(()=>setVisible(value),1000)
        else
            setVisible(!visible)
    }


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
        <div className={MixStyles(MixStyles('passwordfield',styler,fatherStyler),(input.patterError || input.requireError)&&MixStyles('textfield_error',styler,fatherStyler),MixStyles(className,fatherStyler))}>
            {label &&
                <label htmlFor={name} className={(MixStyles('label',styler,fatherStyler))}>{label}{required&&<span>*</span>}</label>
            }
            <input type="password" name={name} placeholder={placeholder} {...props} className={(MixStyles('input',styler,fatherStyler))}/>
            
            <img src={"/svg/"+(visible?'open':'close')+"_lock.svg"} className={styler.image_button} onMouseDown={()=>changeVisibility(true)} onMouseUp={()=>changeVisibility(false)} onDrag={()=>changeVisibility(false)}/>

            <p className={styler.visiblePassword_text}>{visible && input.value}</p>
            
            
            <p className={(MixStyles('error',styler,fatherStyler))}>
            {(input.requireError)&&
                "Este campo es requerido"
            }
            {(!input.requireError && patternWarn && input.patterError)&&
                patternWarn
            }
            </p>
        </div>
    </>
}

export default PasswordField