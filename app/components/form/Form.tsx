'use client'

import type { FormT } from "./types"
import React, { Children, useState } from "react"
import { Props } from "../../types"

const childrenOrganization = (children:React.ReactNode,autofocus?:boolean) =>{
    const childrenArray:React.ReactNode[] = Children.toArray(children)

    const childrenResult = childrenArray.map((child,index)=>{
        
        let props = new Props()
        
        //@ts-ignore
        props.addProps({...child.props})
        props.addProps({tabIndex: true})
        //@ts-ignore
        props.addPropsIfAllTrue({autoFocus:true},[
            autofocus == true,
            index == 0
        ])

        return(
            //@ts-ignore
            <child.type key={index} {...props}/>
        )
    })

    return childrenResult
}

const Form: React.FC<FormT> = ({className,onSubmit,children,autofocus}) => {
    const [submitted,setSubmitted] = useState()
    
    const submitHandler = async (e:any) =>{
        e.preventDefault()
        onSubmit()
    }

    return(
        <form className={className} onSubmit={submitHandler} method="POST">
            {childrenOrganization(children,autofocus)}
        </form>
    )

}

export default Form