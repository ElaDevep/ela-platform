'use client'

import { Children, useEffect, useState } from "react"
import { RowT } from "./types"
import styles from './component.module.sass'
import { useProps } from "@/app/hooks/ela-hooks"
import MixStyles from "@/app/lib/functions/MixStyles"


const Row: React.FC<RowT> = ({children,id,key,onSelect,className}) => {
    const [selected,setSelected] = useState<boolean>()
    const [props,setProps] = useProps((props)=>{
        props.addProps({className:className})
        return props
    })

    const beSelected = () =>{
        console.log(MixStyles(className, styles.selected_row))
        setProps({
            type:'Add',
            prop:{className:(MixStyles(className, styles.selected_row))}
        })
    }

    return <div {...props} onClick={beSelected}>
        {children}
    </div>

}

export default Row