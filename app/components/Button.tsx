import Image, { StaticImageData } from "next/image";
import type { CSSProperties } from "react";
import MixStyles from "@/app/lib/functions/MixStyles";
import { Props } from "../types";

const Button: React.FC<ButtonT> = ({action,className,autofocus,disable,tabIndex,children}) => {
    
    let buttonProps = new Props()

    buttonProps.addProps({onClick:action})
    buttonProps.addProps({className:className})


    return(
        <button {...buttonProps}>
            {children}
        </button>
    )

}

export default Button