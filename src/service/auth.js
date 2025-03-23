import axios from './api'
const AuthServices = {
    async userRegister(user){
        const {data} = await axios.post('/users', {user})
        
        return data;
    },
    async userLogin(user){
        const {data} = await axios.post('/users/login', {user})
        
        return data;
    },
    async getUser(){
        const {data} = await axios.get('/user')
        
        return data;
    },
//   login: async (email, password) => {
//     try {
//       const response = await axios.post('/auth/login', { email, password })
//       return response.data
//     } catch (error) {
//       return error.response.data
//     }
//   },
//   registr: async (name, email, password) => {
//     try {
//       const response = await axios.post('/auth/registr', { name, email, password })
//       return response.data
//     } catch (error) {
//       return error.response.data
//     }
//   },
//   logout: async () => {
//     try {
//       const response = await axios.post('/auth/logout')
//       return response.data
//     } catch (error) {
//       return error.response.data
//     }
//   },
}
export default AuthServices