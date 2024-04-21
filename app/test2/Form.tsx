'use client'

import { Children, useEffect } from "react"
import { FormInterface } from "./types"
import useForm from "./useForm"
import { Props } from "../types"


const Form: React.FC<FormInterface> = ({children,styler}) => {
    const form = useForm()

    const renderChildren = Children.toArray(children).map((child,key)=>{
        let props = new Props()
        const inputComponets = ['Input']

        props.addProps({...child.props})

        
        props.addPropsIfAllTrue({use:(input:any)=>form.setInput(props.name,input)},[
            child.type!=undefined,
            inputComponets.includes(child.type.name)
        ])

        props.addPropsIfAllTrue({styler:styler},[
            styler!=undefined
        ])
        
        return <child.type  key={key} {...props}>
            {child.props.children && child.props.children}
        </child.type>
    })

    useEffect(()=>{
        console.log(form.getData())
    })

    return <>
        <form method="POST" className={styler && styler.base_form}>
            {renderChildren}
        </form>
    </>
}

export default Form