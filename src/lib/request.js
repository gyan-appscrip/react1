import axios from 'axios';

const baseURL = 'https://fakestoreapi.com/products/'
export const get=(endpoint)=>{
    return new Promise((resolve, reject) => {
        
        axios.get(baseURL+endpoint)
        .then(res=>resolve(res))
        .catch(err=>reject(err))
    })
}