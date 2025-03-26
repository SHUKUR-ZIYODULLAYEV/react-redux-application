import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getArticleDetailStart, getArticleDetailSuccess } from '../slice/article'
import ArticleService from '../service/article'
import { useDispatch } from 'react-redux'

function ArticleDetail() {
    const {slug} = useParams()
    const dispatch = useDispatch()
    const getArticleDetail = async () => {
        dispatch(getArticleDetailStart())
        try {
            const response = await ArticleService.getArticleDetail(slug)
            dispatch(getArticleDetailSuccess(response.article))
        } catch (error) {
            dispatch(getArticleDetailFailure(error.response.data.errors))
        }
    }
    useEffect(() => {
        getArticleDetail()
    }, [slug])
  return (
    <div>
      ArticleDetail
    </div>
  )
}

export default ArticleDetail
