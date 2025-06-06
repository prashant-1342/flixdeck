import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const token = import.meta.env.VITE_TMDB_TOKEN;
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
    <div style={{ width: "100%", margin: "0 auto" }}>
      <h2 className='heading1'>Movies</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}

      // autoplay={{
      //   delay: 3000, // 2000 ms = 2 seconds
      //   disableOnInteraction: false, // keeps autoplay running after user interacts
      // }}
      >
        <SwiperSlide>
           <Link to={`/detail/310131`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className='slide-content'>
            <img className='slide' src='/images/thewitch2880w.webp' />
            <div className='overlay'>
              <img className='movname' src='/images/700w.webp' />

              <button className='details-button'>More Details</button>
            </div>
          </div>
          </Link>
        </SwiperSlide>


        <SwiperSlide>
           <Link to={`/detail/667216`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className='slide-content'>
            <img className='slide' src='/images/2880w.webp' />
            <div className='overlay'>
              <img style={{transform:'scale(0.3'}} className='movname'  src='/images/700w (2).webp' />
              <button className='details-button'>More Details</button>
            </div>
          </div>
          </Link>
        </SwiperSlide>
        
        <SwiperSlide>
           <Link to={`/detail/396535`} style={{ textDecoration: 'none', color: 'inherit' }}>
           <div className='slide-content'>
            <img className='slide' src='/images/2880w (1).webp' />
            <div className='overlay'>
              <img className='movname' src='/images/700w (4).webp' />

              <button className='details-button'>More Details</button>
            </div>
          </div>
             </Link>
        </SwiperSlide>
        <SwiperSlide>
           <Link to={`/detail/744857`} style={{ textDecoration: 'none', color: 'inherit' }}>
           <div className='slide-content'>
            <img className='slide' src='/images/2880w (2).webp' />
            <div className='overlay'>
              <img className='movname' src='/images/700w (3).webp' />

              <button className='details-button'>More Details</button>
            </div>
          </div>
             </Link>
        </SwiperSlide>
        <SwiperSlide>
           <Link to={`/detail/949423`} style={{ textDecoration: 'none', color: 'inherit' }}>
         <div className='slide-content'>
            <img className='slide' src='/images/2880w (3).webp' />
            <div className='overlay'>
              <img className='movname' src='images/700w (5).webp' />

              <button className='details-button'>More Details</button>
            </div>
          </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Movies;