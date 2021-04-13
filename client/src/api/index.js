import axios from 'axios';
let API_URL='';
if(process.env.NODE_ENV!=='production'){
    API_URL=process.env.REACT_APP_API_URL;
}

export const getClasses = ()=> axios.get(`${API_URL}/api/classes`);
export const createClasses = (data)=>axios.post(`${API_URL}/api/classes`,data);