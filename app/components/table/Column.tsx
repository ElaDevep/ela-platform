'use client'

import { Children, useEffect } from "react"
import { ColumnT } from "./types"


const Column: React.FC<ColumnT> = ({field,options,children}) => {

    useEffect(()=>{

    })

    return <>
        {children}
    </>

}

export default Column