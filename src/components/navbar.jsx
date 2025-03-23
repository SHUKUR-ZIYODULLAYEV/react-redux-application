import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../constants'

function Navbar() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
      <Link to={'/'} >
        <div className='w-150'>
            <img src={logo} width={'100%'} alt="" />
        </div>
      </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link className="me-3 py-2 link-body-emphasis text-decoration-none" to={'/login'}>Login</Link>
        <Link className="me-3 py-2 link-body-emphasis text-decoration-none" to={'/registr'}>Registr</Link>
      </nav>
    </div>
  )
}

export default Navbar
