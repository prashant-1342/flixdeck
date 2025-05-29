import React from 'react'
import Movies from '../components/Movies'
import Nowplaying from '../components/Nowplaying'
import Popular from '../components/Popular'
import Upcoming from '../components/Upcoming'
import TopRated from '../components/TopRated'
import Footer from '../components/Footer'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'




const Homepage = () => {
  const router = createBrowserRouter([
    {
      path:'explore/popular',
      element:(
        <>
        
        </>
      )
    }
  ])
  return (
    <div className='pagescontainer'>
      <Movies/>
      <Popular/>
      <Nowplaying/>
      <Upcoming/>
      <TopRated/>
      <Footer/>
      
    </div>
  )
}

export default Homepage
