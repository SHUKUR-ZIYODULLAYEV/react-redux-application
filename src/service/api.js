import axios from 'axios'
import { getItem } from '../helpers/persistance-storage'
axios.defaults.baseURL = 'http://localhost:3000/api'
axios.interceptors.request.use(
    config => {
        const token = getItem('token')
        const authorizationToken = token ? `Token ${token}` : ''
        console.log(authorizationToken);
        
        config.headers.Authorization = authorizationToken
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
export default axios