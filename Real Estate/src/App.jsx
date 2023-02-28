import { useState } from 'react'
import Header from './components/layout/Header'
import { CustomRoutes } from './routes';
import {createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Footer from './components/layout/Footer';

const router = createBrowserRouter(
  createRoutesFromElements(CustomRoutes())
);


function App() {

  return (
    <>
      <Header/>
      <div className='' style={{ minHeight: "90vh"}}>
        <RouterProvider
          router={router}
        />
      </div>
      <Footer/>
    </>
  )
}

export default App
