import { StaticImageData } from "next/image"

export {}

declare global {
    interface ButtonT{
      id?:string
      text?:string
      action:()=>any
      className?:string
      autofocus?:boolean
      disable?:boolean
      tabIndex?:boolean|number
      children:React.ReactNode
    }
}

