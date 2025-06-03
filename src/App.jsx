import { useState } from 'react'
import React from 'react';
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
import GenreAction from './pages/GenreAction';
import GenreAdventure from './pages/GenreAdventure';
import GenreAnimation from './pages/GenreAnimation';
import GenreComedy from './pages/GenreComedy';
import GenreCrime from './pages/GenreCrime';
import GenreDocumentry from './pages/GenreDocumentry';
import GenreDrama from './pages/GenreDrama';
import GenreFantasy from './pages/GenreFantasy';
import GenreFamily from './pages/GenreFamily';
import GenreHistory from './pages/GenreHistory';
import GenreHorror from './pages/GenreHorror';
import GenreMusic from './pages/GenreMusic';
import GenreMystery from './pages/GenreMystery';
import GenreRomance from './pages/GenreRomance';
import GenreScienceFiction from './pages/GenreScienceFiction';
import GenreThriller from './pages/GenreThriller';
import GenreTVMovie from './pages/GenreTVMovie';

import { createBrowserRouter,RouterProvider,BrowserRouter,Routes,Route } from 'react-router-dom';
import Popular from './components/Popular';

function App() {
const [searchQuery, setSearchQuery] = useState('');


  return (
      <BrowserRouter>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/explore/popular" element={<ExplorePopular searchQuery={searchQuery} />} />
        <Route path="/explore/upcoming" element={<ExploreUpcoming searchQuery={searchQuery} />} />
        <Route path="/explore/toprated" element={<ExploreTopRated searchQuery={searchQuery} />} />
        <Route path="/explore/nowplaying" element={<ExploreNowPlaying  searchQuery={searchQuery}/>} />
         <Route path="/genre/action" element={<GenreAction searchQuery={searchQuery} />} />
  <Route path="/genre/adventure" element={<GenreAdventure searchQuery={searchQuery} />} />
  <Route path="/genre/animation" element={<GenreAnimation searchQuery={searchQuery} />} />
  <Route path="/genre/comedy" element={<GenreComedy searchQuery={searchQuery} />} />
  <Route path="/genre/crime" element={<GenreCrime searchQuery={searchQuery} />} />
  <Route path="/genre/documentary" element={<GenreDocumentry searchQuery={searchQuery} />} />
  <Route path="/genre/drama" element={<GenreDrama searchQuery={searchQuery} />} />
  <Route path="/genre/fantasy" element={<GenreFantasy searchQuery={searchQuery} />} />
  <Route path="/genre/family" element={<GenreFamily searchQuery={searchQuery} />} />
  <Route path="/genre/history" element={<GenreHistory searchQuery={searchQuery} />} />
  <Route path="/genre/horror" element={<GenreHorror searchQuery={searchQuery} />} />
  <Route path="/genre/music" element={<GenreMusic searchQuery={searchQuery} />} />
  <Route path="/genre/mystery" element={<GenreMystery searchQuery={searchQuery} />} />
  <Route path="/genre/romance" element={<GenreRomance searchQuery={searchQuery} />} />
  <Route path="/genre/sciencefiction" element={<GenreScienceFiction searchQuery={searchQuery} />} />
  <Route path="/genre/thriller" element={<GenreThriller searchQuery={searchQuery} />} />
  <Route path="/genre/tvmovie" element={<GenreTVMovie searchQuery={searchQuery} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
