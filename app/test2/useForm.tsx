'use client'

import { error } from "console"
import { useEffect, useReducer, useRef, useState } from "react"
import { ActionUseFormInterface, ActionUseInputInterface, toAcceptInterface} from "./types"

class Form {
    error:string|undefined
    inputs:object={}
    state:string = ''

    addInput = (input:object) => {
        Object.assign(this.inputs,input)
    }

}

const reducer = (state:object,action:ActionUseFormInterface) =>{
    let form = Object.assign(new Form(),state)

    switch(action.type){
        case 'setInput':
            form.addInput({[action.name]:action.input})
            break
    }
    return form
}

const useForm = (
) => {
    const [form,setForm] = useReducer(reducer,{})

    const getData = () => {
        let data = {}
        for(let input in form.inputs){
            Object.assign(data,{[input]:form.inputs[input].value})
        }

        return data
    }

    const setInput = (name:string,input:object) =>{
        setForm({
            type:'setInput',
            name:name,
            input:input
        })
    }

    return {
        inputs:form.inputs,
        setInput,
        getData
    }
}

export default useForm