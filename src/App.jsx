import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Detail from './pages/Detail';
import ExploreNowPlaying from './pages/ExploreNowPlaying'
import ExploreUpcoming from './pages/ExploreUpcoming'
import ExploreTopRated from './pages/ExploreTopRated'
import ExplorePopular from './pages/ExplorePopular'


import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Popular from './components/Popular';

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
    },
    {
      path:'/explore/popular',
      element:(
        <>
        <ExplorePopular/>
        </>
      )
    },
     {
      path:'/explore/upcoming',
      element:(
        <>
        <ExploreUpcoming/>
        </>
      )
     },
     {
      path:'/explore/toprated',
      element:(
        <>
        <ExploreTopRated/>
        </>
      )
     },
     {
      path:'/explore/nowplaying',
      element:(
        <>
        <ExploreNowPlaying/>
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
