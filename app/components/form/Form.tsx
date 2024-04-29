'use client'

import { Children, FormEvent, ReactElement, useEffect, useState } from "react"
import { ChildOfForm, FormChildPropsInterface, FormInterface, useFormReturnInterface } from "./types"
import useForm from "./useForm"
import { Props } from "@/app/types"
import localStyler from './Form.module.sass'
import MixStyles from "@/app/lib/functions/MixStyles"
import { useProps } from "@/app/hooks/ela-hooks"

const setTriggers = (formInputs:{[key:string]:any},inputName:string) =>{
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
}

const FormChildrenModifier = (children:React.ReactNode,styler:{readonly [key: string]: string}|undefined,form:useFormReturnInterface,initValues:{readonly [key: string]: any}|undefined) =>{
    return Children.toArray(children).map((child,key)=>{
        let props = new Props()
        const inputComponents = ['TextField','Submit','PasswordField']


        const childObj={
            //@ts-ignore
            props:child.props,
            //@ts-ignore
            type:child.type,
            //@ts-ignore
            typeName:child.type.name
        }

        props.addProps({...childObj.props})

        if(childObj.type!=undefined){
            console.log(':v')
            console.log(childObj)
            if(childObj.typeName!=undefined){
                // if(child.type.name=='FormError'){
                //     if(form.apiError){
                //         return <child.type  key={key} {...props}>
                //             {props.children && props.children}
                //         </child.type>
                //     }
                // }
                if(inputComponents.includes(childObj.typeName)){
                    props.addPropsIfAllTrue({use:(input:any)=>form.setInput(props.getProp('name'),input)},[childObj.typeName != 'Submit'])

                    props.addPropsIfAllTrue({fatherStyler:styler},[
                        styler!=undefined
                    ])
                    
                    if(form.inputs!=undefined && childObj.typeName != 'Submit'){
                        //form.input[props.name].trigger!=setTriggers(form.inputs,props.name,children)
                        //console.log(form.input))
                        props.addProps(setTriggers(form.inputs,props.getProp('name')))
                        // ,                            [form.inputs[props.name].trigger!=setTriggers(form.inputs,props.name,children)])
                        //props.addProps({triggers:})
                        // props.addProps({triggers:form.inputs.values().map((input,key)=>{
                        //     //return input.
                        // })})
                    }

                    

                    if(childObj.typeName == 'Submit'){
                        props.addProps({disable:form.error})
                    }

                    //Previous
                    if(props.getProp('previous')!=undefined){
                        props.addProps({previousInputs:props.getProp('previous').map((previou:string)=>{
                            if(form.inputs!=undefined){
                                return form.inputs[previou]
                            }
                        })})
                    }

                    if(initValues!=undefined && props.getProp('name')!=undefined){
                        props.addPropsIfExist({initValue:initValues[props.getProp('name')]},initValues[props.getProp('name')])
                    }
                    
                    //OJO
                    return <childObj.type  key={key} {...props}/>
                }
            }
            else{

                return <childObj.type  key={key} {...props}>
                    {props.getProp('children') && FormChildrenModifier(props.getProp('children'),styler,form,initValues)}
                </childObj.type>
            }
        }
        else{
            return <>
                {child}
            </>
        }
        
    })
}

const Form: React.FC<FormInterface> = ({children,styler,initValues,onSubmit,className,errorMessage}) => {
    const form = useForm({onSubmit:onSubmit})
    const formProps = useProps((props:Props)=>{
        props.addPropsIfExistElse({
            className:MixStyles(className,localStyler.generalError_form)},
            form.apiError,
            {className:className})
        return props
    })


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
        <form 
            method="POST" 
            className={MixStyles(className,localStyler.generalError_form)} 
            onSubmit={(e)=>{form.onSubmit(e)}}        
        >
            {renderChildren}
            {form.apiError!='' && form.apiError!=undefined && 
            <p className={localStyler.apiError}>{form.apiError}</p>}
        </form>
    </>
}

export default Form