const initialState = {
  searchMovie: [],
  genreList: [],
  dataMovie: [],
  error: []
};

function rootReducer(state = initialState, action) {
  if (action.type === "dataMovie") {
    return Object.assign({}, state, {
      dataMovie: state.dataMovie.concat(action.payload)
    });
  } else if (action.type === "genreList") {
    return Object.assign({}, state, {
      genreList: state.genreList.concat(action.payload)
    });
  } else if (action.type === "searchMovie") {
    return Object.assign({}, state, {
      searchMovie: state.searchMovie.concat(action.payload)
    });
  } else if (action.type === "error") {
    return Object.assign({}, state, {
      error: state.error.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;
