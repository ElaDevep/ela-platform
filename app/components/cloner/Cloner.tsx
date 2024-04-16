import Image, { StaticImageData } from "next/image";
import { Children, type CSSProperties } from "react";
import MixStyles from "@/app/lib/functions/MixStyles";
import { ClonerT } from "./types";

const Cloner: React.FC<ClonerT> = ({children,iterator,setItem}) => {
    let clones
    const childrenArray:React.ReactNode[] = Children.toArray(children)

    return <>
        <h1></h1>
        {
        iterator.map((item,key)=>{
            setItem(item)
            return {
                childrenArray.map((child,key)=>{
                    <child.type key={key}/>
                })
            }
        })
        }
    </>

}

export default Cloner