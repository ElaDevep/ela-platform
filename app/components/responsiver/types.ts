export interface BreakPointT{
    width?:number
    heigh?:number
    relation?:number[]
}
export interface ResponsiverT{
    className:string
    breakPoints?:BreakPointT
    isMobile?:boolean
    isDesk?:boolean
    children: React.ReactNode
}