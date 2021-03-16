import axios from 'axios';


export const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});
instance.defaults.headers.common['Authorization'] = 'SomeToken from axios.js';


let requestInterceptor = instance.interceptors.request.use(request => {
    console.log('request', request);
    axios.interceptors.request.eject(requestInterceptor);
    return request;
  }, (error) => {
    return Promise.reject(error);
  })
  
  let responseInterceptor = instance.interceptors.response.use(response => {
    console.log('response', response);
    axios.interceptors.response.eject(responseInterceptor);
    return response;
  }, (error) => {
    return Promise.reject(error);
  })




export const firebaseInstance = axios.create({
    baseURL: 'https://pizzaapp-2fbe3-default-rtdb.firebaseio.com/'
});

