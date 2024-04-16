'use client'

import type { FormT } from "./types"
import React, { Children, useContext, useEffect, useRef, useState } from "react"
import { Props } from "../../types"
import TextField from "./TextField"
import useForm from "./useForm"
import { createContext } from "react"


const Form: React.FC<FormT> = ({className,onSubmit,children,autofocus}) => {
    const [formData,setFormData] = useForm({})

    const childrenOrganization = (children:React.ReactNode,autofocus?:boolean) =>{
        const childrenArray:React.ReactNode[] = Children.toArray(children)

        const childrenResult = childrenArray.map((child,index)=>{
            
            let props = new Props()

            //@ts-ignore
            props.addProps({...child.props})
            
            //@ts-ignore
            if(child.type.name!="TextField" && child.type.name!="Submit" && child.props.children != undefined){
                return(
                    //@ts-ignore
                    <child.type key={index}>
                        {//@ts-ignore
                        childrenOrganization(child.props.children)
                        }
                    </child.type>
                )
            }
            else{
                //console.log(child)
                //props.addProps({tabIndex: true})
                props.addPropsIfAllTrue({autoFocus:true},[
                    autofocus == true,
                    index == 0
                ])
                props.addProps({getValue:(name:string,value:string)=>{
                    setFormData({
                    type:"setValue",
                    name:name,
                    value:value
                })}})

                return(
                    //@ts-ignore
                    <child.type key={index} {...props}/>
                )
            }
        })

        return childrenResult
    }
    
    const submitHandler = async (e:any) =>{
        e.preventDefault()
        setFormData({
            type:'setState',
            state:'submitting'
        })
        console.log(formData)
        onSubmit(formData)
    }

    useEffect(()=>{
        console.log(formData)
    },[formData])

    return(
        <form className={className} onSubmit={submitHandler} method="POST">
            {childrenOrganization(children,autofocus)}
        </form>
    )

}

export default Form