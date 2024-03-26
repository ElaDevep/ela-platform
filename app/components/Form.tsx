'use client'

import type { CSSProperties } from "react";
import MixStyles from "@/app/lib/actions/MixStyles";
import type { Form } from "./form/Form";
import React, { Children, cloneElement } from "react";


const childrenOrganization = (children:React.ReactNode,autofocus:boolean|undefined) =>{
    const childrenArray:React.ReactNode[] = Children.toArray(children)

    const childrenResult = childrenArray.map((child,index)=>{
        
        let props = {
            //@ts-ignore
            ...child.props,
            tabIndex: true,
            key:index
        }
        if(index==0 && autofocus){
            props.autofocus=true
        }
        return(
            //@ts-ignore
            <child.type {...props}/>
        )
    })

    return childrenResult
}

const Form: React.FC<Form> = ({className,onSubmit,children,autofocus}) => {

    return(
        <form className={className} onSubmit={onSubmit}>
            {childrenOrganization(children,autofocus)}
        </form>
    )

}

export default Form