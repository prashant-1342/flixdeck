import React,{useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const Nowplaying = () => {
   const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
  
    const token = import.meta.env.VITE_TMDB_TOKEN;
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  
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
           <h2 style={{ paddingLeft: '10px', color: 'white', marginBottom: '20px' }}>Top Rated</h2>
           <Swiper
             modules={[Navigation, Pagination]}
             simulateTouch={true}
             allowTouchMove={true}
             spaceBetween={20}
             navigation
             pagination={{ clickable: true }}
             style={{ paddingBottom: '40px' }}
             breakpoints={{
               320: { slidesPerView: 1 },
               768: { slidesPerView: 3 },
               1024: { slidesPerView: 5 },
             }}
           >
             {movies.map((movie) => (
               <SwiperSlide key={movie.id}>
                 <div className="swiper-slide-card2">
                   <img
                     className='movieimage'
                     alt={movie.title}
                     src={
                       movie.poster_path
                         ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                         : '/fallback-image.jpg'
                     }
                   />
                   <div className="moviename">{movie.title}</div>
                   <div className="moviedate">{movie.release_date}</div>
                 </div>
               </SwiperSlide>
             ))}
           </Swiper>
         </div>
  )
}

export default Nowplaying
