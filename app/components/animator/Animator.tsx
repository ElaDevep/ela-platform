
import { useEffect, useState } from "react";
import { AnimatorInterface } from "./types";

const Animator: React.FC<AnimatorInterface> = ({className,baseRoute,framing,start,end,auto,infinite,onClick}) => {
    const [nFrame,setNFrame] = useState(start)
    const [frame,setFrame] = useState<string>()
    const [play,setPlay] = useState<boolean>(false)

    const changeFrame = () =>{
        if(nFrame < end){
            setNFrame(nFrame+1)
        }
        else{
            setNFrame(start)
            if(!infinite){
                setPlay(false)
            }
        }
    }

    const setFrameRoute = () =>{
        let timeout = 1000/framing
        let zeros = ''
        console.log()
        for(let i=0;i<(4-nFrame.toString().length);i++){
            zeros+='0'
        }
        //console.log(baseRoute+zeros+nFrame+'.png')
        setFrame(baseRoute+zeros+nFrame+'.png')
        if(play) setTimeout(()=>changeFrame(),timeout)
    }

    useEffect(()=>{
        if(auto) setPlay(true)
    },[])

    useEffect(()=>{
        setFrameRoute()
    },[nFrame])

    // useEffect(()=>{
    //     console.log(frame)
    //     if(play) setTimeout(()=>changeFrame(),1000)
    // },[frame])

    useEffect(()=>{
        //console.log(play)
        if(play)
            changeFrame()
    },[play])

    return <div {...onClick && {onClick:()=>setPlay(!play)}}>
        <img src={frame} className={className}/>
    </div>
}

export default Animator