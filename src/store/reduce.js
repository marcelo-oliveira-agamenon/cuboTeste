const initialState = {
  searchMovie: [],
  genreList: [],
  dataMovie: [],
  movieDetails: [],
  error: []
};

function rootReducer(state = initialState, action) {
  if (action.type === "dataMovie") {
    return Object.assign({}, state, {
      dataMovie: action.payload
    });
  } else if (action.type === "genreList") {
    return Object.assign({}, state, {
      genreList: action.payload
    });
  } else if (action.type === "searchMovie") {
    return Object.assign({}, state, {
      searchMovie: action.payload
    });
  } else if (action.type === "movieDetails") {
    return Object.assign({}, state, {
      movieDetails: action.payload
    });
  } else if (action.type === "error") {
    return Object.assign({}, state, {
      error: action.payload
    });
  }
  return state;
}

export default rootReducer;
