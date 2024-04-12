import { postingAPI } from "../axios"

const validateToken = async (token:string) =>{
    try{
        const status = (await postingAPI('/validate-token',{token:token}))
        console.log(status)
        return status.userId
    }
    catch(e){
        console.log(e)
    }
}

export default validateToken