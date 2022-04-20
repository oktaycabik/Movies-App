import axios from "axios";

export const getPopulerMovies = async () => {
  const res = await axios(
    "https://api.themoviedb.org/3/movie/popular?api_key=84c3ca08a3d308752200112e54823f34&language=tr-US&page=1"
  );
  return res.data.results;
};
export const getMovies = async (id) => {
  const res = await axios(
    `https://api.themoviedb.org/3/movie/${id}?language=tr-TR&api_key=84c3ca08a3d308752200112e54823f34`
  );
  return res.data;
};
export const getGenres = async () => {
  const res = await axios(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=84c3ca08a3d308752200112e54823f34&language=tr-TR`
  );
  return res.data.genres;
};
export const getGenresByMovies = async (genresId, sort,imdb,page) => {
  let url = `https://api.themoviedb.org/3/discover/movie?api_key=84c3ca08a3d308752200112e54823f34&language=tr-TR&page=${page}&with_genres=${genresId}`;
  if (sort) {
    url += "&primary_release_year=" + sort;
  }
  if (imdb) {
    url += "&vote_average.gte=" + imdb;
  }
  const res = await axios(url);

  console.log("url", url);
  return res.data.results;
};

export const getSmilarMovies = async (movieId) => {
  const res = await axios(
       `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=84c3ca08a3d308752200112e54823f34&language=tr-TR&page=1`
    );
  return res.data.results;
};