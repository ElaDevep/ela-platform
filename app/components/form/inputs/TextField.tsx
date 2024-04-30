'use client'

import { useEffect, useState } from "react"
import { TextInputT} from "../types"
import styler from '../Form.module.sass'



const TextField: React.FC<TextInputT> = ({name,label,placeholder,useInput}) => {

    console.log(useInput)

    return <>
        <div className={styler.textField}>
            {label &&
                <label htmlFor={name} className={styler.label} >{label}</label>
            }
            <input type="text" name={name} id={name} placeholder={placeholder} className={styler.input} {...useInput}/>
        </div>
    </>
}

export default TextField