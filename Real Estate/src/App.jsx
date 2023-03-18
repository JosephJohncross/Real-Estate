import { useState, useEffect } from 'react'
import { CustomRoutes } from './routes';
import {BrowserRouter, Routes} from 'react-router-dom';
import { useImmerReducer } from 'use-immer';

import DispatchContext from './context/DispatchContext';
import StateContext from './context/StateContext';


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
    default:
      ""
  }
}

const intiialState = {
  userUsername: localStorage.getItem('userUsername'),
  userEmail: localStorage.getItem('userEmail'),
  userId: localStorage.getItem('userId'),
  userToken: localStorage.getItem('userToken'),
  userisLoggedIn: false
}

function App() {

    const [state, dispatch] = useImmerReducer(reducerFunction, intiialState)

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

    return (
      <>  
          <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
              <BrowserRouter>
                <div className='' style={{ minHeight: "100vh"}}>
                  <Routes>
                  {...CustomRoutes()}
                  </Routes>
                </div>
              </BrowserRouter>
            </DispatchContext.Provider>
          </StateContext.Provider>
      </>
    )
}

export default App
