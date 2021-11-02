import axios from 'axios';
const apiPost=(requestObject)=>{
    return axios({
        method: 'post',
        url: requestObject.url,
        data: requestObject.data,
    })
}
export default {apiPost};