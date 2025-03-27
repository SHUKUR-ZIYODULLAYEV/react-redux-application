import React, { use, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import {Main, Login, Registr, Navbar, ArticleDetail, CreateArticle} from './components/index'
import AuthServices from './service/auth'
import { useDispatch } from 'react-redux'
import { signUserStart, signUserSuccess } from './slice/auth'
import ArticleService from './service/article'
import { getArticleListFailure, getArticleListSuccess, getArticleListrStart } from './slice/article'

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

  const getArticleList = async () => {
    dispatch(getArticleListrStart())
    try {
      const response = await ArticleService.getArticleList()
      console.log("response", response);
      dispatch(getArticleListSuccess(response.articles))
    } catch (error) {
      console.log("error", error);
      dispatch(getArticleListFailure(error.response.data.errors))
    }
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      getUser()
    }
    getArticleList()
  }, [])
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Routes >
          <Route path="/" element={<Main/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/registr" element={<Registr />} />
          <Route path="/article/:slug" element={<ArticleDetail/>} />
          <Route path="/create-article" element={<CreateArticle/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
