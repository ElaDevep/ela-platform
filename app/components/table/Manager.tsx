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
            <Button action={()=>{}}>lasflsf</Button>
            <Button action={()=>{}}>lsjdlkasjf</Button>
        </div>
    </>

}

export default Manager