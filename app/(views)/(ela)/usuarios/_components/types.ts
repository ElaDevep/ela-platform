export interface UserCardT{
    user:User|undefined
}

interface User{
    email:string
    _id:string
    name:string
    mobile:string
    role:string
}