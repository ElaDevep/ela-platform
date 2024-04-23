export interface FormInterface{
    children:React.ReactNode
    styler?:{readonly [key: string]: string}
    initValues?:object
    onSubmit:(formData:object)=>any
    className?:string
    errorMessage?:string
}

export interface ActionUseInputInterface{
    type:string
    value:string
    error:boolean
    clicked:boolean
}

export interface InputInterface{
    name?:string
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
    label?:string
    requireWarn?:string
    patternWarn?:string
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
    hiders:string[],
}

export interface ActionUseFormInterface{
    type:string
    name:string
    input:{}
}

export interface SubmitInterface extends InputInterface{
    children: React.ReactNode
    disable?:boolean
}

export interface TextInputInterface extends InputInterface{
    placeholder?:string
}

