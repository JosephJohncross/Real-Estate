import { useState } from 'react'
import { CustomRoutes } from './routes';
import {BrowserRouter, Routes} from 'react-router-dom';


function App() {

  return (
    <>
        <BrowserRouter>
          <div className='' style={{ minHeight: "100vh"}}>
            <Routes>
            {...CustomRoutes()}

            </Routes>
          </div>
        </BrowserRouter>
    </>
  )
}

export default App
