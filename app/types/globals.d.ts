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
}
