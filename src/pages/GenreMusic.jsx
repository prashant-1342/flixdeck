import React, { useEffect, useState } from 'react';

const GenreMusic = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(500); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPopularMovies = async (pageToLoad) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genres=10402&language=en-US&page=${pageToLoad}


`,
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
          },
        }
      );

      if (!res.ok) throw new Error(`Failed to fetch page ${pageToLoad}`);
      const data = await res.json();

      setPopularMovies((prev) => [...prev, ...data.results]);
      setTotalPages(data.total_pages);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPopularMovies(page);
  }, [page]);

  const loadMore = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  if (error) return <div className="text-white">Error: {error}</div>;

  return (
    <div className="pagescontainer2">
      <h2 className="heading2">Music</h2>

      <div className="container mt-3">
        <div className="row">
          {popularMovies.map((movie) => (
            <div className="col-6 col-md-2 mb-4 con" key={movie.id}>
              <div className="card movie-card h-100 text-white">
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : '/fallback-image.jpg'
                  }
                  className="card-img-top"
                  alt={movie.title}
                />
                <div className="card-body p-2">
                  <h6 className="card-title mb-1">{movie.title}</h6>
                  <p className="card-text mb-0" style={{ fontSize: '0.8rem' }}>
                    {movie.release_date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {page < totalPages && (
          <div className="text-center my-4">
            <button
              className="btn btn-primary"
              onClick={loadMore}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Load More'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GenreMusic;
