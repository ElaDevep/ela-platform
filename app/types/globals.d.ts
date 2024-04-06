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

    interface BreakPointT{
      width?:number
      heigh?:number
      relation?:number[]
    }

    interface ResponsiverT{
      className:string
      breakPoints?:BreakPointT
      isMobile?:boolean
      isDesk?:boolean
      children: React.ReactNode
    }

    interface ActionUsePropsT{
      type:string
      prop:object
      exist?:!undefined
      conditions?:boolean[]
      elseProp?:object
    }

}
