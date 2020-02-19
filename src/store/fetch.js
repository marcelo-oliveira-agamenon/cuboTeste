import axios from "axios";

const apiPath = "https://api.themoviedb.org/3";
const apiToken = "96d9ff74ca950bb80074450659529bbc";

//functions
export function fetchSearchMovie(searchString, page) {
  return function(dispatch) {
    return axios
      .get(
        `${apiPath}/search/movie?api_key=${apiToken}&language=pt-BR&query=${searchString}&page=${page}`
      )
      .then(response => {
        dispatch({
          type: "searchMovie",
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: "error",
          payload: error
        });
      });
  };
}

export function fetchGenreList() {
  return function(dispatch) {
    return axios
      .get(`${apiPath}/genre/movie/list?api_key=${apiToken}&language=pt-BR`)
      .then(response => {
        dispatch({
          type: "genreList",
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: "error",
          payload: error
        });
      });
  };
}

export function fetchGenreMovie(idGenre, page) {
  return function(dispatch) {
    return axios
      .get(
        `${apiPath}/discover/movie?api_key=${apiToken}&language=pt-BR&sort_by=popularity.asc&page=${page}&with_genres=${idGenre}`
      )
      .then(response => {
        dispatch({
          type: "dataMovie",
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: "error",
          payload: error
        });
      });
  };
}
