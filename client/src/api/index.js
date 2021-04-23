import axios from 'axios';
let API_URL='';
if(process.env.NODE_ENV!=='production'){
    API_URL=process.env.REACT_APP_API_URL;
}
const API = axios.create({baseURL:API_URL});
API.interceptors.request.use((req)=>{
    const profileLocalStorage = localStorage.getItem('token');
    if(profileLocalStorage){
        req.headers.authorization = `Bearer ${JSON.parse(profileLocalStorage)?.token}`
    }
    return req;
})

export const getClasses = ()=> API.get(`/api/classes`);
export const createClasses = (data)=>API.post(`/api/classes`,data);
export const deleteClasses = (id)=>API.delete(`/api/classes/${id}`);
export const updateClasses = (id, data )=> API.patch(`/api/classes/${id}`,data);

export const signIn = (data)=> API.post(`/api/auth/signin`,data)
export const signUp = (data)=> API.post(`/api/auth/signup`,data)