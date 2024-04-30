'use client'

import { useEffect, useState } from "react"
import { SubmitT, TextInputT} from "../types"
import styler from '../Form.module.sass'

const Submit: React.FC<SubmitT> = ({children}) => {

    return <>
        <button className={styler.submit}>
            {children}
        </button>
    </>
}

export default Submit