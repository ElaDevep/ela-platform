'use client'

import { Children, useEffect } from "react"
import { FormInterface } from "./types"
import useForm from "./useForm"
import { Props } from "../types"

const FormChildrenModifier = (children:React.ReactNode,styler:{readonly [key: string]: string}|undefined,form:object) =>{
    return Children.toArray(children).map((child,key)=>{
        let props = new Props()
        const inputComponets = ['Input']

        props.addProps({...child.props})

        if(child.type!=undefined){
            if(child.type.name!=undefined){
                if(inputComponets.includes(child.type.name)){
                    props.addProps({use:(input:any)=>form.setInput(props.name,input)})

                    props.addPropsIfAllTrue({fatherStyler:styler},[
                        styler!=undefined
                    ])
                    
                    return <child.type  key={key} {...props}>
                        {props.children && props.children}
                    </child.type>
                }
            }
            else{
                return <child.type  key={key} {...props}>
                    {props.children && FormChildrenModifier(props.children,styler,form)}
                </child.type>
            }
        }
        
    })
}

const Form: React.FC<FormInterface> = ({children,styler}) => {
    const form = useForm()

    const renderChildren = FormChildrenModifier(children,styler,form)

    useEffect(()=>{
        console.log(form.inputs)
    })

    return <>
        <form method="POST" className={styler && styler.base_form}>
            {renderChildren}
        </form>
    </>
}

export default Form