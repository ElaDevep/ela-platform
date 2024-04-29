'use client'

import { Children, useCallback, useEffect, useState } from "react"
import { DataEntityT, TableT } from "./types"
import styler from './Table.module.sass'
import { Props } from "@/app/types"
import MixStyles from "@/app/lib/functions/MixStyles"
import Row from "./Row"
import Animator from "../animator/Animator"
import { usePathname } from "next/navigation"


const Table: React.FC<TableT> = ({children,className,endpoint,getCurrent}) => {
    const [data,setData] = useState()
    const [current,setCurrent] = useState<string>()
    const [error,setError] = useState<boolean>(false)
    const pathname = usePathname()

    let tableProps = new Props()

    tableProps.addProps({className:MixStyles(styler.table_container,className)})

    const selectOne = (index:string) =>{
        if((current==undefined || current != index) && data!=undefined){
            console.log(index)
            setCurrent(index)
        }
    }

    
    
    const headersOrganization = () =>{
        const childrenArray:React.ReactNode[] = Children.toArray(children)

        const childrenResult = childrenArray.map((child,index)=>{
            //@ts-ignore
            if(child.type.name!='Column'){
                throw Error()
            }
            return(
                //@ts-ignore
                <div className={styler.headers_columns} key={index} {...child.props}/>
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
            //@ts-ignore
            return child.props.field
        })

        const rows = data.map((item:DataEntityT,itemKey)=>{
            
            let props = new Props()

            props.addPropsIfAllTrueElse({className:MixStyles(styler.selected_row,styler.record_row)},[
                itemKey.toString() == current
            ],{className:styler.record_row})

            const columns = fields.map((field,fieldKey)=>{

                let value:string = item[field]
                
                if(typeof value == 'boolean'){
                    console.log(value)
                    value = (value)?'✓':''
                }

                
                if(field == '_id'){
                    value = itemKey.toString()
                }

                return <span 
                    className={styler.record_column} 
                    key={fieldKey} 
                    onClick={()=>{}}
                >
                    {value}
                </span>
            })

            return <div 
                {...props} 
                key={itemKey} 
                id={item._id} 
                onClick={()=>selectOne(itemKey.toString())}
            >
                {columns}
            </div>
        })

        return <>
            {rows}
        </>
    }


    const getData = async() =>{
        if(endpoint!=undefined){
            const response = (await endpoint())
            if(response!=undefined){
                if(response.status == 'success'){
                    setData((await endpoint()).data)
                }
                else{
                    setError(true)
                }
            }
        }
    }

    useEffect(()=>{
        getData()
    },[,pathname])

    useEffect(()=>{
        if(current!=undefined && data!=undefined){
            console.log(data[current])
            getCurrent(data[current])
        }
    },[current])

    return <>
        <div {...tableProps}>
                {!data && !error &&
                    <div className={styler.fetching_container}>
                        <Animator 
                            className={styler.charging_animation}
                            baseRoute="/animations/change_table/"
                            framing={3}
                            start={0}
                            end={2}
                            infinite
                            auto
                        />
                    </div>
                }
                {data && !error &&
                <>
                    <div className={styler.header_table}>
                        {headersOrganization()}
                    </div>
                    <div className={styler.records_table}>
                        {
                        data!=undefined&&
                        bodyOrganization(data)
                        }
                    </div>
                </>
                }
                {error && 
                    <div className={styler.serverError_container}>
                        <h2>Problema de servidor</h2>
                    </div>
                }
        </div>
    </>

}

export default Table