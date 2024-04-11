import { postingAPI } from "../axios"

const restorePassword = async (userEmail:object) =>{
    try{
        console.log(userEmail)
        const status = (await postingAPI('/forgot-password',userEmail))
        console.log(status)
        return true
    }
    catch(e){
        console.log(e)
    }
}

export default restorePassword