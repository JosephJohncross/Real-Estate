import React from 'react'
import { Link } from 'react-router-dom'

const Header = () =>  {
  return (
    <>
        <Link to='/'>Home</Link>
        <Link to='/listing'>Listing</Link>
        <Link to='/login'>Login</Link>
    </>
  )
}

export default Header