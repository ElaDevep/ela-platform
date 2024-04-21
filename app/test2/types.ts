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
}

export interface toAcceptInterface{
    pattern?:string
    
}
