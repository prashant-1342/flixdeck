import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, A11y, Mousewheel, FreeMode } from 'swiper/modules';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer'



const Detail = () => {
  const { id } = useParams()
  const movieid = parseInt(id);

  const [cast, setCast] = useState([]);
  const token = import.meta.env.VITE_TMDB_TOKEN;
  useEffect(() => {
    const fetchCast = async () => {

      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, {
        headers: {
          Authorization: `Bearer ${token}`,
          accept: 'application/json',
        },
      });
      const data = await res.json();
      setCast(data.cast);
    };
    fetchCast();
  }, [id]);

  const [similar, setSimilar] = useState([]);
  useEffect(() => {
    const fetchsimilar = async () => {

      const res2 = await fetch(`
https://api.themoviedb.org/3/movie/${id}/similar`, {
        headers: {
          Authorization: `Bearer ${token}`,
          accept: 'application/json',
        },
      });
      const data1 = await res2.json();
      setSimilar(data1.results)
    };
    fetchsimilar();
  },[id]);



  return (
    <div>
      <div className='occupy'></div>
      <div className="dettop">
        <img className='detailthumbnail' src='https://image.tmdb.org/t/p/w1280/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg' />

        <div className="impdetail">
          <h1 className='detailmoviename'>Lilo & Stitch</h1>
          <h6 className='comments'>Hold on to your coconuts.</h6>
          <div className='detailabout'>The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.</div>
          <div className="genres">
            <div className='yearrelease'>2025</div>
            <div className="genre">Family.Comedy.Science Fiction</div>
            <div className="duration">1h 48 min</div>
          </div>
          <div className='referlinks'>
            <a className="refer">IMDB watch</a>
            <a className='refer'>Home Page</a>
          </div>
          <div className="playlinks">
            <div className="playbutton">
              <img className='playlogo' src='play-button.png' />
              Play Trailer
            </div>


          </div>
        </div>



      </div>

      <div className="castlist">
        <h5 className='avw'>Top Billed Cast</h5>
        <Swiper
          modules={[Navigation, A11y, Mousewheel, FreeMode]}
          spaceBetween={20}

          navigation
          mousewheel
          freeMode
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 8,
            }
          }}
        >
          {cast.map((actor) => (
            <SwiperSlide className='castcards' key={actor.id}>

              <img
                src={actor.profile_path
                  ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                  : 'https://via.placeholder.com/185x278?text=No+Image'}
                alt={actor.name}
                className="cast-image"
              />

              <div className="cast-name">{actor.name}</div>
              <div className="cast-character">{actor.character}</div>

            </SwiperSlide>
          ))}
        </Swiper>




        <div>
        </div>
      </div>


      <div className="similar">
        <h5 className='avw'>Similar Movies</h5>
        <Swiper
          modules={[Navigation, A11y, Mousewheel, FreeMode]}
          navigation
          mousewheel
          freeMode
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 5,
              slidesPerGroup: 5
            }
          }}
        >
          {similar.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="swiper-slide-card2">

                <img
                  className='movieimage'
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




        <div>
        </div>
      </div>

      <Footer/>


    </div>
  )
}

export default Detail

