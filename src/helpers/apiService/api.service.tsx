import axios from 'axios';



export function get(url:string){
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    return axios.get(url);
}

export function post(url:string, body:{}){
    return axios.post(url, body); 
}