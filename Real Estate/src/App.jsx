import { useState } from 'react'
import Header from './components/layout/Header'
import { CustomRoutes } from './routes';
import {BrowserRouter, Routes} from 'react-router-dom';
import Footer from './components/layout/Footer';


function App() {

  return (
    <>
        <BrowserRouter>
        <div 
          className='bg-white h-screen'
        >
          <Header/>
          <div className='' style={{ minHeight: "100vh"}}>
            <Routes>
            {...CustomRoutes()}

            </Routes>
          </div>
          <Footer/>
        </div>
        </BrowserRouter>
    </>
  )
}

export default App
