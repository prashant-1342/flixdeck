import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const backendUrl = import.meta.env.VITE_BACKEND_URL;

// Local images
import theWitchImage from '../assets/images/thewitch2880w.webp';
import movieName1 from '../assets/images/700w.webp';

import slide2 from '../assets/images/2880w.webp';
import movieName2 from '../assets/images/700w (2).webp';

import slide3 from '../assets/images/2880w (1).webp';
import movieName3 from '../assets/images/700w (4).webp';

import slide4 from '../assets/images/2880w (2).webp';
import movieName4 from '../assets/images/700w (3).webp';

import slide5 from '../assets/images/2880w (3).webp';
import movieName5 from '../assets/images/700w (5).webp';

const movieIds = [310131, 667216, 396535, 744857, 949423];

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => { 
    const fetchMovies = async () => {
      try {
        const results = await Promise.all(
          movieIds.map(async (id) => {
            const res = await fetch(`${backendUrl}/api/movie/${id}`);
            if (!res.ok) throw new Error(`Error fetching movie ID ${id}`);
            return await res.json();
          })
        );
        setMovies(results);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMovies();
  }, []);

  if (error) return <div className="text-white">Error: {error}</div>;

  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <h2 className='heading1'>Movies</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
       autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide className='vyu'
        >
          <Link to={`/detail/310131`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className='slide-content'>
              <img className='slide' src={theWitchImage} alt='The Witch' />
              <div className='overlay'>
                <img className='movname' src={movieName1} alt='Movie Name 1' />
                <button className='details-button'>More Details</button>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to={`/detail/667216`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className='slide-content'>
              <img className='slide' src={slide2} alt='Slide 2' />
              <div className='overlay'>
                <img className='movname' style={{ transform: 'scale(0.5)' }} src={movieName2} alt='Movie Name 2' />
                <button className='details-button'>More Details</button>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to={`/detail/396535`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className='slide-content'>
              <img className='slide' src={slide3} alt='Slide 3' />
              <div className='overlay'>
                <img className='movname' style={{transform:'scale(0.7)'}} src={movieName3} alt='Movie Name 3' />
                <button className='details-button'>More Details</button>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to={`/detail/744857`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className='slide-content'>
              <img className='slide' src={slide4} alt='Slide 4' />
              <div className='overlay'>
                <img className='movname' style={{transform:'scale(0.6)'}} src={movieName4} alt='Movie Name 4' />
                <button className='details-button'>More Details</button>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to={`/detail/949423`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className='slide-content'>
              <img className='slide' src={slide5} alt='Slide 5' />
              <div className='overlay'>
                <img className='movname' src={movieName5} alt='Movie Name 5' />
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