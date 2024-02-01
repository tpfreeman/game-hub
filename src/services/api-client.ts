import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '743175ebdc8246e4901e921813a511f6'
    }
})