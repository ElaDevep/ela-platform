import type { CSSProperties } from "react"


export interface Form{
    id?:string
    method?:"GET"|"POST"
    onSubmit?:()=>void
    children:React.ReactNode
    className?:string
    autofocus?:boolean
}
export interface GeneralInput{
    tabIndex?:boolean|number
    className?:string
    disable?:boolean
}

export interface UserInput extends GeneralInput{
    label?:string
    value?:any
    autofocus?:boolean
    require?:boolean
    errors?:()=>void
    name:string

}

export interface TextInput extends UserInput{
    placeholder?:string
    autocomplete?:string
    minLength?:number
    maxLength?:number
    pattern?:string
    readonly?:boolean   
}

export interface Submit extends GeneralInput {
    formtarget?:string
    src?:string
    size?:number
    name?:string
    text?:string
}


