import styles from "./Frame.module.sass"
import Image from "next/image";
import MixStyles from "@/app/lib/actions/MixStyles";
import { Props } from "../../types";
import { useProps } from "@/app/hooks/ela-hooks";
import { useEffect } from "react";

const Frame: React.FC<FrameT> = ({filter,container,contain,cover,fill,src,alt}) => {
    
    
    let [imageProps,setImageProps] = useProps((props)=>{
        props.addPropsIfExist({styles:{objectFit:'fill'}},fill)
        props.addPropsIfExist({styles:{objectFit:'cover'}},cover)
        props.addPropsIfExist({styles:{objectFit:'contain'}},contain)
        return props
    })

    const containerStyles:string = MixStyles(styles.container,container)

    const filterStyles:string = MixStyles(styles.filter,filter)

    useEffect(()=>{
        console.log(imageProps)
    },[])

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