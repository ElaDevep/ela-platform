'use client'

import useScreenSize from "./useScreenSize"
import {  useEffect, useState } from "react"
// const RelationScreen = (width:number,height:number) =>{
//     let relation:number[] = [width,height]
    
//     let i= width>=height?height:width
//     // while(i>1){
//     //     console.log(relation+" "+i)
//     //     if(relation[0]%i==0 && relation[1]%i==0){
//     //         for(let j=0;j<2;j++){
//     //             relation[j] =Math.ceil(relation[j]/i)
//     //         }
//     //     }
//     //     else{
//     //         i--
//     //     }
//     // }
//     console.error(">:v")
    

//     return relation
// }

const useDevice = () =>{
    const {width,height} = useScreenSize()
    const [mobile,setMobile] = useState<boolean>(false)
    const [desk,setDesk] = useState<boolean>(false)
    const [relation,setRelation] = useState<number>(0)
    const [relationCompare,setRelationCompare] = useState<boolean>(false)

    useEffect(()=>{
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        //@ts-ignore
            setMobile(true)
        } else {
            //@ts-ignore
            setDesk(true)
        }
        
        setRelation(width/height)
    },[])

    useEffect(()=>{
        setRelation(width/height)
    },[width,])
    
    useEffect(()=>{
        setRelation(width/height)
    },[height,])


    const relationMinorThan = (width:number,height:number) =>{
        let relationRef= width/height
        return relation<relationRef
    }
    

    
    const relationEqualThan = (width:number,height:number) =>{
        let relationRef= width/height
        return relation==relationRef
    }

    
    const relationHigherThan = (width:number,height:number) =>{
        let relationRef= width/height
        setRelationCompare(relation>relationRef)
        return relation
    }

    return {mobile,desk,relation,relationEqualThan,relationHigherThan,relationMinorThan,width,height}
}

export default useDevice