import { MutableRefObject } from "react"

export interface FormInterface{
    children:React.ReactNode
    styler?:{readonly [key: string]: string}
    error?:{}
}

export interface UseInputsForm{
    
}

export interface ActionUseInputInterface{
    type:string
    value:string
    error:boolean
    clicked:boolean
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
    use?:(input:any)=>void
    pattern?:RegExp
    required?:boolean
    previous?:string[]
    previousInputs?:boolean[]
    hiders?:string[]
    hidersInputs?:boolean[]
    fatherStyler?:{readonly [key: string]: string}
    className?:string
    initValue?:string
    triggers?:any[] 
}

export interface toAcceptInterface{
    pattern?:RegExp
    required?:boolean|undefined
    dependencies?:{}
}

export interface UseInputParamsInterface{
    initValue?:string|undefined,
    toAccept?:toAcceptInterface,
    toAble?:object,
    toVisible?:object,
    use?:(input:object)=>any
    previous:string[]
    hiders:string[]
}

export interface ActionUseFormInterface{
    type:string
    name:string
    input:{}
}

