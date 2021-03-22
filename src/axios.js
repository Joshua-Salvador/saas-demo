import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5000/yektopro-347fb/asia-east2/api',
    headers: {
        Authorization: localStorage.getItem('token')
    }
})

axios.interceptors.request.use((req) => {
    req.headers.Authorization = localStorage.getItem('token')
    return req
})

export default instance