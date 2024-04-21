'use client'

import { useContext, useEffect, useRef, useState, type CSSProperties } from "react";
import MixStyles from "@/app/lib/functions/MixStyles";
import type { TextInputT } from "./types";
import styles from "./page.module.sass"
import { Props } from "@/types"

const TextField: React.FC<TextInputT> = ({label,name,tabIndex,require,autofocus,autocomplete,getValue,placeholder,startValue,getRef}) => {
    const [error,setError] = useState(false)
    const [value,setValue] = useState<string>(startValue)
    const [clicked,setClicked] = useState<boolean>(false)
    const input = useRef()
    let props = new Props()
    
    props.addPropsIfExist({tabIndex:'0'},tabIndex)
    //props.addPropsIfExist({autoComplete:true},autocomplete)
    props.addPropsIfExist({autoFocus:true},autofocus)   
    props.addPropsIfExist({require:true},require)



    const changeValue = () =>{
        if(!clicked){
            setValue(input.current.value)
        }
    }


    useEffect(()=>{
        if(input.current.value!=undefined){
            setValue(input.current.value)
        }
    },[clicked])


    useEffect(()=>{
        console.log('/:v')
        if(getValue!=undefined && value!=undefined){
            getValue(name,value)
        }
    },[value])

    
    useEffect(()=>{
        console.log(input)
        if(input!=undefined && getRef != undefined){
            getRef(input)
        }
    })

    
    // useEffect(()=>{
    //     console.log(input.current.value = ':v')
    // },[])

    return(
        <div className={styles.input_container}>
            {label &&
            <label htmlFor={name} className={styles.generic_label}>{label} </label>
            }
            <input type="text" name={name} id={name} className={styles.input_textField} placeholder={placeholder}  {...props}
            onChange={changeValue} onClick={()=>setClicked(true)} onBlur={(e)=>{setClicked(false)}} ref={input} />
            {error &&
            <p className={styles.input_error}>Error</p>
            }
        </div>
    )

}

export default TextField