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


  return (
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/explore/popular" element={<ExplorePopular />} />
        <Route path="/explore/upcoming" element={<ExploreUpcoming />} />
        <Route path="/explore/toprated" element={<ExploreTopRated />} />
        <Route path="/explore/nowplaying" element={<ExploreNowPlaying />} />
         <Route path="/genre/action" element={<GenreAction />} />
  <Route path="/genre/adventure" element={<GenreAdventure />} />
  <Route path="/genre/animation" element={<GenreAnimation />} />
  <Route path="/genre/comedy" element={<GenreComedy />} />
  <Route path="/genre/crime" element={<GenreCrime />} />
  <Route path="/genre/documentary" element={<GenreDocumentry />} />
  <Route path="/genre/drama" element={<GenreDrama />} />
  <Route path="/genre/fantasy" element={<GenreFantasy />} />
  <Route path="/genre/family" element={<GenreFamily />} />
  <Route path="/genre/history" element={<GenreHistory />} />
  <Route path="/genre/horror" element={<GenreHorror />} />
  <Route path="/genre/music" element={<GenreMusic />} />
  <Route path="/genre/mystery" element={<GenreMystery />} />
  <Route path="/genre/romance" element={<GenreRomance />} />
  <Route path="/genre/sciencefiction" element={<GenreScienceFiction />} />
  <Route path="/genre/thriller" element={<GenreThriller />} />
  <Route path="/genre/tvmovie" element={<GenreTVMovie />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
