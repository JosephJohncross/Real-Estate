import React, {useContext, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Button from '../common/Button'
import StateContext from '../../context/StateContext'
import DispatchContext from '../../context/DispatchContext'
import { logout } from '../../services/https-request'
import { toggleUserDetailDropDown } from '../../services/https-request'

const Header = () =>  {
    
    const GlobalState = useContext(StateContext)
    const GlobalDispatch = useContext(DispatchContext)
    const userDropDown = useRef()
    
    const toggleNav = () => {
        GlobalDispatch({type: 'toggleNav'})
    }

    return (
        <>
            <div className='bg-white sticky top-0 z-20 py-3 md:py-0'>
                <div className='container__limiter md:h-20 flex items-center font-work text-lg text-shade10'>
                    <div className='flex w-1/2 font-semibold justify-between font-didact'>
                        <p className=''>Logo</p>
                        <div className="hidden md:flex space-x-12">
                            <Link to='/'>Home</Link>
                            <Link to='/listing'>Listing</Link>
                            <Link to='/login'>Agencies</Link>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 font-semibold flex justify-end'>
                    
                    {GlobalState.userisLoggedIn ?
                                <div className='relative'>
                                    <button id="dropdownDefaultButton"  className="rounded-full px-4 py-4 border-shade13 border outline-none focus:ring-2 focus:ring-shade13" type="button"  onClick={(e)=>{toggleUserDetailDropDown(userDropDown)}}>
                                        <img src='' alt=''/>
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="dropdown" ref={userDropDown} className="absolute top-12 right-0 z-50 hidden bg-white divide-y divide-gray-100 rounded-lg w-44 font-work shadow-shadow1">
                                        <p className='py-4 font-semibold text-sm text-center capitalize'>{GlobalState.userUsername}</p>
                                        <ul className="py-2 text-sm text-shade13" aria-labelledby="dropdownDefaultButton">
                                            <li className=''>
                                                <p  className="block px-4 py-2 hover:bg-gray-100 text-center" onClick={(e)=>{toggleUserDetailDropDown(userDropDown)}}>Profile</p>
                                            </li>                                        
                                            <li>
                                                <p className="block px-4 py-2 hover:bg-gray-100 text-center" onClick={(e)=>{logout(GlobalDispatch); toggleUserDetailDropDown(userDropDown)}}>Sign out</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            :                            
                            <>
                                <Link to="/add-listing" className="hidden md:block">
                                    <Button shade="bordered" content="Add Property"/>
                                </Link>
                                <Link to="/login" className="hidden md:block">
                                    <Button shade="white" content="Login"/>
                                </Link>
                                <Link to="/register" className="hidden md:block">
                                    <Button shade="bordered" content="Sign up"/>
                                </Link>
                            </> 
                    }
                    <div id="hamburger" className="flex items-center justify-center cursor-pointer md:hidden pl-4">
                        <div className="md:hidden" onClick={()=> {toggleNav()}}>
                                <span className="block bg-shade13 mb-1 h-[2px] w-5 lg:hidden"></span>
                                <span className="block bg-shade13 mb-1 h-[2px] w-5 lg:hidden"></span>
                                <span className="block bg-shade13 mb-1 h-[2px] w-5 lg:hidden"></span>
                        </div>
                    </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header