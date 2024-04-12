import { StaticImageData } from "next/image"

export default interface FrameT{
  className:string
  children?: React.ReactNode
  src:StaticImageData
  alt:string
  contain?:boolean
  cover?:boolean
  fill?:boolean
}
