import styles from "./Frame.module.sass"
import Image from "next/image";
import MixStyles from "@/app/lib/functions/MixStyles";
import { Props } from "../../types";
import { useProps } from "@/app/hooks/ela-hooks";
import { useEffect } from "react";

const Frame: React.FC<FrameT> = ({filter,container,contain,cover,fill,src,alt}) => {
    

    let imageProps = new Props()
    imageProps.addPropsIfExist({style:{objectFit:'fill'}},fill)
    imageProps.addPropsIfExist({style:{objectFit:'cover'}},cover)
    imageProps.addPropsIfExist({style:{objectFit:'contain'}},contain)

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