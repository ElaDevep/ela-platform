import axios from "axios"

const axiosAPI = axios.create({
    baseURL:'http://localhost:4000/'
})

const postingAPI = async(endpoint:string,params:object) =>{
    let response:any = ''
    await axiosAPI.post(endpoint,params)
    .then((res)=>{
        response = res.data
    })
    .catch((error)=>{
        throw error
    })
    return response
}

const gettingAPI = async(endpoint:string) =>{
    return (await axiosAPI.get(endpoint)).data
}

export {postingAPI,gettingAPI}