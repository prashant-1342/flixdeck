// Movies.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const Movies = () => {
  return (
    <div className="thumbnailcontainer" style={{ padding: '20px' }}>
      <h2 className='heading1' >Movies</h2>

      <Swiper
        modules={[Navigation, Pagination]}
         simulateTouch={true} 
      allowTouchMove={true}
        spaceBetween={20}
       
        navigation
        pagination={{ clickable: true }}
        style={{ paddingBottom: '40px' }} // for pagination space
      >
        
        <SwiperSlide  >
          <div className='swiper-slide-card' >
             <div className="blackcover"></div>
              <div className="blureffect"></div>
            <img className='thumbnailcard' src='/800w.webp'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-card">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-card">Slide 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-card">Slide 4</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-card">Slide 5</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Movies;
