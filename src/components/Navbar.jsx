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
    <a className="navbar-brand" href="#"><img src="IMDB_Logo_2016.svg.png" height={40} /></a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
  <a
    className="nav-link dropdown-toggle"
    href="#"
    id="navbarDarkDropdownMenuLink"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Explore
  </a>
  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
    <li><a className="dropdown-item" href="#">Popular</a></li>
    <li><a className="dropdown-item" href="#">Now Playing</a></li>
    <li><a className="dropdown-item" href="#">Upcoming</a></li>
    <li><a className="dropdown-item" href="#">Top Rated</a></li>
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
   <li><a className="dropdown-item" href="#">Action</a></li>
<li><a className="dropdown-item" href="#">Adventure</a></li>
<li><a className="dropdown-item" href="#">Animation</a></li>
<li><a className="dropdown-item" href="#">Comedy</a></li>
<li><a className="dropdown-item" href="#">Crime</a></li>
<li><a className="dropdown-item" href="#">Documentary</a></li>
<li><a className="dropdown-item" href="#">Drama</a></li>
<li><a className="dropdown-item" href="#">Family</a></li>
<li><a className="dropdown-item" href="#">Fantasy</a></li>
<li><a className="dropdown-item" href="#">History</a></li>
<li><a className="dropdown-item" href="#">Horror</a></li>
<li><a className="dropdown-item" href="#">Music</a></li>
<li><a className="dropdown-item" href="#">Mystery</a></li>
<li><a className="dropdown-item" href="#">Romance</a></li>
<li><a className="dropdown-item" href="#">Science Fiction</a></li>
<li><a className="dropdown-item" href="#">Thriller</a></li>
<li><a className="dropdown-item" href="#">TV Movie</a></li>
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
