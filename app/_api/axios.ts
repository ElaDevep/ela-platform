import axios from "axios"

const axiosAPI = axios.create({
    baseURL:'http://localhost:4000/'
})

const postingAPI = async(endpoint:string,body:object) =>{
    let response:any = ''
    await axiosAPI.post(endpoint,body)
    .then((res)=>{
        response = res.data
    })
    .catch((error)=>{
        console.log(error)
        throw error
    })
    return response
}

const gettingAPI = async(endpoint:string) =>{
    try{
        return (await axiosAPI.get(endpoint)).data
    }
    catch(e){
        return e
    }
}

export {postingAPI,gettingAPI}