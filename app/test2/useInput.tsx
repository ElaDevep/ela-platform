'use client'

import { error } from "console"
import { useEffect, useReducer, useRef, useState } from "react"
import { ActionUseInputInterface, toAcceptInterface} from "./types"

class Input {
    value = ''
    error:string|undefined
    errorMessage = ''
    
    constructor(){

    }
    setValue = (value:string) =>{
        Object.assign(this,{value:value})
    }
    setError = (errorType:string) =>{
        Object.assign(this,{error:errorType})
    }
    quitError = () =>{
        Object.assign(this,{error:undefined})
    }

    getObj = () => {
        return {
            value:this.value,
            error:this.error
        }
    }
}


const reducer = (state:object,action:ActionUseInputInterface) =>{
    const input = Object.assign(new Input(),state)

    switch(action.type){
        case 'setName':
        case 'setValue':
            input.setValue(action.value)
            break
        case 'setError':
            input.setError(action.error)
            break
        case 'quitError':
            input.quitError()
    }
    return input.getObj()
}

const useInput = (
    toAccept?:toAcceptInterface,
    toAble?:object,
    toVisible?:object,
    use?:(input:object)=>any
) => {
    const inputRef = useRef()
    let clicked:boolean
    const [input,setInput] = useReducer(reducer,{})

    const changeValue = () =>{
        let value = inputRef.current.value
        setInput({
            type:'setValue',
            value:value
        })
        if(toAccept!= undefined){
            if(toAccept.pattern!=undefined){
                const pattern = (toAccept.pattern)
                if(!pattern.test(value)){
                    setInput({
                        type:'setError',
                        error:'pattern'
                    })
                }
                else{
                    setInput({
                        type:'quitError'
                    })
                }
            }
            if(toAccept.required){
                if(value=='' || value == undefined || /^\s*$/.test(value)){
                    setInput({
                        type:'setError',
                        error:'void'
                    })
                }
            }
        }
    }

    let inputProps = {
        ref:inputRef,
        onChange:(e:InputEvent)=>{if(!clicked){changeValue()}},
        onClick:()=>{clicked = (true)},
        onBlur:()=>{clicked = (false);changeValue()}
    }

    return {data:input,props:inputProps,setter:setInput}
}

export default useInput