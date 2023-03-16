import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../common/Button'

const Header = () =>  {
  return (
    <>
        <div className='bg-white sticky top-0 z-[2000]'>
            <div className='container__limiter md:h-20 flex items-center font-work text-lg text-shade10'>
                <div className='flex w-1/2 font-semibold justify-between'>
                    <p className=''>Logo</p>
                    <div className="flex space-x-12">
                        <Link to='/'>Home</Link>
                        <Link to='/listing'>Listing</Link>
                        <Link to='/login'>Agencies</Link>
                    </div>
                </div>
                <div className='w-1/2 font-semibold flex justify-end'>
                    <Link to="/login">
                        <Button shade="white" content="Login"/>
                    </Link>
                    <Link to="/register">
                        <Button shade="black" content="Sign up"/>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header