import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, A11y, Mousewheel, FreeMode } from 'swiper/modules';
import { useParams } from 'react-router-dom';


const Detail = () => {
  const {id} = useParams()  
  const movieid = parseInt(id);
  
  const [cast,setcast] = useState([]);
    useEffect(() => {
    const fetchCast = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=YOUR_API_KEY`);
      const data = await res.json();
      setCast(data.cast);  // TMDB returns an array here
    };
    fetchCast();
  }, [id]);


  // const cast = [
  //   {
  //     id: 1,
  //     name: "Daveigh Chase",
  //     character: "Lilo",
  //     // profile_path: "/aO3DEaKzNreHB0n5nWDzSLKQElx.jpg"
  //   },
  //   {
  //     id: 2,
  //     name: "Chris Sanders",
  //     character: "Stitch",
  //     // profile_path: "/7AI8zLkgdXrrRZfzKqy1Vdk0teR.jpg"
  //   },
  //   {
  //     id: 3,
  //     name: "Tia Carrere",
  //     character: "Nani",
  //     // profile_path: "/f6hhU0XnHO0TfRoUfs2Fn8ECqLz.jpg"
  //   }
  //   ,
  //   {
  //     id: 3,
  //     name: "Tia Carrere",
  //     character: "Nani",
  //     // profile_path: "/f6hhU0XnHO0TfRoUfs2Fn8ECqLz.jpg"
  //   }
  //   ,
  //   {
  //     id: 3,
  //     name: "Tia Carrere",
  //     character: "Nani",
  //     // profile_path: "/f6hhU0XnHO0TfRoUfs2Fn8ECqLz.jpg"
  //   }
  //   ,
  //   {
  //     id: 3,
  //     name: "Tia Carrere",
  //     character: "Nani",
  //     // profile_path: "/f6hhU0XnHO0TfRoUfs2Fn8ECqLz.jpg"
  //   }
  //   ,
  //   {
  //     id: 3,
  //     name: "Tia Carrere",
  //     character: "Nani",
  //     // profile_path: "/f6hhU0XnHO0TfRoUfs2Fn8ECqLz.jpg"
  //   }
  //   ,
  //   {
  //     id: 3,
  //     name: "Tia Carrere",
  //     character: "Nani",
  //     // profile_path: "/f6hhU0XnHO0TfRoUfs2Fn8ECqLz.jpg"
  //   }
  //   ,
  //   {
  //     id: 3,
  //     name: "Tia Carrere",
  //     character: "Nani",
  //     // profile_path: "/f6hhU0XnHO0TfRoUfs2Fn8ECqLz.jpg"
  //   }
  //   ,
  //   {
  //     id: 3,
  //     name: "Tia Carrere",
  //     character: "Nani",
  //     // profile_path: "/f6hhU0XnHO0TfRoUfs2Fn8ECqLz.jpg"
  //   }
  //   ,
  //   {
  //     id: 3,
  //     name: "Tia Carrere",
  //     character: "Nani",
  //     // profile_path: "/f6hhU0XnHO0TfRoUfs2Fn8ECqLz.jpg"
  //   }
  //   ,
  //   {
  //     id: 3,
  //     name: "Tia Carrere",
  //     character: "Nani",
  //     // profile_path: "/f6hhU0XnHO0TfRoUfs2Fn8ECqLz.jpg"
  //   }
  //   ,
  //   {
  //     id: 3,
  //     name: "Tia Carrere",
  //     character: "Nani",
  //     // profile_path: "/f6hhU0XnHO0TfRoUfs2Fn8ECqLz.jpg"
  //   }

  // ];

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
              <img className='playlogo' src='play-button.png'/>
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
            <SwiperSlide className='castcards'  key={actor.id}>
             
                <img
                  src={`https://image.tmdb.org/t/p/w185${actor.profile_path || '/default.jpg'}`}
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
              slidesPerGroup:5
            }
          }}
        >
          {cast.map((actor) => (
            <SwiperSlide  key={actor.id}>
                 <div className="swiper-slide-card2">
              
                <img
                  className='movieimage'
                  
                  src='https://image.tmdb.org/t/p/w185//jqsKbBF28V2Oq5tKPR5USkNufwC.jpg'
                />
                <div className="moviename">{actor.name}</div>
                <div className="moviedate">{actor.character}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>




        <div>
        </div>
      </div>
    </div>
  )
}

export default Detail

