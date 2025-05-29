// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav  className="navbar navbar-dark bg-dark navbar-expand-lg ">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link to='/' className="navbar-brand" ><img src="/IMDB_Logo_2016.svg.png" height={40} /></Link>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
  <a
    className="nav-link dropdown-toggle"
   
    id="navbarDarkDropdownMenuLink"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Explore
  </a>
  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
    <li><Link className="dropdown-item" to="/explore/popular"  >Popular</Link></li>
    <li><Link className="dropdown-item" to="/explore/nowplaying" >Now Playing</Link></li>
    <li><Link className="dropdown-item" to="/explore/upcoming" >Upcoming</Link></li>
    <li><Link className="dropdown-item" to="/explore/toprated" >Top Rated</Link></li>
  </ul>
</li>
        <li className="nav-item dropdown">
  <a
    className="nav-link dropdown-toggle"
    href="#"
    id="navbarDarkDropdownMenuLink"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Genres
  </a>
 <ul className="genredropdown dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
  <li><Link className="dropdown-item" to="/genre/action">Action</Link></li>
  <li><Link className="dropdown-item" to="/genre/adventure">Adventure</Link></li>
  <li><Link className="dropdown-item" to="/genre/animation">Animation</Link></li>
  <li><Link className="dropdown-item" to="/genre/comedy">Comedy</Link></li>
  <li><Link className="dropdown-item" to="/genre/crime">Crime</Link></li>
  <li><Link className="dropdown-item" to="/genre/documentary">Documentary</Link></li>
  <li><Link className="dropdown-item" to="/genre/drama">Drama</Link></li>
  <li><Link className="dropdown-item" to="/genre/family">Family</Link></li>
  <li><Link className="dropdown-item" to="/genre/fantasy">Fantasy</Link></li>
  <li><Link className="dropdown-item" to="/genre/history">History</Link></li>
  <li><Link className="dropdown-item" to="/genre/horror">Horror</Link></li>
  <li><Link className="dropdown-item" to="/genre/music">Music</Link></li>
  <li><Link className="dropdown-item" to="/genre/mystery">Mystery</Link></li>
  <li><Link className="dropdown-item" to="/genre/romance">Romance</Link></li>
  <li><Link className="dropdown-item" to="/genre/sciencefiction">Science Fiction</Link></li>
  <li><Link className="dropdown-item" to="/genre/thriller">Thriller</Link></li>
  <li><Link className="dropdown-item" to="/genre/tvmovie">TV Movie</Link></li>
</ul>
</li>

        
        
      </ul>
      <form className="d-flex" role="search">
        <input  className="form-control bg-dark text-white me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success " type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  
    </>
  );
};

export default Navbar;
