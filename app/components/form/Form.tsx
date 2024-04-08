'use client'

import type { FormT } from "./types"
import React, { Children } from "react"
import { Props } from "../../types"


const childrenOrganization = (children:React.ReactNode,autofocus:boolean|undefined) =>{
    const childrenArray:React.ReactNode[] = Children.toArray(children)

    const childrenResult = childrenArray.map((child,index)=>{
        
        let props = new Props()
        
        //@ts-ignore
        props.addProps({...child.props})
        props.addProps({tabIndex: true})

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

    const submitHandler = (e:any) =>{
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