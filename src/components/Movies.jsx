import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Movies = () => {
  return (
    <div  style={{ paddingTop: '20px' }}>
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
        <SwiperSlide>
          <div className='swiper-slide-card'>
            <div className="blackcover"></div>
            <div className="blureffect"></div>
            <img className='thumbnailcard' src='/800w.webp' />
          </div>
        </SwiperSlide>
        <SwiperSlide><div className="swiper-slide-card">Slide 2</div></SwiperSlide>
        <SwiperSlide><div className="swiper-slide-card">Slide 3</div></SwiperSlide>
        <SwiperSlide><div className="swiper-slide-card">Slide 4</div></SwiperSlide>
        <SwiperSlide><div className="swiper-slide-card">Slide 5</div></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Movies;
