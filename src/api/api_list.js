import axios from 'axios';

//TODO get popular movies**************

export const getPopularMovies = async () => {
  const resp = await axios.get(
    'https://api.themoviedb.org/3/movie/popular?api_key=f2d8ce7b361b8bf35c08c99a3acffceb',
  );
  return resp.data.results;
};

//TODO get upcoming movies***********

export const getUpcomingMovies = async () => {
  const resp = await axios.get(
    'https://api.themoviedb.org/3/movie/upcoming?api_key=f2d8ce7b361b8bf35c08c99a3acffceb',
  );
  return resp.data.results;
};

//TODO get popular tv shows*************

export const getPopularTv = async () => {
  const resp = await axios.get(
    'https://api.themoviedb.org/3/movie/top_rated?api_key=f2d8ce7b361b8bf35c08c99a3acffceb',
  );
  return resp.data.results;
};

//TODO get popular family movies *************

export const getFamilyMovies = async () => {
  const resp = await axios.get(
    'https://api.themoviedb.org/3/discover/movie?api_key=f2d8ce7b361b8bf35c08c99a3acffceb&with_genres=10751',
  );
  return resp.data.results;
};

//TODO get documentries movies *************

export const getDocumentries = async () => {
  const resp = await axios.get(
    'https://api.themoviedb.org/3/discover/movie?api_key=f2d8ce7b361b8bf35c08c99a3acffceb&with_genres=99',
  );
  return resp.data.results;
};

//TODO get popular family movies *************https://api.themoviedb.org/3/movie/{movie_id}?api_key=f2d8ce7b361b8bf35c08c99a3acffceb
//

export const getMovie = async (id) => {
  const resp = await axios.get(
    'https://api.themoviedb.org/3/movie/'+(id)+'?api_key=f2d8ce7b361b8bf35c08c99a3acffceb',
  );
  return resp.data;
};