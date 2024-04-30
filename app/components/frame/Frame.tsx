import styles from "./Frame.module.sass"
import Image from "next/image";
import MixStyles from "@/app/lib/functions/MixStyles";
import { Props } from "../../types";
import { useProps } from "@/app/hooks/ela-hooks";
import { useEffect } from "react";
import FrameT from "./types";

const Frame: React.FC<FrameT> = ({className,contain,cover,fill,src,alt,onClick,onDrag,onMouseDown,onMouseUp}) => {
    

    let imageProps = new Props()
    const imgStyles = {
        fill:'inherit',
        // position: 'relative',
        // width:'100%',
        // height:'100%'
    }
    
    imageProps.addPropsIfExist({style:{objectFit:'fill',...imgStyles}},fill)
    imageProps.addPropsIfExist({style:{objectFit:'cover',...imgStyles}},cover)
    imageProps.addPropsIfExist({style:{objectFit:'contain',...imgStyles}},contain)
    imageProps.addPropsIfAllTrue({style:{...imgStyles}},[
        !fill,!cover,!contain
    ])

    return(
        <div 
            className={MixStyles(styles.container,className)}
            {...onClick && {onClick:onClick}}    
            {...onDrag && {onDrag:onDrag}}    
            {...onMouseDown && {onMouseDown:onMouseDown}}    
            {...onMouseUp && {onMouseUp:onMouseUp}}    
        >
            <div className={styles.filter}></div>
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