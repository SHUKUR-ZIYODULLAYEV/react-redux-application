import React, { useState } from 'react'
import { Input } from '../ui'
import { logo } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { registrUserStart } from '../slice/auth'

function Registr() { 
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const {isLoading} = useSelector(state => state.auth)

  const loginHandler = (e) => {
    e.preventDefault()
    dispatch(registrUserStart())
  }
  return (
    <div className='text-center mt-5' >
      <main className="form-signin w-25 m-auto">
        <form>
          <img className="mb-4" src={logo} alt="" width="72" height="57"/>
          <h1 className="h3 mb-3 fw-normal">Please registr</h1>
          <Input setState={setName} state={name} type='text' id='floatingInput' placeholder='Username' label='Username' />
          <Input setState={setEmail} state={email} type='email' id='floatingInput' placeholder='name@example.com' label='Email address' />
          <Input setState={setPassword} state={password} type='password' id='floatingPassword' placeholder='Password' label='Password' />
          <button className="btn btn-lg btn-primary w-100 mt-2" disabled={isLoading} onClick={loginHandler} type="submit">
            {isLoading ? 'Loading...' : 'Registr'}
          </button>
        </form>
      </main>
    </div>
  )
}

export default Registr
