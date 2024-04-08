export interface FormT{
    id?:string
    method?:"GET"|"POST"
    onSubmit:()=>void
    children:React.ReactNode
    className?:string
    autofocus?:boolean
}
export interface GeneralInputT{
    tabIndex?:boolean|number
    className?:string
    disable?:boolean
    id?:string
}

export interface UserInputT extends GeneralInputT{
    label?:string
    value?:any
    autofocus?:boolean
    require?:boolean
    errors?:()=>void
    name:string

}

export interface TextInputT extends UserInputT{
    placeholder?:string
    autocomplete?:string
    minLength?:number
    maxLength?:number
    pattern?:string
    readonly?:boolean   
    getValue:(value:string)=>void
}

export interface SubmitT extends GeneralInputT {
    formtarget?:string
    src?:string
    size?:number
    name?:string
    text?:string
}


