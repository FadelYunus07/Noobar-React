import axios from "axios";

const tmdbBaseUrl = "https://api.themoviedb.org/3/";
const api_key = "24659842891f0877b80e3c8d6a8a5bad";

const movieBaseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=" + api_key;
const tvBaseUrl = "https://api.themoviedb.org/3/discover/tv?api_key=" + api_key;
const searchBaseUrl = "https://api.themoviedb.org/3/search/multi?api_key=" + api_key;

//   https://api.themoviedb.org/3/movie/popular?api_key=24659842891f0877b80e3c8d6a8a5bad

// Get Popular Movie
const getPopularMovies = axios.get(tmdbBaseUrl + "movie/popular?api_key=" + api_key);

// Get Movie By Genres
const getMovieByGenreId = (id) => axios.get(movieBaseUrl + "&with_genres=" + id);

const getTvByGenreId = (id) => axios.get(tvBaseUrl + "&with_genres=" + id);

// Get Movie and Tv Details by ID
const getMovieDetails = (id) => axios.get(tmdbBaseUrl + `movie/${id}?api_key=${api_key}`);
const getTvDetails = (id) => axios.get(tmdbBaseUrl + `tv/${id}?api_key=${api_key}`);

const getMovieTrailer = (id) => axios.get(tmdbBaseUrl + `movie/${id}/videos?api_key=${api_key}`);
const getTvTrailer = (id) => axios.get(tmdbBaseUrl + `tv/${id}/videos?api_key=${api_key}`);

const searchAll = (query) => axios.get(`${searchBaseUrl}&query=${encodeURIComponent(query)}`);

export default {
  getPopularMovies,
  getMovieByGenreId,
  getTvByGenreId,
  getMovieDetails,
  getTvDetails,
  getMovieTrailer,
  getTvTrailer,
  searchAll,
};
