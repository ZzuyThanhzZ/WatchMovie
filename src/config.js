// Configuration for TMDB and Embed API

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '56ba948789b1b4a50e49aba125223bd2';

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;

// For login and voting
const REQUEST_TOKEN_URL = `${API_URL}authentication/token/new?api_key=${API_KEY}`;
const LOGIN_URL = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`;
const SESSION_ID_URL = `${API_URL}authentication/session/new?api_key=${API_KEY}`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';

//Video films
const EMBED_MOVIE = 'https://www.2embed.ru/embed/tmdb/movie';
const EMBED_TV = 'https://www.2embed.ru/embed/tmdb/tv';
const EMBED_TRAILER = 'https://www.youtube.com/embed/';

//Google login client id
const CLIENT_ID = '671912759861-0l7dlo3c92p7dk1fkslur0r5aeoog33l.apps.googleusercontent.com';

export {
    API_URL,
    API_KEY,
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    REQUEST_TOKEN_URL,
    LOGIN_URL,
    SESSION_ID_URL,
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE,
    EMBED_MOVIE,
    EMBED_TV,
    EMBED_TRAILER,
    CLIENT_ID,
}
