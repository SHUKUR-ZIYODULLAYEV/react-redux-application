import React, { useState } from 'react'
import ArticleForm from './article-form'
import ArticleService from '../service/article'
import { useDispatch } from 'react-redux'
import { postArticleFailure, postArticleStart, postArticleSuccess } from '../slice/article'
import { useNavigate } from 'react-router-dom'

function CreateArticle() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [body, setBody] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formSubmit = async (e) => {
    e.preventDefault()
    const article = {
        title,
        description,
        body
    }
    dispatch(postArticleStart())
    try {
        const response = await ArticleService.postArticle(article)
        dispatch(postArticleSuccess(response.article))
        navigate('/')
    } catch (error) {
        dispatch(postArticleFailure(error.response.data.errors))
    }
}

  const formProps = {
    title,
    setTitle,
    description,
    setDescription,
    body,
    setBody,
    formSubmit
  }
  return (
    <div className='tex-t-center'>
        <h1 className='text-center'>Create Article</h1>
        <div className='w-75 mx-auto'>
            <ArticleForm {...formProps}/>
        </div>
    </div>
  )
}

export default CreateArticle
