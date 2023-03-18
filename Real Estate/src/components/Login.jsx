import React, {useEffect, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useImmerReducer } from 'use-immer'
import { signIn, getUserDetails } from '../services/https-request'
import DispatchContext from '../context/DispatchContext'

const reducerFunction = (draft, action) => {
    switch(action.type){
        case 'usernameChange':
            draft.usernameValue = action.username
            break;
        case 'passwordChange':
            draft.passwordValue = action.password
            break
        case 'catchToken':
            draft.tokenValue = action.token
            break;
        default:
            "Selected action type not found"
    }
}

const initialState = {
    usernameValue: '',
    passwordValue: '',
    tokenValue: '',
}


function Login() {
    
    const [state, dispatch] = useImmerReducer(reducerFunction, initialState)
    const GlobalDispatch = useContext(DispatchContext)
    const navigate = useNavigate()
    
    useEffect(()=>{
        if (state.tokenValue){
            getUserDetails(state.tokenValue, GlobalDispatch)
                console.log("Global user loggeIn is working")
                navigate("/")
        }
    },[state.tokenValue])

    return (
        <section className='bg-[url("/src/assets/images/register.jpg")] h-screen w-screen bg-contain bg-no-repeat bg-right before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-black/30 before:bg-gradient-to-r from-blue-600 to-black/50 py-10'>
            <div className='container__limiter flex items-center h-full'>
                <div className='w-full md:w-2/3 bg-white/10 backdrop-blur-md rounded-2xl shadow-shadow1 px-10 py-12'>
                    <Link to={"/"} className='font-didact text-2xl font-semibold text-white'>Logo</Link>
                    <div className='mt-12'>
                        <div className='flex items-end space-x-2'>
                            <p className='text-4xl text-white font-bold'>Sign In </p>
                            <span className='w-3 h-3 rounded-full bg-blue-700 block'></span>
                        </div>
                        <p className='capitalize text-gray-200 mt-3'>Don't have an account? <Link to="/register" className='text-green-500'>Sign up</Link></p>

                        <form className='mt-10 flex flex-col space-y-4' onSubmit={(e)=>{signIn(e, state.usernameValue, state.passwordValue, dispatch, GlobalDispatch)}}>
                            <input type="text" name="username" placeholder="Username" className="border p-4 md:w-2/3 border-transparent rounded-md focus:border-blue-200 focus:ring-blue-200 focus:ring-2 placeholder:font-inter placeholder:text-sm placeholder:ipad:text-base outline-none" onChange={(e)=>{dispatch({type: "usernameChange", username: e.target.value})}}/>
                            <input type="password" name="password" placeholder="Password" className="border p-4 md:w-2/3 border-transparent rounded-md focus:border-blue-200 focus:ring-2 focus:ring-blue-200 placeholder:font-inter placeholder:text-sm placeholder:ipad:text-base outline-none" onChange={(e)=>{dispatch({type: "passwordChange", password: e.target.value})}}/>
                            <div className=''>
                                <input type='submit' value="Sign In" className='bg-green-500 text-white rounded-full mt-10 px-10 py-3 small:py-3 small:px-10 w-full small:w-max md:w-max text-sm font-semibold hover:bg-green-600 hover:shadow-md transition-all outline-none focus:ring-2 focus:ring-green-400'/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='md:w-1/3'></div>
            </div>
        </section>
    )
}

export default Login