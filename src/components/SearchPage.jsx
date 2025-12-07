import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
const backendUrl = import.meta.env.VITE_BACKEND_URL;


const ImageWithLoader = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="image-wrapper">
      {!loaded && <div className="loading-line" />}
      <img
        className="movieimage"
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        style={{ display: loaded ? 'block' : 'none' }}
      />
    </div>
  );
};
const closenavbar = () => {
  const navbar = document.getElementById('navbarTogglerDemo03');
  if (navbar && navbar.classList.contains('show')) {
    const collapseInstance = window.bootstrap.Collapse.getInstance(navbar)
      || new window.bootstrap.Collapse(navbar);
    collapseInstance.hide();
  }
};



const SearchPage = ({ searchQuery,setSearchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(500);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async (pageToLoad, query = '') => {
    setLoading(true);
    try {
      const url = `${backendUrl}/api/movies?query=${encodeURIComponent(query)}&page=${pageToLoad}`;
      
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Failed to fetch page ${pageToLoad}`);

      const data = await res.json();

      if (pageToLoad === 1) {
        setMovies(data.results);
      } else {
        setMovies((prev) => [...prev, ...data.results]);
      }

      setTotalPages(data.total_pages);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    setPage(1);
  }, [searchQuery]);


  useEffect(() => {
    if (searchQuery) {
      fetchMovies(page, searchQuery);
    }
  }, [page, searchQuery]);

  const loadMore = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  if (error) return <div className="text-white">Error: {error}</div>;

  return (
    <div className="pagescontainer2">
      <h2 className="heading2">
        {searchQuery ? `Search results for "${searchQuery}"` : 'Search Results'}
      </h2>
    
      <div className="container-fluid mt-3">
        <div className="row">
          {movies.map((movie) => (
            <div onClick={() => {setSearchQuery(''); closenavbar();} } className="col-6 col-md-2 mb-4 con" key={movie.id}>
              <Link onClick={() =>{ setSearchQuery('') ;closenavbar(); }}  to={`/detail/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div  className="card movie-card h-100 text-white">
                  <ImageWithLoader
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : '/fallback-image.jpg'
                    }
                    alt={movie.title}
                  />
                  <div className="card-body p-2">
                    <h6 className="card-title mb-1">{movie.title}</h6>
                    <p className="card-text mb-0" style={{ fontSize: '0.8rem' }}>
                      {movie.release_date}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {page < totalPages && movies.length > 0 && (
          <div className="text-center my-4">
            <button className="btn btn-primary" onClick={loadMore} disabled={loading}>
              {loading ? 'Loading...' : 'Load More'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
