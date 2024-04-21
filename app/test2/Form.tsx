'use client'

import { FormInterface } from "./types"


const Form: React.FC<FormInterface> = ({children,styler}) => {
    const renderChildren = children

    //const childrenArray:React.ReactNode[] = Children.toArray(children)

    return <>
        <form method="POST" className={styler && styler.base_form}>
            {renderChildren}
        </form>
    </>
}

export default Form