import React, { use, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import {Main, Login, Registr, Navbar} from './components/index'
import AuthServices from './service/auth'
import { useDispatch } from 'react-redux'
import { signUserSuccess } from './slice/auth'

function App() {
  const dispatch = useDispatch()
  const getUser = async () => {
    try {
      const response = await AuthServices.getUser()
      dispatch(signUserSuccess(response.user))
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      getUser()
    }
  }, [])
  return (
    <div>
      <Navbar />
      <Routes >
        <Route path="/" element={<Main/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/registr" element={<Registr />} />
      </Routes>
    </div>
  )
}

export default App
