import React, { useState } from 'react'
import { Input } from '../ui'
import { logo } from '../constants'

function Registr() { 
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className='text-center mt-5' >
      <main className="form-signin w-25 m-auto">
        <form>
          <img className="mb-4" src={logo} alt="" width="72" height="57"/>
          <h1 className="h3 mb-3 fw-normal">Please registr</h1>
          <Input setState={setName} state={name} type='text' id='floatingInput' placeholder='Username' label='Username' />
          <Input setState={setEmail} state={email} type='email' id='floatingInput' placeholder='name@example.com' label='Email address' />
          <Input setState={setPassword} state={password} type='password' id='floatingPassword' placeholder='Password' label='Password' />
          <button className="btn btn-lg btn-primary w-100 mt-2" type="submit">Registr</button>
        </form>
      </main>
    </div>
  )
}

export default Registr
