import { MutableRefObject } from "react"

export interface FormT{
    id?:string
    method?:"GET"|"POST"
    onSubmit:(formData:object)=>void
    children:React.ReactNode
    className?:string
    autofocus?:boolean
    values?:object
}
export interface GeneralInputT{
    tabIndex?:boolean|number
    className?:string
    disable?:boolean
    id?:string
}

export interface UserInputT extends GeneralInputT{
    label?:string
    startValue?:any
    autofocus?:boolean
    require?:boolean
    errors?:()=>void
    name:string
    getValue?:(name:string,value:string)=>void
    onSubmitContext?:any
    getRef?:(ref:MutableRefObject<any>)=>void
}

export interface TextInputT extends UserInputT{
    placeholder?:string
    autocomplete?:boolean
    minLength?:number
    maxLength?:number
    pattern?:string
    readonly?:boolean  
}

export interface SubmitT extends GeneralInputT {
    formtarget?:string
    src?:string
    size?:number
    onSubmit?:()=>any
    children:React.ReactNode
}

export interface ActionUseForm {
    type:string
    name?:string
    value?:any
    state?:'submitting'|undefined
}


