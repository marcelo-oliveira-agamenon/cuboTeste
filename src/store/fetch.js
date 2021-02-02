import api from "../config";

const apiToken = process.env.REACT_APP_API_KEY;

//functions
export function fetchSearchMovie(searchString, page) {
  return function (dispatch) {
    return api
      .get(
        `/search/movie?api_key=${apiToken}&language=pt-BR&query=${searchString}&page=${page}`
      )
      .then((response) => {
        dispatch({
          type: "searchMovie",
          payload: response.data,
        });

        return Promise.resolve();
      })
      .catch((error) => {
        dispatch({
          type: "error",
          payload: error,
        });
      });
  };
}

export function fetchGenreList() {
  return function (dispatch) {
    return api
      .get(`/genre/movie/list?api_key=${apiToken}&language=pt-BR`)
      .then((response) => {
        dispatch({
          type: "genreList",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "error",
          payload: error,
        });
      });
  };
}

export function fetchGenreMovie(idGenre, page) {
  return function (dispatch) {
    return api
      .get(
        `/discover/movie?api_key=${apiToken}&language=pt-BR&sort_by=popularity.asc&page=${page}&with_genres=${idGenre}`
      )
      .then((response) => {
        dispatch({
          type: "dataMovie",
          payload: response.data,
        });

        return Promise.resolve();
      })
      .catch((error) => {
        dispatch({
          type: "error",
          payload: error,
        });
      });
  };
}

export function fetchMovieDetails(movieID) {
  return function (dispatch) {
    let videos;
    api
      .get(`/movie/${movieID}/videos?api_key=${apiToken}&language=en-US`)
      .then((response) => {
        videos = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
    //&append_to_response=videos
    return api
      .get(`/movie/${movieID}?api_key=${apiToken}&language=pt-BR`)
      .then((response) => {
        let data = { ...response.data, videos: videos };
        dispatch({
          type: "movieDetails",
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "error",
          payload: error,
        });
      });
  };
}
