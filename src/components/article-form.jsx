import React, { use } from 'react'
import { Input, Loader, TextArea } from '../ui'
import { useSelector } from 'react-redux'

function ArticleForm(props) {
    const { isLoading } = useSelector(state => state.article)
    const { title, setTitle, description, setDescription, body, setBody, formSubmit } = props
    
  return (
    <>
    {isLoading && <Loader />}
    <form onSubmit={formSubmit} >
        <Input type='text' id='titleID' placeholder='Some title Text!' label='Title' state = {title} setState={setTitle} />
        <TextArea type='text' id='descriptionID' placeholder='Some description Text!' label='Description' state = {description} setState={setDescription} />
        <TextArea type='text' id='bodyID' placeholder='Some body Text!' label='Body' state = {body} setState={setBody} height={"300px"} />
        <button className="btn btn-lg btn-primary w-100 mt-2" type="submit">
            {isLoading ? "Loading..." : "Create"}
        </button>
    </form>
    </>
  )
}

export default ArticleForm
