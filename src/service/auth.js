import axios from './api'
const AuthServices = {
    async userRegister(user){
        const response = await axios.post('/users', {user})
        
        return response
    },
    async userLogin(){
        // const response = await axios.post('/users/login', { email, password })
    },
    async getUser(){
        // const response = await axios.get('/user')
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