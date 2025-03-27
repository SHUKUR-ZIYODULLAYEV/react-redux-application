import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logo } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../helpers/persistance-storage'
import { logout } from '../slice/auth'

function Navbar() {
  const {loggedIn, user} = useSelector(state => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logoutHendler = () => {
    dispatch(logout())
    removeItem('token')
    navigate('/')
    window.location.reload()
  }
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
              <Link to={'/create-article'} className="me-3 py-2 text-dark text-decoration-none" >Create article</Link>
              <button className='btn btn-outline-danger' onClick={logoutHendler}  >Logout</button>
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
