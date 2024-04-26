'use client'

import { Children, FormEvent, useEffect, useState } from "react"
import { FormErrorInterface, FormInterface } from "./types"
import useForm from "./useForm"
import { Props } from "@/app/types"

const FormError: React.FC<FormErrorInterface> = ({visible,children}) => {
    
    return <>
        {visible &&
        {children}
        }
    </>
}

export default FormError