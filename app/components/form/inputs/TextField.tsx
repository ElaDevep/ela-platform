'use client'

import { useEffect, useState } from "react"
import { TextInputT} from "../types"
import styler from '../Form.module.sass'
import MixStyles from "@/app/lib/functions/MixStyles"



const TextField: React.FC<TextInputT> = ({label,placeholder,useInput,errors,className}) => {
    const name:string = useInput.name

    console.log(useInput)

    return <>
        <div className={MixStyles(styler.textField,errors[name] && styler.errorInput,className)}>
            {label &&
                <label htmlFor={useInput.name} className={styler.label} >{label}</label>
            }
            <input type="text" placeholder={placeholder} className={styler.input} {...useInput}/>
            {errors[useInput.name]&&
                <>
                {/*@ts-ignore*/}
                <p>{errors[useInput.name]?.message}</p>
                </>
            }
            
        </div>
    </>
}

export default TextField