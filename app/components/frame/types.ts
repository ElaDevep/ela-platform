import { StaticImageData } from "next/image"

export default interface FrameT{
  className:string
  children?: React.ReactNode
  src:StaticImageData|string
  alt:string
  contain?:boolean
  cover?:boolean
  fill?:boolean
  placeholder?:'blur'|'none'|'loading'  
  onMouseDown?:()=>any
  onMouseUp?:()=>any
  onDrag?:()=>any
  onClick?:()=>any
}
