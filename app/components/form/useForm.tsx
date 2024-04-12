'use client'

import { useReducer } from "react"
import { Props } from "../../types"
import { ActionUseForm } from "./types"


const reducer = (state:object,action:ActionUseForm) =>{
    switch(action.type){
            case 'setValue':
                Object.assign(state,{[action.name]:action.value})
                break
            case 'setState':
                Object.assign(state,{submitting:action.state})
    }
    return state
}

//<()=>[ReducerState<any>,Dispatch<ReducerAction<any>>]>initialFoo:(props:Props)=>Props
const useForm= (initial:object) => {
    return useReducer(reducer,initial)
}

export default useForm