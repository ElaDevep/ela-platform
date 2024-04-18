import { postingAPI } from "../../../../_api/axios"

const validateToken = async (token:string) =>{
    try{
        console.log(token)
        const status = (await postingAPI('/validate-token',{token:token}))
        console.log(status)
        return status.userId
    }
    catch(e){
        console.log(e)
    }
}

export default validateToken