'use client'

import { Dispatch, useEffect, useReducer, useState } from "react"
import { Props } from "../../types"
import { ActionUseForm } from "./types"



//<()=>[ReducerState<any>,Dispatch<ReducerAction<any>>]>initialFoo:(props:Props)=>Props

interface InputT{
    error:boolean
    value?:number|string
    accept?:object
    able?:object
    visible?:object
    setter?:Dispatch<ActionUseInput>|undefined
}

interface ActionUseInput extends InputT{
    type:string
}

const reducer = (input:InputT,action:ActionUseInput) =>{
    switch(action.type){
        case 'setError':
            input.error = action.error
            break
        
    }
    return input
}

class Input{
    error:boolean = false
    value:number|string = ''
    accept:object = {}
    able:object = {}
    visible:object = {}
    setter:Dispatch<ActionUseInput>|undefined
}

const useInput= (accept?:object,value?:number|string) => {
    const [input,setInput] = useReducer(reducer,new Input())    

    return [input,[]]
}

export default useInput