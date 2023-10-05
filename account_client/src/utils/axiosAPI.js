import axios from 'axios';

const fetchObj = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 2000,
  withCredentials: true,
})

fetchObj.interceptors.request.use(function(config){
  if(!document.cookie){
    location.replace('/login')
  }
  return config;
}, function(err){
  return Promise.reject(err)
})

fetchObj.interceptors.response.use(function(response){
  return response.data;
}, function(err){
  return Promise.reject(err)
})

export default fetchObj;
