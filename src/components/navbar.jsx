import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../constants'
import { useSelector } from 'react-redux'

function Navbar() {
  const {loggedIn, user} = useSelector(state => state.auth)
  return (
    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
      <Link to={'/'} >
        <div className='w-150'>
            <img src={logo} width={'100%'} alt="" />
        </div>
      </Link>
      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        {
          loggedIn ? (
            <>
              <p  className="me-3 py-2 m-0   text-dark text-decoration-none">{user.username}</p>
              <button className='btn btn-outline-danger' >Logout</button>
              {/* <Link to={'/'} className="me-3 py-2 text-dark text-decoration-none" >Home</Link>
              <Link to={'/profile'} className="me-3 py-2 text-dark text-decoration-none" >Profile</Link>
              <Link to={'/logout'} className="me-3 py-2 text-dark text-decoration-none" >Logout</Link> */}
            </>
          ) : (
            <>
              <Link to={'/login'} className="me-3 py-2 text-dark text-decoration-none" >Login</Link>
              <Link to={'/registr'} className="me-3 py-2 text-dark text-decoration-none" >Registr</Link>
            </>
          )
        }
      </nav>
    </div>
  )
}

export default Navbar
