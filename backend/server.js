const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();



const app = express();
app.use(cors());

const TMDB_TOKEN = process.env.TMDB_TOKEN;
const BASE_URL = 'https://api.themoviedb.org/3';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TMDB_TOKEN}`,
    accept: 'application/json',
  },
});


app.get('/api/movies', async (req, res) => {
  const { type = 'popular', genre, query, page = 1 } = req.query;
  const validTypes = ['popular', 'now_playing', 'top_rated', 'upcoming'];

  if (!query && !genre && !validTypes.includes(type)) {
    return res.status(400).json({ error: 'Invalid movie type or genre' });
  }
  if (isNaN(page) || page < 1) {
    return res.status(400).json({ error: 'Invalid page number' });
  }

  let url = '';
  if (query) {
    url = `/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=${page}`;
  } else if (genre) {
    url = `/discover/movie?with_genres=${encodeURIComponent(genre)}&language=en-US&page=${page}`;
  } else {
    url = `/movie/${type}?language=en-US&page=${page}`;
  }

  try {
    const response = await axiosInstance.get(url);
    res.json(response.data);
  } catch (err) {
    console.error('Error fetching movies:', {
      message: err.message,
      status: err.response?.status,
      data: err.response?.data,
    });
    res.status(500).json({ error: 'Failed to fetch movie list from TMDB' });
  }
});


app.get('/api/movie/:id/videos', async (req, res) => {
  const { id } = req.params;

  if (isNaN(id) || id < 1) {
    return res.status(400).json({ error: 'Invalid movie ID' });
  }

  try {
    const response = await axiosInstance.get(`/movie/${id}/videos?language=en-US`);
    res.json(response.data);
  } catch (err) {
    console.error('Error fetching movie videos:', {
      message: err.message,
      status: err.response?.status,
      data: err.response?.data,
    });
    res.status(500).json({ error: 'Failed to fetch movie videos' });
  }
});


app.get('/api/movie/:id', async (req, res) => {
  const { id } = req.params;

  if (isNaN(id) || id < 1) {
    return res.status(400).json({ error: 'Invalid movie ID' });
  }

  try {
    const response = await axiosInstance.get(`/movie/${id}?language=en-US`);
    res.json(response.data);
  } catch (err) {
    console.error('Error fetching movie details:', {
      message: err.message,
      status: err.response?.status,
      data: err.response?.data,
    });
    res.status(500).json({ error: 'Failed to fetch movie details' });
  }
});


app.get('/api/movie/:id/credits', async (req, res) => {
  const { id } = req.params;

  if (isNaN(id) || id < 1) {
    return res.status(400).json({ error: 'Invalid movie ID' });
  }

  try {
    const response = await axiosInstance.get(`/movie/${id}/credits?language=en-US`);
    res.json(response.data);
  } catch (err) {
    console.error('Error fetching movie credits:', {
      message: err.message,
      status: err.response?.status,
      data: err.response?.data,
    });
    res.status(500).json({ error: 'Failed to fetch movie credits' });
  }
});


app.get('/api/movie/:id/similar', async (req, res) => {
  const { id } = req.params;

  if (isNaN(id) || id < 1) {
    return res.status(400).json({ error: 'Invalid movie ID' });
  }

  try {
    const response = await axiosInstance.get(`/movie/${id}/similar?language=en-US`);
    res.json(response.data);
  } catch (err) {
    console.error('Error fetching similar movies:', {
      message: err.message,
      status: err.response?.status,
      data: err.response?.data,
    });
    res.status(500).json({ error: 'Failed to fetch similar movies' });
  }
});


app.get('/api/movies/byIds', async (req, res) => {
  const ids = req.query.ids?.split(',') || [];

  if (!TMDB_TOKEN) {
    return res.status(500).json({ error: 'TMDB token not set in environment variables' });
  }

  if (!Array.isArray(ids) || ids.length === 0) {
    return res.status(400).json({ error: 'No movie IDs provided' });
  }

  try {
    const promises = ids.map((id) =>
      axiosInstance.get(`/movie/${id}?language=en-US`).then((r) => r.data)
    );

    const results = await Promise.all(promises);
    res.json({ results });
  } catch (err) {
    console.error('Error fetching movies by IDs:', {
      message: err.message,
      status: err.response?.status,
      data: err.response?.data,
    });
    res.status(500).json({ error: 'Failed to fetch movies by IDs' });
  }
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});




// const express   = require('express');
// const axios     = require('axios');
// const NodeCache = require('node-cache');
// const morgan    = require('morgan');
// require('dotenv').config();

// const app  = express();
// const PORT = process.env.PORT || 4000;
// const TMDB_TOKEN = process.env.TMDB_TOKEN;

// // ---------- Middleware ----------
// app.use(express.json());            // Parse JSON bodies
// app.use(morgan('dev'));             // HTTP request logger

// // ---------- Cache (5 min TTL) ----------
// const cache = new NodeCache({ stdTTL: 300, checkperiod: 60 });

// // ---------- Axios instance ----------
// const axiosTMDB = axios.create({
//   baseURL: 'https://api.themoviedb.org/3',   // All endpoints share this root
//   headers: { Authorization: `Bearer ${TMDB_TOKEN}` }
// });

// // ---------- Helper: safe Axios call with caching ----------
// async function cachedFetch(cacheKey, url, params = {}) {
//   if (cache.has(cacheKey)) return cache.get(cacheKey);

//   const { data } = await axiosTMDB.get(url, { params });
//   cache.set(cacheKey, data);
//   return data;
// }

// // ---------- Health check ----------
// app.get('/', (_, res) => {
//   res.send('🎬 Movie API server is running!');
// });

// // ---------- /api/movies ------------------------------------
// // Query params: type (popular|top_rated|upcoming), genre (id), page, query
// app.get('/api/movies', async (req, res) => {
//   try {
//     const { type = 'popular', genre, page = 1, query = '' } = req.query;
//     const cacheKey = `movies_${type}_${genre}_${page}_${query}`;

//     // Search endpoint if query present; otherwise discovery / list
//     const data = query
//       ? await cachedFetch(
//           cacheKey,
//           '/search/movie',
//           { query, page }
//         )
//       : await cachedFetch(
//           cacheKey,
//           genre ? '/discover/movie' : `/movie/${type}`,
//           genre ? { with_genres: genre, page } : { page }
//         );

//     res.json(data);
//   } catch (err) {
//     const status  = err.response?.status || 500;
//     const message = err.response?.data?.status_message || err.message;
//     res.status(status).json({ error: message });
//   }
// });

// // ---------- /api/movie/:id (details) -----------------------
// app.get('/api/movie/:id', async (req, res) => {
//   const id = parseInt(req.params.id, 10);
//   if (Number.isNaN(id) || id < 1) {
//     return res.status(400).json({ error: 'Invalid movie ID' });
//   }

//   try {
//     const data = await cachedFetch(`movie_${id}`, `/movie/${id}`, {
//       append_to_response: 'genres'
//     });
//     res.json(data);
//   } catch (err) {
//     const status  = err.response?.status || 500;
//     const message = err.response?.data?.status_message || err.message;
//     res.status(status).json({ error: message });
//   }
// });

// // ---------- Reusable helper for sub‑routes -----------------
// const subRoutes = ['videos', 'credits', 'similar'];
// subRoutes.forEach((route) => {
//   app.get(`/api/movie/:id/${route}`, async (req, res) => {
//     const id = parseInt(req.params.id, 10);
//     if (Number.isNaN(id) || id < 1) {
//       return res.status(400).json({ error: 'Invalid movie ID' });
//     }
//     try {
//       const data = await cachedFetch(
//         `movie_${id}_${route}`,
//         `/movie/${id}/${route}`
//       );
//       res.json(data);
//     } catch (err) {
//       const status  = err.response?.status || 500;
//       const message = err.response?.data?.status_message || err.message;
//       res.status(status).json({ error: message });
//     }
//   });
// });

// // ---------- /api/movies/byIds (bulk) -----------------------
// // POST { "ids": [550, 299536, ...] }
// app.post('/api/movies/byIds', async (req, res) => {
//   const ids = Array.isArray(req.body.ids) ? req.body.ids : [];
//   if (!ids.length) {
//     return res.status(400).json({ error: 'ids array required' });
//   }

//   try {
//     const results = await Promise.all(
//       ids.map((id) => cachedFetch(`movie_${id}`, `/movie/${id}`))
//     );
//     res.json(results);
//   } catch (err) {
//     const status  = err.response?.status || 500;
//     const message = err.response?.data?.status_message || err.message;
//     res.status(status).json({ error: message });
//   }
// });

// // ---------- Start server ----------
// app.listen(PORT, () =>
//   console.log(`🎬 Movie API proxy listening on http://localhost:${PORT}`)
// );
