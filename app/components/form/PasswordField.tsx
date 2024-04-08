'use client'

import { useState, type CSSProperties } from "react";
import MixStyles from "@/app/lib/actions/MixStyles";
import type { TextInputT } from "./types";
import styles from "./Form.module.sass"
import { Props } from "@/types"

const PasswordField: React.FC<TextInputT> = ({label,name,tabIndex,require,autofocus,autocomplete,getValue,placeholder}) => {
    const [error,setError] = useState(false);
    const [value,setValue] = useState<string>();

    const changeHandler = (value:string) =>{
        getValue(value)
    }

    let props = new Props()
    
    props.addPropsIfExist({tabIndex:'0'},tabIndex)
    props.addPropsIfExist({autocomplete:true},autocomplete)
    props.addPropsIfExist({autofocus:true},autofocus)
    props.addPropsIfExist({require:true},require)

    return(
        <div className={styles.input_container}>
            {label &&
            <label htmlFor={name} className={styles.generic_label}>{label} </label>
            }
            <input type="password" name={name} id={name} className={styles.input_textField} placeholder={placeholder} {...props}
            onChange={(e)=>{changeHandler(e.target.value)}}/>
            {error &&
            <p className={styles.input_error}>Error</p>
            }
        </div>
    )

}

export default PasswordField