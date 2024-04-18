'use client'

import { Children, useCallback, useEffect, useState } from "react"
import { TableT } from "./types"
import styles from './component.module.sass'
import { Props } from "@/app/types"
import MixStyles from "@/app/lib/functions/MixStyles"
import Row from "./Row"


const Table: React.FC<TableT> = ({children,className,endpoint,getCurrent}) => {
    const [data,setData] = useState()
    const [current,setCurrent] = useState<string>()

    let tableProps = new Props()

    tableProps.addProps({className:MixStyles(styles.table_container,className)})

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
                <div className={styles.headers_columns} key={index} {...child.props}/>
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
            
            let props = new Props()

            props.addPropsIfAllTrueElse({className:MixStyles(styles.selected_row,styles.record_row)},[
                item._id == current
            ],{className:styles.record_row})

            const columns = fields.map((field,fieldKey)=>{

                let value:string = item[field]
                
                if(typeof value == 'boolean'){
                    value = (value)?'S':'N'
                }

                
                if(field == '_id'){
                    value = itemKey.toString()
                }

                return <div className={styles.record_column} key={fieldKey} onClick={()=>{}}>
                    {value}
                </div>
            })

            //@ts-ignore
            return <div {...props} key={itemKey} id={item._id} onClick={()=>selectOne(item._id)}>
                {columns}
            </div>
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
                <div className={styles.header_table}>
                    {headersOrganization()}
                </div>
                <div className={styles.records_table}>
                    {
                    data!=undefined&&
                    bodyOrganization(data)
                    }
                </div>
        </div>
    </>

}

export default Table