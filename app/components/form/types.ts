import { UseFormReturn } from "react-hook-form"

//Form Interface
export interface FormT{
    children:React.ReactNode
    className?:string
    submit:(data:any)=>void
    useForm:UseFormReturn< any, undefined>
}

//Inputs Interfaces
export interface TextInputT{
    name:string
    label?:string
    placeholder?:string
    useInput:any
}

export interface SubmitT{
    children:React.ReactNode
}