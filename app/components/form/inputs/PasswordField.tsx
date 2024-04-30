'use client'

import { useEffect, useState } from "react"
import styler from '../Form.module.sass'
import close_lock from '@/public/svg/close_lock.svg'
import open_lock from '@/public/svg/open_lock.svg'
import { Frame } from "../../ela-components"
import { TextInputT } from "../types"
import { Props } from "@/app/types"
import MixStyles from "@/app/lib/functions/MixStyles"



const PasswordField: React.FC<TextInputT> = ({label,placeholder,useInput,errors,className}) => {
    const [visible,setVisible] = useState<boolean>()
    const name = useInput.name

    const changeVisibility = (value:boolean) =>{
        setVisible(!visible)
    }

    return <>
        <div className={MixStyles(styler.passwordField,errors[name] && styler.errorInput,className)}>
            {label &&
                <label htmlFor={useInput.name} className={styler.label} >{label}</label>
            }
            <input type={visible ? "text" :"password"} name={useInput.name} placeholder={placeholder} className={styler.input} {...useInput}/>
            
            <Frame
                src={visible?open_lock:close_lock} 
                className={styler.image_button} 
                alt={visible?'unlock':'lock'}
                onMouseDown={()=>changeVisibility(true)} 
                onMouseUp={()=>changeVisibility(false)} 
                onDrag={()=>changeVisibility(false)}
            />
            {errors[useInput.name]&&
                <>
                {/*@ts-ignore*/}
                <p>{errors[useInput.name]?.message}</p>
                </>
            }
        </div>
    </>
}

export default PasswordField