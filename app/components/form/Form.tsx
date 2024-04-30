import Image, { StaticImageData } from "next/image";
import { Children, type CSSProperties } from "react";
import MixStyles from "@/app/lib/functions/MixStyles";
import { FormT } from "./types";

const Form: React.FC<FormT> = ({children,submit,className,useForm}) => {
    const {handleSubmit} = useForm

    return <>
        <form method="POST" onSubmit={handleSubmit(submit)} className={className} noValidate>
            {children}
        </form>
    </>

}

export default Form