'use client'

import { error } from "console"
import { useEffect, useReducer, useRef, useState } from "react"
import { ActionUseInputInterface, UseInputParamsInterface, toAcceptInterface} from "./types"

class Input {
    value = ''
    accept = true
    patterError = false
    requireError = false
    dependError = false
    
    constructor(){}

    setValue = (value:string) =>{
        this.value = value
        this.anyError()
    }

    setRequireError = (value:boolean) =>{
        this.requireError=value
    }
    setPatterError = (value:boolean) =>{
        this.patterError=value
    }
    setDependError = (value:boolean) =>{
        this.dependError=value
    }

    quitErrors = () =>{
        this.accept = true
    }

    anyError = () =>{
        this.accept = !(this.dependError || this.patterError || this.requireError)
    }

    getObj = () => {
        return {
            value:this.value,
            accept:this.accept,
            patterError:this.patterError,
            requireError:this.requireError,
            dependError:this.dependError
        }
    }
}


const reducer = (state:object,action:ActionUseInputInterface) =>{
    const input = Object.assign(new Input(),state)

    switch(action.type){
        case 'setName':
            break
        case 'setValue':
            input.setValue(action.value)
            break
        case 'setRequireError':
            input.setRequireError(action.error)
            break
        case 'setPatterError':
            input.setPatterError(action.error)
            break
        case 'dependError':
            input.setDependError(action.error)
            break
        case 'quitError':
            input.quitErrors()
    }

    return input.getObj()
}

const useInput = (
    params:UseInputParamsInterface
) => {
    const inputRef = useRef()
    let clicked:boolean = false
    const [input,setInput] = useReducer(reducer,{value:(params.initValue!=undefined)?params.initValue:''})

    const changeValue = () =>{
        let value = inputRef.current.value
        if(value == input.value) return
        if(params!=undefined){
            if(params.toAccept!= undefined){
                if(params.toAccept.pattern!=undefined){
                    const pattern = (params.toAccept.pattern)
                    setInput({
                        type:'setPatterError',
                        error:!pattern.test(value)
                    })
                }
                if(params.toAccept.required!=undefined){
                    setInput({
                        type:'setRequireError',
                        error:(value=='' || value == undefined || /^\s*$/.test(value))
                    })
                }
                if(params.toAccept.dependence!=undefined){
                    // if(value=='' || value == undefined || /^\s*$/.test(value)){
                    //     setInput({
                    //         type:'setRequireError'
                    //     })
                    // }
                }
            }
            setInput({
                type:'setValue',
                value:value
            })
        }
    }

    useEffect(()=>{
        console.log(params)
        if(inputRef.current!=undefined)inputRef.current.value = input.value
    },[])

    useEffect(()=>{
        if(params.use!=undefined && (Object.keys(input).length != 0 && input!=undefined && input.value!=undefined)) params.use(input)
    },[input])

    let inputProps = {
        ref:inputRef,
        onChange:(e:InputEvent)=>{if(!clicked){changeValue()}},
        onClick:()=>{clicked = (true)},
        onBlur:()=>{clicked = (false);changeValue()},
    }

    return {data:input,props:inputProps,setter:setInput}
}

export default useInput