'use client'

import { SubmitT } from "./types";
import styles from "./Form.module.sass"
import { Props } from "@/app/types";
import MixStyles from "@/actions/MixStyles";

const Submit: React.FC<SubmitT> = ({text,tabIndex,size,src,formtarget,className}) => {
    let props = new Props()
    
    props.addPropsIfAllTrueElse({
        value:text
    },[
        text != undefined
    ],{
        value:"Enviar"
    })

    props.addPropsIfExist({tabIndex:'0'},tabIndex)

    // props.addPropsIfAllTrue({tabIndex:tabIndex},[
    //     typeof tabIndex == 'number'
    // ])

    props.addPropsIfAllTrueElse({
        type:'image',
        src:src,
        height:size,
        width:size
    },[
        src != undefined,
        size != undefined
    ],{
        type:'submit'
    })

    props.addProps({className:MixStyles(styles.input_submit,className)})

    return(
        <input {...props}/>
    )

}

export default Submit