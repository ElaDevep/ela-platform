'use client'

import { Children, useEffect, useState } from "react"
import { RowT } from "./types"


const Row: React.FC<RowT> = ({children}) => {
    const [selected,setSelected] = useState<boolean>()

    useEffect(()=>{

    })

    return <>
        
        {children}
    </>

}

export default Row