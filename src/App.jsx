import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Detail from './pages/Detail';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:(
        <>
        <Homepage/>
        </>
      )
    },
    {
      path:'/detail',
      element:(
        <>
        <Detail/>
        </>
      )
    }
  ])

  return (
   <div>
    <Navbar/>
 <RouterProvider  router={router}/>

   </div>
  

    
  )
}

export default App
