'use client'

import { error } from "console"
import { useEffect, useReducer, useRef, useState } from "react"
import { ActionUseInputInterface} from "./types"

class Input {
    constructor(){

    }
    setValue = (value:string) =>{
        Object.assign(this,{value:value})
    }
}


const reducer = (state:object,action:ActionUseInputInterface) =>{
    const input = new Input()

    switch(action.type){
        case 'setName':
        case 'setValue':
            input.setValue(action.value)
    }
    return input
}

const useInput = (
    toAcept?:object,
    toAble?:object,
    toVisible?:object
) => {
    const inputRef = useRef()
    const [clicked,setClicked] = useState<boolean>()
    const [input,setInput] = useReducer(reducer,{})

    const changeValue = () =>{
        setInput({
            type:'setValue',
            value:inputRef.current.value
        })
    }

    let inputProps = {
        ref:inputRef,
        onChange:(e:InputEvent)=>{if(!clicked){changeValue()}},
        onClick:()=>{setClicked(true)},
        onBlur:()=>{setClicked(false)}
    }

    useEffect(()=>{

    })

    useEffect(()=>{
        if(!clicked){
            changeValue()
        }
    },[clicked])
    
    useEffect(()=>{
    },[input])

    return {input,inputProps,setInput}
}

export default useInput