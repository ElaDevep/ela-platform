'use client'

import { useEffect, useState } from "react"
import styler from '../Form.module.sass'
import close_lock from '@/public/svg/close_lock.svg'
import open_lock from '@/public/svg/open_lock.svg'
import { Frame } from "../../ela-components"
import { TextInputT } from "../types"



const PasswordField: React.FC<TextInputT> = ({name,label,placeholder,useInput}) => {
    const [visible,setVisible] = useState<boolean>()

    const changeVisibility = (value:boolean) =>{
        if(visible)
            setTimeout(()=>setVisible(value),1000)
        else
            setVisible(!visible)
    }

    return <>
        <div className={styler.passwordField}>
            {label &&
                <label htmlFor={name} className={styler.label} >{label}</label>
            }
            <input type="password" name={name} id={name} placeholder={placeholder} className={styler.input} {...useInput}/>
            
            <Frame
                src={visible?open_lock:close_lock} 
                className={styler.image_button} 
                alt={visible?'unlock':'lock'}
                onMouseDown={()=>changeVisibility(true)} 
                onMouseUp={()=>changeVisibility(false)} 
                onDrag={()=>changeVisibility(false)}
            />
            
            <p className={styler.visiblePassword_text}>{visible && ':v'}</p>
        
            
        </div>
    </>
}

export default PasswordField