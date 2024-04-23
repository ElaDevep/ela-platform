'use client'

import { error } from "console"
import { FormEvent, useEffect, useReducer, useRef, useState } from "react"
import { ActionUseFormInterface, ActionUseInputInterface, toAcceptInterface} from "../components/form/types"

class Form {
    error:boolean = false
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
        case 'setError':
            form.error = true
            break
        case 'quitError':
            form.error = false
    }
    return form
}

const useForm = (
    params:object
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

    const onSubmit = (e:FormEvent) =>{
        e.preventDefault()
        console.log(form.inputs)
        for(let input in form.inputs){
            if(!form.inputs[input].accept){
                setForm({
                    type:'setError'
                })
                return
            }
        }
        setForm({
            type:'quitError'
        })
        params.onSubmit()
    }

    useEffect(()=>{
        //console.log(form.inputs)
    },[form])

    return {
        inputs:form.inputs,
        error:form.error,
        setInput,
        getData,
        onSubmit
    }
}

export default useForm