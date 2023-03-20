import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import DispatchContext from '../../context/DispatchContext'

const MobileNav = () => {
    const GlobalDispatch = useContext(DispatchContext)

    const closeMobile = (e) => {
        if (e.target.classList.contains("drop-down__item")){
            toggleNav()
        }
    }

    const toggleNav = () => {
        GlobalDispatch({type: "toggleNav"})
    }

    return (
        <nav>
            <div className="">
                <div className="h-screen overflow-y-scroll peer absolute top-0 left-0 z-[100] w-full font-inter bg-white md:hidden md:z-0 shadow-xl" onClick={(e)=>{closeMobile(e)}}>
                    <div className="px-4 pt-2 pb-8 flex justify-between items-center">
                        <Link to="/" className="">
                            <p className="w-24 drop-down__item">Logo</p>
                        </Link>
                        <div className="" onClick={()=> {toggleNav()}}>
                            <img src="./src/assets/images/close.svg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MobileNav