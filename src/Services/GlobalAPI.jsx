import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3/";
const api_key = "24659842891f0877b80e3c8d6a8a5bad";

const movieByGenreBaseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=" + api_key;

//   https://api.themoviedb.org/3/movie/popular?api_key=24659842891f0877b80e3c8d6a8a5bad

// Get Popular Movie
const getPopularMovies = axios.get(movieBaseUrl + "movie/popular?api_key=" + api_key);

// Get Movie By Genres
const getMovieByGenreId = (id) => axios.get(movieByGenreBaseUrl + "&with_genres=" + id);

// Get Movie Details by ID
const getMovieDetails = (id) => axios.get(movieBaseUrl + `movie/${id}?api_key=${api_key}`);

const getMovieTrailer = (id) => axios.get(movieBaseUrl + `movie/${id}/videos?api_key=${api_key}`);

export default {
  getPopularMovies,
  getMovieByGenreId,
  getMovieDetails,
  getMovieTrailer,
};
