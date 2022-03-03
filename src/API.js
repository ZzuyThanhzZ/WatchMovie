import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_KEY,
  API_URL,
  REQUEST_TOKEN_URL,
  SESSION_ID_URL,
  LOGIN_URL,
  EMBED_MOVIE,
  EMBED_TV
} from './config'

const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-type': 'application/json'
  }
}

const apiSetting = {
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
      return await (await fetch(endpoint)).json();
  },
  fetchMovie: async movieId => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchLabelMovie: async (movieId, label) => {
    const endpoint = `${API_URL}movie/${movieId}/${label}?api_key=${API_KEY}&language=en-US&page=1`;
    return await (await fetch(endpoint)).json();
  },
  fetchTrendingMovie: async () => {
    const endpoint = `${API_URL}trending/all/day?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async movieId => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

    return await (await fetch(creditsEndpoint)).json();
  },
  fetchTrailer: async movieId => {
    const endpoint = `${API_URL}movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;
    return await (await fetch(endpoint)).json();
  },

  //Bonus material below for login
  getRequestToken: async () => {
    const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json()
    return reqToken.request_token;
  },
  authenticate: async (requestToken, username, password) => {
    const bodyData = {
      username,
      password,
      request_token: requestToken,
    };
    //First authenticate the requestToken
    const data = await (
      await fetch(LOGIN_URL, {
        ...defaultConfig,
        body: JSON.stringify(bodyData)
      })
    ).json();
    //Then get the sessionId with the requestToken
    if(data.success) {
      const sessionId = await (
        await fetch(SESSION_ID_URL, {
          ...defaultConfig,
          body: JSON.stringify({ request_token: requestToken })
        })
      ).json();
      return sessionId;
    }
  },
  rateMovie: async (sessionId, movieId, value) => {
    const endpoint = `${API_URL}movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`;

    const rating = await (
      await fetch(endpoint, {
        ...defaultConfig,
        body: JSON.stringify({ value })
      })
    ).json()
    return rating;
  },
  getMovieById: id => {
    const endpoint = `${EMBED_MOVIE}?id=${id}`;

    return endpoint;
  },
  getTVShow: (id, season, episode) => {
    const endpoint = `${EMBED_TV}?id=${id}&s=${season}&e=${episode}`;
    return endpoint;
  }
}

export default apiSetting;
