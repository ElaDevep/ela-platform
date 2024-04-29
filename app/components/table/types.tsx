export interface TableT{
    children:React.ReactNode
    endpoint?:()=>any
    className:string
    getCurrent:(id:string)=>any
}

export interface ColumnT{
    field:string
    options?:string
    children:React.ReactNode
}

export interface RowT{
    children:React.ReactNode
    className:string
    key:number
    onSelect:()=>any
    id:string
}

export interface ManagerT{
    current:object
    actions:object
}

export interface DataEntityT{
    _id:string
    [key:string]:any
}