'use client'

import type { FormT } from "./types"
import React, { Children, useContext, useEffect, useRef, useState } from "react"
import { Props } from "../../types"
import useForm from "./useForm"


const Form: React.FC<FormT> = ({className,onSubmit,children,autofocus,values}) => {
    const [formData,setFormData] = useForm({})

    if(values!=undefined)console.log(values)

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
                    <child.type key={index} {...props}>
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
                
                if(child.props.name != undefined && values != undefined){
                    props.addPropsIfAllTrue({startValue:values[child.props.name]},[
                        values[child.props.name] != undefined,
                    ])
                }
                props.addProps({getValue:(name:string,value:string)=>{
                    setFormData({
                    type:"setValue",
                    name:name,
                    value:value
                })}})

                console.log(props)

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
        //console.log(formData)
        onSubmit(formData)
    }

    // useEffect(()=>{
    //     console.log(formData)
    // },[formData])

    return(
        <form className={className} onSubmit={submitHandler} method="POST">
            {childrenOrganization(children,autofocus)}
        </form>
    )

}

export default Form