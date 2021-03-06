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


export const getClasses = (page,cancel)=> API.get(`/api/classes?page=${page}&limit=9`,{cancelToken: cancel});
export const myClasses = (page,cancel)=> API.get(`/api/classes/myclasses?page=${page}&limit=9`,{cancelToken: cancel});
export const userClasses = (page,cancel,username)=> API.get(`/api/classes/user/${username}?page=${page}&limit=9`,{cancelToken:cancel});
export const createClasses = (data)=>API.post(`/api/classes`,data,{ headers:{ 'Content-Type':'multipart/form-data'}});
export const deleteClasses = (id)=>API.delete(`/api/classes/${id}`);
export const updateClasses = (id, data )=> API.patch(`/api/classes/${id}`,data,{ headers: { 'Content-Type':'multipart/form-data'}});
export const likeClasses = (id)=> API.patch(`api/classes/${id}/like`);

export const signIn = (data)=> API.post(`/api/auth/signin`,data)
export const signUp = (data)=> API.post(`/api/auth/signup`,data)

export const editProfile = (data)=> API.patch(`/api/users/edit/profile`,data);
export const editEmail = (data)=> API.patch(`api/users/edit/email`,data);
export const editSecurity = (data)=> API.patch(`api/users/edit/security`,data);
export const editAccount = (data) => API.delete(`api/users/edit/account/delete`,{ data:data});