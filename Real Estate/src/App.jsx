import { useState, useEffect, useRef } from 'react'
import { CustomRoutes } from './routes';
import {BrowserRouter, Routes} from 'react-router-dom';
import { useImmerReducer } from 'use-immer';

import DispatchContext from './context/DispatchContext';
import StateContext from './context/StateContext';
import MobileNav from './components/layout/MobileNav';


const intiialState = {
  userUsername: localStorage.getItem('userUsername'),
  userEmail: localStorage.getItem('userEmail'),
  userId: localStorage.getItem('userId'),
  userToken: localStorage.getItem('userToken'),
  userisLoggedIn: false,
  mobileState: false
}

function App() {

    const reducerFunction = (draft, action) => {
      switch(action.type){
        case 'catchToken':
          draft.userToken = localStorage.setItem('userToken', action.token)
          break;
        case 'getUserInfo':
          draft.userUsername = action.username
          draft.userEmail = action.email
          draft.userId = action.id
          draft.userisLoggedIn = true
          break;
        case 'logout':
          localStorage.clear()
          draft.userisLoggedIn = false
          draft.userToken = ""
          break;
        case 'toggleNav':
          draft.mobileState = !draft.mobileState
          break;
        default:
          ""
      }
    }
    const mobileNav =  useRef();
    const [state, dispatch] = useImmerReducer(reducerFunction, intiialState)

    
    const toggleMobileNav = () => {
      console.log("I was clicked")
      if (state.mobileState){
        mobileNav.current.classList.add("mobile-show")
        mobileNav.current.classList.remove("translate-x-full")
      }
      else{
        mobileNav.current.classList.remove("mobile-show")
        mobileNav.current.classList.add("translate-x-full")
      }
    }
    
    useEffect(()=>{
      if (state.userisLoggedIn) {
        localStorage.setItem('userId', state.userId)
        localStorage.setItem('userEmail', state.userEmail)
        localStorage.setItem('userUsername', state.userUsername)
      }
      else {
        localStorage.getItem('userId')
        localStorage.getItem('userEmail')
        localStorage.getItem('userUsername')
      }
    },[state.userisLoggedIn])

    useEffect(()=>{
      toggleMobileNav()
    },[state.mobileState])

    return (
      <>  
          <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
              <BrowserRouter>
                <div className={state.mobileState ? "h-screen overflow-hidden" : "overflow-x-hidden" }>
                  <div className='relative translate-x-full transition-transform duration-700 z-[100] md:hidden' ref={mobileNav}>
                    <MobileNav/>
                  </div>
                  <div className='' style={{ minHeight: "100vh"}}>
                    <Routes>
                    {...CustomRoutes()}
                    </Routes>
                  </div>
                </div>
              </BrowserRouter>
            </DispatchContext.Provider>
          </StateContext.Provider>
      </>
    )
}

export default App
