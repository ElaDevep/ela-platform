import { StaticImageData } from "next/image"

export {}

declare global {
    interface FrameT{
      filter?: string
      container?: string
      children?: React.ReactNode
      src:StaticImageData
      alt:string
      contain?:boolean
      cover?:boolean
      fill?:boolean
    }

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
