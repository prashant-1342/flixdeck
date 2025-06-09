import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, A11y, Mousewheel, FreeMode } from 'swiper/modules';
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

const Popular = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(`${backendUrl}/api/movies?type=popular&page=1`);
        if (!res.ok) throw new Error('Failed to fetch popular movies');
        const data = await res.json();
        setMovies(data.results);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchMovies();
  }, []);

  if (error) return <div className="text-white">Error: {error}</div>;

  return (
    <div className="popular">
      <h2 style={{ paddingLeft: '10px', color: 'white', marginBottom: '20px' }}>Popular</h2>
            <Swiper
        modules={[
                  Navigation,
                  A11y,
                  FreeMode,
                  ...(typeof window !== 'undefined' && window.innerWidth >= 1024 ? [Mousewheel, FreeMode] : []),
                ]}
                 mousewheel={{ forceToAxis: true }}
                  freeMode
                  FreeMode
                
                spaceBetween={15}
                navigation
                style={{ paddingBottom: '20px' }}
                breakpoints={{
                  320: { slidesPerView: 2.5},
                  768: { slidesPerView: 3, slidesPerGroup: 3 },
                  1024: { slidesPerView: 5.5, slidesPerGroup: 5 },
                }}
      >

        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link
              to={`/detail/${movie.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
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

export default Popular;