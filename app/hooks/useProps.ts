'use client'

import { Dispatch, DispatchWithoutAction, ReducerAction, ReducerState, useReducer } from "react"
import { Props } from "../types"


const reducer = (state:object,action:ActionUsePropsT) =>{
    let props = new Props()

    switch(action.type){
        case 'Add':
            props.addProps(action.prop)
            break
        case 'AddIfExist':
            props.addPropsIfExist(action.prop,action.exist)
            break
        case 'AddIfAllTrue':
            if(action.conditions != undefined)
            props.addPropsIfAllTrue(action.prop,action.conditions)
            break
        case 'AddIfExistElse':
            if(action.elseProp != undefined)
            props.addPropsIfExistElse(action.prop,action.exist,action.elseProp)
            break
        case 'AddIfAllTrueElse':
            if(action.elseProp != undefined && action.conditions != undefined)
            props.addPropsIfExistElse(action.prop,action.conditions,action.elseProp)
            break
        case 'AddIfSomeTrue':
            if(action.conditions != undefined)
            props.addPropsIfSomeTrue(action.prop,action.conditions)
            break
            
    }
    return props
}

//<()=>[ReducerState<any>,Dispatch<ReducerAction<any>>]>initialFoo:(props:Props)=>Props
const useProps = (initial:(props:Props)=>Props) => {
    const prop = initial(new Props())
    return useReducer(reducer,prop)
}

export default useProps