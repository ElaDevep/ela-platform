'use client'

import { useEffect, useState } from "react"
import useDevice from "../hooks/useDevice"
import { Props } from "../types"
import useProps from "../hooks/useProps"


const Responsiver: React.FC<ResponsiverT> = ({className,isMobile,isDesk,children,breakPoints}) => {
    let props = new Props()
    const {mobile,desk,relationMinorThan,relation,width,height} = useDevice()
    const [breakCheck,setBreakCheck] = useState<boolean>(false)

    const [trueProps,setTrueProps] = useProps((propsT)=>{
        propsT.addPropsIfSomeTrue({className:className},[
            (isMobile==undefined)?false:mobile,
            (isDesk==undefined)?false:desk,
            (breakPoints==undefined)?false:breakCheck  
        ])
        return propsT
    })

    const breakCheckSetter = ()=> {
        let check:boolean = false

        for(let bp in breakPoints){
            if(bp=='width'){
                //@ts-ignore
                check = (width < breakPoints?.width)?true:false
            }
            if(bp=='relation'){
                //@ts-ignore
                check = relationMinorThan(breakPoints?.relation[0],breakPoints?.relation[1])
            }
            if(bp=='heigh'){
                //@ts-ignore
                check = (height < breakPoints?.heigh)?true:false
            }
        }

        return check
    }

    props.addPropsIfSomeTrue({className:className},[
        (isMobile==undefined)?false:mobile,
        (isDesk==undefined)?false:desk,
        (breakPoints==undefined)?false:breakCheck    
    ])

    // useEffect(()=>{
    //     console.log({
    //         ...props,
    //         mobile:(isMobile==undefined)?false:mobile,
    //         desk:(isDesk==undefined)?false:desk,
    //         breakPoint:(breakPoints==undefined)?false:breakCheck
    //     })
    // })

    useEffect(()=>{
        //@ts-ignore
        setBreakCheck(breakCheckSetter())
    },[relation])

    useEffect(()=>{
        console.log(trueProps)
        console.log(breakCheck)
        setTrueProps({
            type:'AddIfSomeTrue',
            prop:{className:className},
            conditions:[
                (isMobile==undefined)?false:mobile,
                (isDesk==undefined)?false:desk,
                (breakPoints==undefined)?false:breakCheck    
            ]
        })
    },[breakCheck])

    return(
        <div {...trueProps}>
        {children}
        </div>
    )
}

export default Responsiver
