import axios from "axios";

const api = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})

//Fetch data
export const fetchPostsData = () =>{
    return api.get("/posts")
}