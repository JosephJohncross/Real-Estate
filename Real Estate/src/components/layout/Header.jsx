import React, {useContext, useRef} from 'react'
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
                    
                    {GlobalState.userisLoggedIn ?
                                <>
                                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="rounded-full px-4 py-4 border-shade13 border outline-none focus:ring-2 focus:ring-shade13" type="button">
                                        <img src='' alt=''/>
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="dropdown" ref={userDropDown} className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg w-44 font-work shadow-shadow1">
                                        <p className='py-4 font-semibold text-sm text-center capitalize'>{GlobalState.userUsername}</p>
                                        <ul className="py-2 text-sm text-shade13" aria-labelledby="dropdownDefaultButton">
                                            <li className=''>
                                                <p  className="block px-4 py-2 hover:bg-gray-100 text-center" onClick={()=>{toggleUserDetailDropDown(userDropDown)}}>Profile</p>
                                            </li>                                        
                                            <li>
                                                <p className="block px-4 py-2 hover:bg-gray-100 text-center" onClick={()=>{logout(GlobalDispatch, GlobalState); toggleUserDetailDropDown(userDropDown)}}>Sign out</p>
                                            </li>
                                        </ul>
                                    </div>
                                </>

                            :                            
                            <>
                                <Link to="/login">
                                <Button shade="white" content="Login"/>
                                </Link>
                                <Link to="/register">
                                    <Button shade="black" content="Sign up"/>
                                </Link>
                            </> 
                    }
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header