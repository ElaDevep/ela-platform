'use client'

import { Children, FormEvent, useEffect, useState } from "react"
import { FormInterface } from "./types"
import useForm from "./useForm"
import { Props } from "../types"

const setTriggers = (formInputs:object,inputName:string) =>{
    let triggers = []
    for(let input in formInputs){
        if(formInputs[input].dependencies!=undefined){
            // console.log(input.props.dependencies)
            for(let dependence of formInputs[input].dependencies){
                //console.log(dependence)
                if(dependence == inputName){
                    // console.log(formInputs[input].change)
                    triggers.push(formInputs[input].change)
                }
            }
        }
    }
    return({triggers:triggers})
    // console.log(inputName)
    // console.log({triggers:triggers})
    //     if(input.dependencies!=undefined){
    //         return input.dependencies.map((dependence)=>{
    //             if(dependence==props.name){
    //                 return ';v'
    //             }
    //         })
    //     }
    // })
}

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
                    
                    if(form.inputs!=undefined){
                        //form.input[props.name].trigger!=setTriggers(form.inputs,props.name,children)
                        //console.log(form.input))
                        props.addPropsIfAllTrue(setTriggers(form.inputs,props.name,children),[form.inputs[props.name].trigger!=setTriggers(form.inputs,props.name,children)])
                        //props.addProps({triggers:})
                        // props.addProps({triggers:form.inputs.values().map((input,key)=>{
                        //     //return input.
                        // })})
                    }

                    if(props.dependencies!=undefined){
                        //console.log(props.dependencies)
                        props.addProps({inputs:props.dependencies.map((dependence)=>{
                            if(form.inputs!=undefined)
                                return form.inputs[dependence]
                        })})
                    }
                    
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

    const onSubmit = (e:FormEvent)=>{
        e.preventDefault()
        form.onSubmit()
    }


    // useEffect(()=>{
    //     for(let i in form.inputs){
    //         if(form.inputs[i].dependencies != undefined){
    //             console.log(form.inputs[i].dependencies.map((dependence)=>{
    //                 return dependence
    //             }))
    //         }
    //     }
    // })

    return <>
        <form method="POST" className={styler && styler.base_form} onSubmit={(e)=>{onSubmit(e)}}>
            {renderChildren}
        </form>
    </>
}

export default Form