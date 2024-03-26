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

    // class Props{
    //   constructor(){}
      
    //   addProps(prop:object){
    //       Object.assign(this,prop)
    //   }

    //   addPropsIfExist(prop:object,ifProp:any){
    //     if(ifProp){
    //       this.addProps(prop)
    //     }
    //   }

    //   addPropsIfAllTrue(prop:object,conditions:boolean[]){
    //     conditions.forEach(condition => {
    //       if(!condition) return
    //     });
    //     this.addProps(prop)
    //   }

    // }
}
