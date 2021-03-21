import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5000/yektopro-347fb/asia-east2/api'
})

export default instance