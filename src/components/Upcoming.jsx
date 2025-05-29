import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const Upcoming = () => {
  return (
      <div className='popular'>
      <h2 style={{ paddingLeft:'10px', color: 'white',marginBottom:'20px' }}>Upcoming</h2>
     <Swiper
        modules={[Navigation, Pagination]}
      
         simulateTouch={true} 
      allowTouchMove={true}
        spaceBetween={20}
    
        navigation
        pagination={{ clickable: true }}
        style={{ paddingBottom: '40px' }} 
         breakpoints={{
    // when window width is >= 320px (mobile)
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 768px (tablet)
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 1024px (desktop)
    1024: {
      slidesPerView: 5,
    },
  }}  
      >
        
        <SwiperSlide>
          <div className="swiper-slide-card2">
            <img src='/yFHHfHcUgGAxziP1C3lLt0q2T4s.webp' className="movieimage"/>
            <div className="moviename">A MineCraft Movie</div>
            <div className="moviedate">27 May 2025</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-card2">
            <img src='/yFHHfHcUgGAxziP1C3lLt0q2T4s.webp' className="movieimage"/>
            <div className="moviename">A MineCraft Movie</div>
            <div className="moviedate">27 May 2025</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-card2">
            <img src='/yFHHfHcUgGAxziP1C3lLt0q2T4s.webp' className="movieimage"/>
            <div className="moviename">A MineCraft Movie</div>
            <div className="moviedate">27 May 2025</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-card2">
            <img src='/yFHHfHcUgGAxziP1C3lLt0q2T4s.webp' className="movieimage"/>
            <div className="moviename">A MineCraft Movie</div>
            <div className="moviedate">27 May 2025</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-card2">
            <img src='/yFHHfHcUgGAxziP1C3lLt0q2T4s.webp' className="movieimage"/>
            <div className="moviename">A MineCraft Movie</div>
            <div className="moviedate">27 May 2025</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-card2">
            <img src='/yFHHfHcUgGAxziP1C3lLt0q2T4s.webp' className="movieimage"/>
            <div className="moviename">A MineCraft Movie</div>
            <div className="moviedate">27 May 2025</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-card2">
            <img src='/yFHHfHcUgGAxziP1C3lLt0q2T4s.webp' className="movieimage"/>
            <div className="moviename">A MineCraft Movie</div>
            <div className="moviedate">27 May 2025</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-card2">
            <img src='/yFHHfHcUgGAxziP1C3lLt0q2T4s.webp' className="movieimage"/>
            <div className="moviename">A MineCraft Movie</div>
            <div className="moviedate">27 May 2025</div>
          </div>
        </SwiperSlide>
       
      </Swiper>


   </div>
  )
}

export default Upcoming
