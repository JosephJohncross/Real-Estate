import { useState } from 'react'
import Header from './components/layout/Header'
import { CustomRoutes } from './routes';
import {BrowserRouter, createBrowserRouter, createRoutesFromElements, RouterProvider, Routes} from 'react-router-dom';
import Footer from './components/layout/Footer';

const router = createBrowserRouter(
  createRoutesFromElements(CustomRoutes())
);


function App() {

  return (
    <>
      <div className='' style={{ minHeight: "90vh"}}>
        <BrowserRouter>
          <Header/>
          <Routes>
            {...CustomRoutes()}
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
