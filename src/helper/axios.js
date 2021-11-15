import axios from 'axios';
const apiPost=(requestObject)=>{
    return axios({
        method: 'post',
        url: requestObject.url,
        data: requestObject.data,
    })
}

const apiGet=(requestObject)=>{
    return axios({
        method: 'get',
        url: requestObject.url,
        headers: requestObject.headers
    })
}
export default {apiPost, apiGet};