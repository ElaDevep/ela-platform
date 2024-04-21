'use client'

import { LegacyRef, useEffect, useRef } from "react"
import { InputInterface } from "./types"
import useInput from "./useInput"



const Input: React.FC<InputInterface> = ({name,use,toAccept,styler}) => {
    const {input,inputProps} = useInput(toAccept)

    useEffect(()=>{
        if(Object.keys(input).length != 0 && input!=undefined && input.value!=undefined){
            use(input)
        }
    },[input])

    return <>
        {/*@ts-ignore*/}
        <input type="text" name={name} {...inputProps}/>
        {input.error &&
            <p>Error</p>
        }
    </>
}

export default Input