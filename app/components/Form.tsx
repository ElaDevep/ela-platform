'use client'

import type { CSSProperties } from "react";
import MixStyles from "@/app/lib/actions/MixStyles";
import type { FormT } from "./form/Form";
import React, { Children, cloneElement } from "react";
import { Props } from "../types";
import { channel } from "diagnostics_channel";


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

    return(
        <form className={className} onSubmit={onSubmit} method="POST">
            {childrenOrganization(children,autofocus)}
        </form>
    )

}

export default Form