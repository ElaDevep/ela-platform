import styles from "./Frame.module.sass"
import Image from "next/image";
import MixStyles from "@/app/lib/functions/MixStyles";
import { Props } from "../../types";
import { useProps } from "@/app/hooks/ela-hooks";
import { useEffect } from "react";
import FrameT from "./types";

const Frame: React.FC<FrameT> = ({className,contain,cover,fill,src,alt}) => {
    

    let imageProps = new Props()
    const imgStyles = {
        fill:'inherit',
        position: 'relative',
        width:'100%',
        height:'100%'
    }
    
    imageProps.addPropsIfExist({style:{objectFit:'fill',...imgStyles}},fill)
    imageProps.addPropsIfExist({style:{objectFit:'cover',...imgStyles}},cover)
    imageProps.addPropsIfExistElse({style:{objectFit:'contain',...imgStyles}},contain,{style:{...imgStyles}})

    return(
        <div className={MixStyles(styles.container,className)}>
            <div className={styles.filter}></div>
            <Image
            src = {src}
            alt = {alt}
            sizes={"1000px"}
            {...imageProps}
            />
        </div>
    )
}

export default Frame