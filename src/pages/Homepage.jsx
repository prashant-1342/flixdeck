import React,{useState,useEffect} from 'react'
import Movies from '../components/Movies'
import Nowplaying from '../components/Nowplaying'
import Popular from '../components/Popular'
import Upcoming from '../components/Upcoming'
import TopRated from '../components/TopRated'
import Footer from '../components/Footer'
import SearchPage from '../components/SearchPage'


const Homepage = ({searchQuery}) => {
  return (
  <>
    {searchQuery ? (
      <SearchPage  searchQuery={searchQuery} />
    ) : (
      <div className="pagescontainer">
        <Movies searchQuery={searchQuery} />
        <Popular />
        <Nowplaying />
        <Upcoming />
        <TopRated />
        <Footer />
      </div>
    )}
  </>
);
}

export default Homepage
