import React, { useState, useEffect } from "react";
import { PageContextT } from "./types";
import get_current_user from "../api/AUTH/get_current_user";
import log_out from "../api/AUTH/log_out";
import LocalFileReader from "../lib/functions/LocalFileReader";
import roleAccess from "@/app/lib/jsons/roleAccess.json"
import { title } from "process";
import { useRouter } from "next/navigation";

const PageContex = React.createContext(0);


export const PageProvider: React.FC<PageContextT> = (props,children) => {
    //Crea contexto para lectura global al JSON
    const [user,setUser] = useState<object>()
    const [access,setAccess] = useState<object>()
    const router = useRouter()


    const getCurrentUser = async() =>{
        const response = await get_current_user()
        //console.log(response)
        if(response!=undefined && user == undefined){
            setUser({
                name:response.data.name,
                email:response.data.email,
                role:response.data.role,
                imgProfile:response.data.imgProfile
            })
        }
    }

    const logOut = () =>{
        setUser(undefined)
        log_out()
    }

    // useEffect(()=>{
    //     if(user==undefined){
    //         getCurrentUser()
    //     }
    //     else{
    //         console.log(user)
    //     }
    // })

    useEffect(()=>{
        getCurrentUser()
    })

    useEffect(()=>{
        if(user!=undefined){
            setAccess((roleAccess.roles[user.role]).map((access:string)=>{
                return roleAccess.views[access]
            }))
        }
        
    },[user])
    
    
    

    const value:object = {
        user,
        setUser,
        logOut,
        access
    }
    
    //@ts-ignore
    return <PageContex.Provider value={value} {...props}/>
}

export const usePageContext = () => {
    //Funcion para acceder al JSON
    const contex = React.useContext(PageContex);
    if (!contex) {
        throw new Error("No existe el contexto");
    }
    return contex;
};
