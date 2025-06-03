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

    const[about,setAbout] = useState([]);
  useEffect(()=>{
    const fetchabout = async ()=>{
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`,{
        headers:{
           Authorization:`Bearer ${token}`,
           accept:'application/json',
        },
      });
      const data = await res.json();
      setAbout(data);
    };
    fetchabout();
  },[id]);

  function converttoHour(minutes){
    const hrs = Math.floor(minutes/60);
    const remain  = minutes % 60
    return `${hrs}h ${remain}min`;
  }

  const time = about.runtime
  const inhrs = converttoHour(time);
  const imdbid = about.imdb_id
  

  return (
    <div>
      <div className='occupy'></div>
      <div className="dettop">
        <img className='detailthumbnail'    src={`https://image.tmdb.org/t/p/w780${about.backdrop_path}`} // fallback
  srcSet={`
    https://image.tmdb.org/t/p/w300${about.backdrop_path} 300w,
    https://image.tmdb.org/t/p/w780${about.backdrop_path} 780w,
    https://image.tmdb.org/t/p/w1280${about.backdrop_path} 1280w,
    https://image.tmdb.org/t/p/original${about.backdrop_path} 2000w
  `}
  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />

        <div className="impdetail">
          <h1 className='detailmoviename'>{about.original_title}</h1>
          <h6 className='comments'>{about.tagline}</h6>
          <div className='detailabout'>{about.overview}</div>
          <div className="genres">
            <div className='yearrelease'>{about.release_date}</div>
            <div className="genre">  {about.genres && about.genres.slice(0, 3).map((genre, index) => (
    <span key={genre.id}>
      {genre.name}{index < Math.min(2, about.genres.length - 1) ? ' . ' : ''}
    </span>
  ))} </div>
            <div className="duration">{inhrs}</div>
          </div>
          <div className='referlinks'>
            <a href={imdbid ? `https://www.imdb.com/title/${imdbid}`:'#' }  className="refer">IMDB</a>
            <a href={about.homepage? about.homepage:"#" } className='refer'>Home Page</a>
          </div>
          <div className="playlinks">
            <div className="playbutton">
              <img src='/play-button.png' className='playlogo' />
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

