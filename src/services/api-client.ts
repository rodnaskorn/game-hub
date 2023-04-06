import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '389c799c82124e168870d323800cd4ff'
    }
})