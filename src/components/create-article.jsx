import React, { useState } from 'react'
import { Input, TextArea } from '../ui'

function CreateArticle() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [body, setBody] = useState('')
  return (
    <div className='tex-t-center'>
        <h1 className='text-center'>Create Article</h1>
        <div className='w-75 mx-auto'>
            <form>
                <Input type='text' id='titleID' placeholder='Some title Text!' label='Title' state = {title} setState={setTitle} />
                <TextArea type='text' id='descriptionID' placeholder='Some description Text!' label='Description' state = {description} setState={setDescription} />
                <TextArea type='text' id='bodyID' placeholder='Some body Text!' label='Body' state = {body} setState={setBody} height={"300px"} />
                <button className="btn btn-lg btn-primary w-100 mt-2" type="submit">
                    Create
                </button>
            </form>
        </div>
      
    </div>
  )
}

export default CreateArticle
