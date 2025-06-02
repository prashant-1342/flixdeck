import React,{useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, A11y,Mousewheel,FreeMode } from 'swiper/modules';

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
             modules={[Navigation, A11y,Mousewheel,FreeMode]}
             simulateTouch={true}
             allowTouchMove={true}
               grabCursor={true}
  mousewheel={{ forceToAxis: true }}
  freeMode={true}
             spaceBetween={15}
               slidesPerGroup={5}
             navigation
            
             style={{ paddingBottom: '40px' }}
               breakpoints={{
  320: { slidesPerView: 2 },     // 👈 2 cards on mobile
  768: { slidesPerView: 2 },     // 👈 4 cards on tablets
  1024: { slidesPerView: 5 },    // 👈 5 cards on large screens
}}
           >
             {movies.map((movie) => (
               <SwiperSlide key={movie.id}>
                  <Link to={`/detail/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}> 
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
                 </Link>
               </SwiperSlide>
             ))}
           </Swiper>
         </div>
  )
}

export default Nowplaying
