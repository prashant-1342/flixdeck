import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, A11y, Mousewheel, FreeMode } from 'swiper/modules';

const ImageWithLoader = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <div className="loading-line" />}
      <img
        className="movieimage"
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        style={{ display: loaded ? 'block' : 'none' }}
      />
    </>
  );
};

const Nowplaying = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const token = import.meta.env.VITE_TMDB_TOKEN;
  const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        return res.json();
      })
      .then((json) => setMovies(json.results))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className='popular'>
      <h2 style={{ paddingLeft: '10px', color: 'white', marginBottom: '20px' }}>Upcoming</h2>
      <Swiper
        modules={[
          Navigation,
          A11y,
          ...(typeof window !== 'undefined' && window.innerWidth >= 1024 ? [Mousewheel, FreeMode] : []),
        ]}
        grabCursor={true}
        mousewheel={typeof window !== 'undefined' && window.innerWidth >= 1024 ? { forceToAxis: true } : false}
        freeMode={typeof window !== 'undefined' && window.innerWidth >= 1024}
        spaceBetween={15}
        navigation
        style={{ paddingBottom: '20px' }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1024: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/detail/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="swiper-slide-card2">
                <ImageWithLoader
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                      : '/fallback-image.jpg'
                  }
                  alt={movie.title}
                />
                <div className="moviename">{movie.title}</div>
                <div className="moviedate">{movie.release_date}</div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Nowplaying;