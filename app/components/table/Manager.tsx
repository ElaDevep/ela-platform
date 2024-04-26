'use client'

import { Children, useEffect, useState } from "react"
import { ManagerT, RowT } from "./types"
import Button from "../Button"


const Manager: React.FC<ManagerT> = ({actions,}) => {
    const [selected,setSelected] = useState<boolean>()

    useEffect(()=>{

    })

    return <>
        <div>
            <Button action={()=>{}}/>
            <Button action={()=>{}}/>
        </div>
    </>

}

export default Row