import { useState } from 'react'
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
      draft.userUsername = localStorage.setItem('userUsername', action.username)
      draft.userEmail = localStorage.setItem('userEmail', action.email)
      draft.userId = localStorage.setItem('userId', action.id)
      draft.userisLoggedIn = localStorage.setItem('userisLoggedIn', true)
      break;
    case 'logout':
      localStorage.clear()
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
  userisLoggedIn: localStorage.getItem('userUsername') ? true : false
}

function App() {

    const [state, dispatch] = useImmerReducer(reducerFunction, intiialState)

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
