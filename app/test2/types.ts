import { MutableRefObject } from "react"

export interface FormInterface{
    children:React.ReactNode
    styler?:{readonly [key: string]: string}
}

export interface UseInputsForm{
    
}

export interface ActionUseInputInterface{
    type:string
    value?:string
    error?:undefined|'pattern'|'void'|'dependency'
}


// export interface InputInterface{
//     value?:string
//     error?:boolean
//     able?:boolean
//     visible?:boolean
//     toAccept?:object
//     toAble?:object
//     toVisible?:object
// }

export interface InputInterface{
    name:string
    use:(input:any)=>void
    toAccept?:object
    fatherStyler?:{readonly [key: string]: string}
}

export interface toAcceptInterface{
    pattern?:RegExp
    required?:boolean|undefined
}

export interface ActionUseFormInterface{
    type:string
    name:string
    input:{}
}

