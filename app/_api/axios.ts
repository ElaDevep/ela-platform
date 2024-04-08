import axios from "axios"

const axiosAPI = axios.create({
    baseURL:'http://localhost:4000/'
})

const postingAPI = async(endpoint:string,params:object) =>{
    let response:any = ''
    await axiosAPI.post(endpoint,params)
    .then((res)=>{
        //console.log(res)
        response = res
    })
    .catch((error)=>{
        console.error(error)
    })
    return response.data
}

const gettingAPI = () =>{

}

export {postingAPI,gettingAPI}