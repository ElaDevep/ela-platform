const MixStyles = (...styles:Array<string|undefined|{readonly [key: string]: string}>) => {

    if(typeof styles[1] == 'object' && typeof styles[0] == 'string'){
        let styleFiles:Array<{readonly [key: string]: string}>=[]

        for(let style of styles){
            if(typeof style == 'object'){
                styleFiles.push(style)
            }
        }

        return styleFiles.map((style:{[key:string]:string})=>{
            if(style!=undefined){
                if(typeof styles[0]=='string')
                    return style[styles[0]]
            }
        }).join(' ')
    }
    else{
        return styles.join(' ')
    }
}

export default MixStyles