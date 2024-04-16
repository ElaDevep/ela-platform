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
}