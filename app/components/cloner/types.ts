import { Dispatch } from "react"

export interface ClonerT{
    children:React.ReactNode
    iterator:object[]
    setItem:Dispatch<any>
}