import styles from "./Frame.module.css"
import Image, { StaticImageData } from "next/image";
import type { CSSProperties } from "react";
import MixStyles from "@/app/lib/actions/MixStyles";
import { Props } from "../types";

const Frame: React.FC<FrameT> = ({filter,container,contain,cover,fill,src,alt}) => {
    
    let imageProps = new Props()

    imageProps.addPropsIfExist({styles:{objectFit:'fill'}},fill)
    imageProps.addPropsIfExist({styles:{objectFit:'cover'}},cover)
    imageProps.addPropsIfExist({styles:{objectFit:'contain'}},contain)

    const containerStyles:string = MixStyles(styles.container,container)

    const filterStyles:string = MixStyles(styles.filter,filter)

    return(
        <div className={containerStyles}>
            <div className={filterStyles}></div>
            <Image
            src = {src}
            alt = {alt}
            sizes={"1000px"}
            fill
            {...imageProps}
            />
        </div>
    )

}

export default Frame