import React,{ useState } from "react";

const TabIndexContext = React.createContext('');

export const TabIndexProvider = () =>{
    const [tabIndex,setTabIndex] = useState(1)

    const propTabIndex = () =>{
        let tabIndexProp = tabIndex;
        setTabIndex(tabIndex+1)
        return tabIndexProp
    }

    const resetTabIndex = () => {
        setTabIndex(0)
    }
}

export con