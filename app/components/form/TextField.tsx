'use client'

import { useState, type CSSProperties } from "react";
import MixStyles from "@/app/lib/functions/MixStyles";
import type { TextInputT } from "./types";
import styles from "./Form.module.sass"
import { Props } from "@/types"

const TextField: React.FC<TextInputT> = ({label,name,tabIndex,require,autofocus,autocomplete,getValue,placeholder}) => {
    const [error,setError] = useState(false)
    const [value,setValue] = useState<string>()
    let props = new Props()
    
    props.addPropsIfExist({tabIndex:'0'},tabIndex)
    //props.addPropsIfExist({autoComplete:true},autocomplete)
    props.addPropsIfExist({autoFocus:true},autofocus)   
    props.addPropsIfExist({require:true},require)

    const changeHandler = (value:string) =>{
        setValue(value)
        if(getValue!=undefined){
            getValue(name,value)
        }
    }

    return(
        <div className={styles.input_container}>
            {label &&
            <label htmlFor={name} className={styles.generic_label}>{label} </label>
            }
            <input type="text" name={name} id={name} className={styles.input_textField} placeholder={placeholder}  {...props}
            onBlur={(e)=>{changeHandler(e.target.value)}}/>
            {error &&
            <p className={styles.input_error}>Error</p>
            }
        </div>
    )

}

export default TextField