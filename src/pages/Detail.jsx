import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, A11y, Mousewheel, FreeMode } from 'swiper/modules';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
const backendUrl = import.meta.env.VITE_BACKEND_URL;
import SearchPage from '../components/SearchPage';

const ImageWithLoader = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="image-wrapper image-wrapper2">
      {!loaded && <div className="loading-line" />}
      <img
        className="asw"
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        style={{ display: loaded ? 'block' : 'none' }}
      />
    </div>
  );
};

const Detail = ({ searchQuery }) => {
  if (searchQuery) {
    return <SearchPage searchQuery={searchQuery} />;
  }
  const { id } = useParams();
  const movieid = parseInt(id);
  const [cast, setCast] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // New states for trailer modal
  const [trailerKey, setTrailerKey] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${backendUrl}/api/movie/${id}/credits`);
        if (!res.ok) throw new Error('Failed to fetch cast');
        const data = await res.json();
        setCast(data.cast);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [id]);

  useEffect(() => {
    const fetchsimilar = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${backendUrl}/api/movie/${id}/similar`);
        if (!res.ok) throw new Error('Failed to fetch similar movies');
        const data = await res.json();
        setSimilar(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchsimilar();
  }, [id]);

  useEffect(() => {
    const fetchabout = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${backendUrl}/api/movie/${id}`);
        if (!res.ok) throw new Error('Failed to fetch movie details');
        const data = await res.json();
        setAbout(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchabout();
  }, [id]);


  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const res = await fetch(`${backendUrl}/api/movie/${id}/videos`);
        if (!res.ok) throw new Error('Failed to fetch trailer');
        const data = await res.json();
        const trailer = data.results.find(
          (vid) => vid.type === 'Trailer' && vid.site === 'YouTube'
        );
        setTrailerKey(trailer?.key || null);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchTrailer();
  }, [id]);

  function converttoHour(minutes) {
    if (!minutes) return '';
    const hrs = Math.floor(minutes / 60);
    const remain = minutes % 60;
    return `${hrs}h ${remain}min`;
  }

  const time = about.runtime;
  const inhrs = converttoHour(time);
  const imdbid = about.imdb_id;

  if (error) return <div className="text-white">Error: {error}</div>;
  if (loading) return <div className="text-white">Loading...</div>;

  return (
    <div className="detail-container">
      <div className="dettop">
        <img
          className="detailthumbnail"
          src={
            about.backdrop_path
              ? `https://image.tmdb.org/t/p/w780${about.backdrop_path}`
              : '/fallback-image.jpg'
          }
          srcSet={
            about.backdrop_path
              ? `
                https://image.tmdb.org/t/p/w300${about.backdrop_path} 300w,
                https://image.tmdb.org/t/p/w780${about.backdrop_path} 780w,
                https://image.tmdb.org/t/p/w1280${about.backdrop_path} 1280w,
                https://image.tmdb.org/t/p/original${about.backdrop_path} 2000w
              `
              : ''
          }
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 90vw, 80vw"
          alt={about.title || 'Movie backdrop'}
        />
        <div className="impdetail">
          <div className="detailmoviename">{about.title}</div>
          <div className="comments">{about.tagline}</div>
          <div className="detailabout">{about.overview}</div>
          <div className="genres">
            <div className="yearrelease">{about.release_date}</div>
            <div className="genre">
              {about.genres &&
                about.genres.slice(0, 3).map((genre, index) => (
                  <span key={genre.id}>
                    {genre.name}
                    {index < Math.min(2, about.genres.length - 1) ? ' . ' : ''}
                  </span>
                ))}
            </div>
            <div className="duration">{inhrs}</div>
          </div>
          <div className="referlinks">
            <a href={imdbid ? `https://www.imdb.com/title/${imdbid}` : '#'} className="refer">
              IMDB
            </a>
            <a href={about.homepage ? about.homepage : '#'} className="refer">
              Home Page
            </a>
          </div>
          <div className="playlinks">
            {/* Play Trailer Button */}
            {trailerKey ? (
              <div
                className="playbutton"
                onClick={() => setShowTrailer(true)}
                style={{ cursor: 'pointer' }}
              >
                <img src="/play-button.png" className="playlogo" alt="Play trailer" />
                Play Trailer
              </div>
            ) : (
              <div className="playbutton disabled">Trailer Not Available</div>
            )}
          </div>
        </div>
      </div>

      <div className="castlist">
        <h5 className="avw">Top Billed Cast</h5>
        {cast.length === 0 ? (
          <div className="asx">No cast found</div>
        ) : (
          <Swiper
            modules={[A11y, Mousewheel, FreeMode]}
            spaceBetween={20}
            mousewheel={{ forceToAxis: true }}
            freeMode
            breakpoints={{
              320: { slidesPerView: 3 },
              480: { slidesPerView: 5 },
              768: { slidesPerView: 6 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 8 },
            }}
          >
            {cast.map((actor) => (
              <SwiperSlide className="castcards" key={actor.id}>
                <ImageWithLoader
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                      : 'https://via.placeholder.com/185x278?text=No+Image'
                  }
                  alt={actor.name}
                />
                <div className="cast-name">{actor.name}</div>
                <div className="cast-character">{actor.character}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <div className="similar">
        <h5 className="avw">Similar Movies</h5>
        <Swiper
          modules={[
            Navigation,
            A11y,
            FreeMode,
            ...(typeof window !== 'undefined' && window.innerWidth >= 1024
              ? [Mousewheel, FreeMode]
              : []),
          ]}
          mousewheel={{ forceToAxis: true }}
          freeMode
          spaceBetween={15}
          navigation
          style={{ paddingBottom: '20px' }}
          breakpoints={{
            320: { slidesPerView: 2, slidesPerGroup: 2 },
            768: { slidesPerView: 3, slidesPerGroup: 3 },
            1024: { slidesPerView: 6, slidesPerGroup: 6 },
          }}
        >
          {similar.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Link
                to={`/detail/${movie.id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
                aria-label={`View details for ${movie.title}`}
              >
                <div className="swiper-slide-card2">
                  <ImageWithLoader
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                        : '/fallback-image.jpg'
                    }
                    alt={movie.title}
                  />
                  <div className="moviename">{movie.title}</div>
                  <div className="moviedate">{movie.release_date}</div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

  
      {showTrailer && trailerKey && (
        <div className="trailer-modal" onClick={() => setShowTrailer(false)}>
          <div className="trailer-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button className="close-button" onClick={() => setShowTrailer(false)}>
              ✖
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Detail;
