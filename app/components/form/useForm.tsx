'use client'

import { error } from "console"
import { FormEvent, useEffect, useReducer, useRef, useState } from "react"
import { ActionUseFormInterface, ActionUseInputInterface, UseFormParamsInterface, toAcceptInterface} from "./types"

class Form {
    error:boolean = false
    apiError:string = ''
    inputs:{[key: string]: any}={}
    state:string = ''

    addInput = (input:object) => {
        Object.assign(this.inputs,input)
        this.validateError()
    }

    validateError = () =>{
        const inputAccepts = (Object.values(this.inputs).map((input)=>{
            return input.accept
        }))
        this.error = (inputAccepts.includes(undefined) ||inputAccepts.includes(false) )
    }

}

const reducer = (state:object,action:ActionUseFormInterface) =>{
    let form = Object.assign(new Form(),state)

    switch(action.type){
        case 'setInput':
            if(action.name)
                form.addInput({[action.name]:action.input})
            break
        case 'setError':
            form.error = true
            break
        case 'setApiError':
            if(action.message)
                form.apiError = action.message
            break
        case 'quitError':
            form.error = false
        case 'quitApiError':
            form.apiError = ''
    }
    return form
}

const useForm = (
    params:UseFormParamsInterface
) => {
    const [form,setForm] = useReducer(reducer,new Form())

    const getData = () => {
        let data = {}
        for(let input in form.inputs){
            if(input)
                Object.assign(data,{[input]:form.inputs[input].value})
        }
        //console.log(data)
        return data
    }

    const setInput = (name:string,input:object) =>{
        setForm({
            type:'setInput',
            name:name,
            input:input
        })
    }

    const onSubmit = async(e:FormEvent) =>{
        e.preventDefault()
        const formData = getData()
        for(let input in form.inputs){
            if(!form.inputs[input].accept){
                setForm({
                    type:'setError'
                })
                if(form.inputs!=undefined){
                    //console.log(Object.values(form.inputs))
                    Object.values(form.inputs).map((input)=>{
                        if(input!=undefined){
                            console.log(input)
                            input.change()
                        }
                    })
                }
                return
            }
        }
        setForm({
            type:'quitError'
        })
        const response = await params.onSubmit(formData)
        if(response != undefined){
            if(response.status=='error'){
                setForm({
                    type:'setApiError',
                    message: response.data
                })
            }else{
                setForm({
                    type:'quitApiError'
                })
            }
        }
    }

    useEffect(()=>{
        console.log(form)
    },[form])

    return {
        inputs:form.inputs,
        error:form.error,
        apiError:form.apiError,
        setInput,
        getData,
        onSubmit
    }
}

export default useForm