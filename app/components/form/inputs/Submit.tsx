'use client'

import { useEffect, useState } from "react"
import { SubmitT, TextInputT} from "../types"
import styler from '../Form.module.sass'
import MixStyles from "@/app/lib/functions/MixStyles"

const Submit: React.FC<SubmitT> = ({children,className}) => {

    return <>
        <button className={MixStyles(styler.submit,className)}>
            {children}
        </button>
    </>
}

export default Submit