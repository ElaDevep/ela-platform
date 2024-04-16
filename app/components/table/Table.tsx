'use client'

import { Children, useCallback, useEffect, useState } from "react"
import { TableT } from "./types"
import styles from './component.module.sass'
import { Props } from "@/app/types"
import MixStyles from "@/app/lib/functions/MixStyles"


const Table: React.FC<TableT> = ({children,className,endpoint,getCurrent}) => {
    const [data,setData] = useState()
    const [current,setCurrent] = useState<string>()

    let tableProps = new Props()

    tableProps.addProps({className:MixStyles(className,styles.table_container)})

    const selectOne = useCallback((id:string) =>{
        if(current!=undefined && current != id){
            console.log(id)
            setCurrent(id)
        }
    },[current])
    
    const headersOrganization = () =>{
        const childrenArray:React.ReactNode[] = Children.toArray(children)

        const childrenResult = childrenArray.map((child,index)=>{
            //@ts-ignore
            if(child.type.name!='Column'){
                throw Error()
            }

            return(
                //@ts-ignore
                <th key={index} {...child.props}/>
            )
        })

        return childrenResult
    }

    
    const bodyOrganization = (data:[]) =>{
        const childrenArray:React.ReactNode[] = Children.toArray(children)

        const fields= childrenArray.map((child,index)=>{
            //@ts-ignore
            if(child.type.name!='Column'){
                throw Error()
            }

            return child.props.field
        })

        const rows = data.map((item,itemKey)=>{
            const columns = fields.map((field,fieldKey)=>{
                let value:string = item[field]
                
                if(typeof value == 'boolean'){
                    value = (value)?'S':'N'
                }

                
                if(field == '_id'){
                    value = itemKey.toString()
                }

                return <td key={fieldKey} onClick={()=>{}}>
                    {value}
                </td>
            })

            //@ts-ignore
            return <tr key={itemKey} id={item._id} onClick={()=>{selectOne(item._id)}}>
                {columns}
            </tr>
        })

        return <>
        {rows}
        </>
    }


    const getData = async() =>{
        // console.log((await endpoint()).data)
        setData((await endpoint()).data)
    }

    useEffect(()=>{
        getData()
        setCurrent('')
    },[])

    useEffect(()=>{
        if(current!=undefined){
            getCurrent(current)
        }
    },[current])

    return <>
        <div {...tableProps}>
            <table >
                <thead>
                    <tr>
                        {headersOrganization()}
                    </tr>
                </thead>
                <tbody>
                    {
                    data!=undefined&&
                    bodyOrganization(data)
                    }
                    {
                    data!=undefined&&
                    bodyOrganization(data)
                    }
                    {
                    data!=undefined&&
                    bodyOrganization(data)
                    }
                </tbody>
            </table>
        </div>
    </>

}

export default Table