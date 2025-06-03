import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

const token = import.meta.env.VITE_TMDB_TOKEN;
console.log(token)

const movieIds = [27205, 667216, 155, 299534, 496243];

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const results = await Promise.all(
        movieIds.map(async (id) => {
          const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              accept: 'application/json',
            },
          });
           if (!res.ok) throw new Error(`Error fetching movie ID ${id}`);
          return await res.json();
        })
      );
      setMovies(results);
    };

    fetchMovies();
  }, []);

  return (
    <div style={{ paddingTop: '20px' }}>
      <h2 className='heading1'>Movies</h2>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        slidesPerGroup={1}
        grabCursor={true}
        navigation
        pagination={{ clickable: true }}
        simulateTouch={true}
        allowTouchMove={true}
        style={{ paddingBottom: '40px' }}
      >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <div className='swiper-slide-card'>
            <ImageWithLoader
              src='/images/thewitch2880w.webp'
              alt={movie.title}
            />
          </div>
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  );
};

export default Movies;