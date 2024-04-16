import { gettingAPI, postingAPI } from "./axios"

const getUsers = async () =>{
    try{
        const response = (await gettingAPI('/usuarios'))
        return response
    }
    catch(e){
        console.log(e)
        return e
    }
}

export default getUsers