import styles from "./Frame.module.css"
import Image, { StaticImageData } from "next/image";
import type { CSSProperties } from "react";
import MixStyles from "@/app/lib/actions/MixStyles";

const ImageFit = (frame:FrameT) =>{
    let imageFit:CSSProperties = {
        objectFit:'contain'
    };

    if(frame.cover){
        imageFit.objectFit = 'cover';
    }
    else if(frame.fill){
        imageFit.objectFit = 'fill'
    }

    return(imageFit)
}
const Frame: React.FC<FrameT> = ({filter,container,contain,cover,fill,src,alt}) => {
    const frame:FrameT = {
        filter: filter,
        container:container,
        src:src,
        alt:alt,
        contain:contain,
        cover:cover,
        fill:fill
    }

    const containerStyles:string = MixStyles(styles.container,frame.container)

    const filterStyles:string = MixStyles(styles.filter,frame.filter)
    return(
        <div className={containerStyles}>
            <div className={filterStyles}></div>
            <Image
            src = {frame.src}
            alt = {frame.alt}
            sizes={"1000px"}
            fill
            style={ImageFit(frame)}
            />
        </div>
    )

}

export default Frame