'use client'

import { useState, type CSSProperties } from "react";
import MixStyles from "@/app/lib/actions/MixStyles";
import type { TextInputT } from "./types";
import styles from "./Form.module.css"
import { Props } from "@/types"

const TextField: React.FC<TextInputT> = ({label,name,tabIndex,require,autofocus,autocomplete,}) => {
    const [error,setError] = useState(false);

    let props = new Props()
    
    props.addPropsIfExist({tabIndex:'0'},tabIndex)
    props.addPropsIfExist({autocomplete:true},autocomplete)
    props.addPropsIfExist({autofocus:true},autofocus)
    props.addPropsIfExist({require:true},require)

    return(
        <div className={styles.input_container}>
            <label htmlFor={name} className={styles.generic_label}>{label} </label>
            <input type="text" name={name} id={name} className={styles.input_textField} {...props}/>
            {error &&
            <p className={styles.input_error}>Error</p>
            }
        </div>
    )

}

export default TextField