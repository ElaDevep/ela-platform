const MixStyles = (...styles:Array<string|undefined|{readonly [key: string]: string}>) => {

    if(typeof styles[1] == 'object'){
        return styles.map((style:object|string|undefined,index)=>{
            if(index!=0){
                if(style!=undefined){
                    return style[styles[0]]
                }
            }
        }).join(' ')
    }
    else{
        return styles.join(' ')
    }
}

export default MixStyles