'use client'

import { error } from "console"
import { useEffect, useReducer, useRef, useState } from "react"
import { ActionUseInputInterface, UseInputParamsInterface, toAcceptInterface} from "./types"

class Input {
    value = ''
    accept = false
    patterError = false
    requireError = false
    dependRestrict = false
    dependHide = false
    
    constructor(){}

    setValue = (value:string) =>{
        this.value = value
    }

    setRequireError = (value:boolean) =>{
        this.requireError=value
    }
    setPatterError = (value:boolean) =>{
        this.patterError=value
    }
    setDependRestrict = (value:boolean) =>{
        this.dependRestrict=value
    }

    withoutErrors = (value:string) =>{
        this.accept = true
        this.patterError = false
        this.requireError = false
        this.value = value
    }

    setInitial = () =>{
        this.accept = false
        this.patterError = false
        this.requireError = false
    }

    anyError = () =>{
        this.accept = !(this.patterError || this.requireError)
    }

    getObj = () => {
        return {
            value:this.value,
            accept:this.accept,
            patterError:this.patterError,
            requireError:this.requireError,
            dependRestrict:this.dependRestrict
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
            if(action.clicked)input.anyError()
            else input.setInitial()
            break
        case 'setRequireError':
            input.setRequireError(action.error)
            break
        case 'setPatterError':
            input.setPatterError(action.error)
            break
        case 'setDependRestrict':
            input.setDependRestrict(action.error)
            break
        case 'setWithoutError':
            input.withoutErrors(action.value)
    }

    return input.getObj()
}

const useInput = (
    params:UseInputParamsInterface
) => {
    const inputRef = useRef()
    let [clicked,setClick] = useState<boolean>()
    let [forced,setForced] = useState<boolean>(false)
    let [firstClick,setFirstClick] = useState<boolean>(false)
    const [input,setInput] = useReducer(reducer,{
        value:(params.initValue!=undefined)?params.initValue:''
    })

    const validateDependencies = (dependencies:any[]) => {
        
        const dependenciesValues = dependencies.map((dependence)=>{
                if(dependence==undefined) return
                return dependence.accept
        })
        return (dependenciesValues.includes(false) || dependenciesValues.includes(undefined))
    }

    const setValue = (value:string) =>{
        if(params!=undefined ){
            if(params.toAccept!= undefined){
                if(firstClick){
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
                }
            }
        }
        if(params.toAccept.pattern==undefined && params.toAccept.required==undefined){
            setInput({
                type:'setWithoutError',
                value:value
        })
        }
        else{
            setInput({
                type:'setValue',
                value:value,
                clicked:firstClick
            }) 
        }
    }


    const setDependencies = () =>{
        let value = inputRef.current.value
        
        if(validateDependencies(params.toAble.previous)!=input.dependError){
            if(params.toAble.previous!=undefined){
                setInput({
                    type:'setDependRestrict',
                    error: validateDependencies(params.toAble.previous)
                })
            }
        }
    }

    const changeValue = () =>{
        let value = inputRef.current.value
        setValue(value)
    }

    const forceValue = () => {
        setDependencies()
        setForced(true)
    }

    useEffect(()=>{
        setValue(input.value)
        if(inputRef.current!=undefined)inputRef.current.value = input.value
    },[])


    const getInput = ()=>{
        return input
    }

    useEffect(()=>{
        console.log(input)
        if(!forced && params.use!=undefined && (Object.keys(input).length != 0 && input!=undefined && input.value!=undefined)){
            params.use({change:forceValue,...input,previous:params.previous,hiders:params.hiders})
        }
        else{setForced(false)}
    },[input])

    // useEffect(()=>{
    //     if(!forced){
    //         params.use({change:()=>(forceValue()),...input,dependencies:params.dependencies})
    //     }
    // },[forced])

    let inputProps = {
        ref:inputRef,
        onClick:()=>{setClick(true);setFirstClick(true)},
        onSelect:()=>{setClick(true);setFirstClick(true)},
        onChange:(e:InputEvent)=>{if(!clicked){firstClick = (true);changeValue()}},
        onBlur:()=>{setClick(false);changeValue()},
        //disable:input.dependRestrict
    }

    return {...input,props:inputProps,setter:setInput}
}

export default useInput