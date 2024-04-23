import React, { useState, useEffect } from "react";
import { PageContextT } from "./types";

const PageContex = React.createContext(0);


export const PageProvider: React.FC<PageContextT> = (props,children) => {
    //Crea contexto para lectura global al JSON
    const [user,setUser] = useState<object>()


    const value:object = {
        user,
        setUser
    }

    const getCurrentUser = async() =>{
        // const user = await getLoggedUser()
        // if(user!=undefined){
        //     setUser({
        //         name:user.name,
        //         email:user.email,
        //         role:user.role
        //     })
        // }
    }

    useEffect(()=>{
        if(user==undefined){
            getCurrentUser()
        }
    })
    
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
