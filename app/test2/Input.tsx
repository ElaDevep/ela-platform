'use client'

import { LegacyRef, useEffect, useRef } from "react"
import { InputInterface } from "./types"
import useInput from "./useInput"



const Input: React.FC<InputInterface> = ({name,use}) => {
    const {input,inputProps} = useInput()

    useEffect(()=>{
        //console.log(inputProps)
    },[])

    useEffect(()=>{
        use(input.value)
    },[input])

    return <>
        {/*@ts-ignore*/}
        <input type="text" name={name} {...inputProps}/>
    </>
}

export default Input