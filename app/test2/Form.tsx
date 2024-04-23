'use client'

import { Children, FormEvent, useEffect, useState } from "react"
import { FormInterface } from "../components/form/types"
import useForm from "./useForm"
import { Props } from "../types"

const setTriggers = (formInputs:object,inputName:string) =>{
    let triggers = []
    for(let input in formInputs){
        if(formInputs[input].previous!=undefined){
            // console.log(input.props.dependencies)
            for(let previou of formInputs[input].previous){
                //console.log(dependence)
                if(previou == inputName){
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

const FormChildrenModifier = (children:React.ReactNode,styler:{readonly [key: string]: string}|undefined,form:object,initValues:object) =>{
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

                    //Previous
                    if(props.previous!=undefined){
                        props.addProps({previousInputs:props.previous.map((previou)=>{
                            if(form.inputs!=undefined){
                                return form.inputs[previou]
                            }
                        })})
                    }

                    if(initValues!=undefined && props.name!=undefined){
                        props.addPropsIfExist({initValue:initValues[props.name]},initValues[props.name])
                    }
                    
                    return <child.type  key={key} {...props}>
                        {props.children && props.children}
                    </child.type>
                }
            }
            else{
                return <child.type {...props}>
                    {props.children && FormChildrenModifier(props.children,styler,form,initValues)}
                </child.type>
            }
        }
        
    })
}

const Form: React.FC<FormInterface> = ({children,styler,initValues,onSubmit}) => {
    const form = useForm({onSubmit:onSubmit})

    const renderChildren = FormChildrenModifier(children,styler,form,initValues)

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
        {form.error && <h1>asldjlsadfj</h1>}
        <form method="POST" className={styler && styler.base_form} onSubmit={(e)=>{form.onSubmit(e)}}>
            {renderChildren}
        </form>
    </>
}

export default Form