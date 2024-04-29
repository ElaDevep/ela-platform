export interface PageContextT{
    props?:any
    children:React.ReactNode
}

export interface RoleAccessInterface{
    roles:{[key:string]:Array<string>}
    views:{
        [key:string]:{
            title:string
            route:string
        }
    }
}