import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchGenreList } from "../store/fetch";
import Header from "../components/header/index";
import Input from "../components/input/index";
import MovieCard from "../components/movieCard/index";
import Pagination from "../components/pagination/index";

const mapStateToProps = (state) => {
  return {
    dataMovie: state.dataMovie,
    searchMovie: state.searchMovie,
    genreList: state.genreList,
    error: state.error,
  };
};

function Dashboard(props) {
  const [type, setType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 5;
  const [arrayResultMovie, setArrayResultMovie] = useState([]);

  useEffect(() => {
    props.fetchGenreList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (value) => {
    console.log(value, props);
    if (value === "search") {
      setArrayResultMovie(props.searchMovie.results);
      setType(value);
    } else if (value === "genre") {
      setArrayResultMovie(props.dataMovie.results);
      setType(value);
    }
  };

  const indexOfLastPost = currentPage * moviesPerPage;
  const indexOfFirstPost = indexOfLastPost - moviesPerPage;

  return (
    <>
      <Header isMoviePage={false} />
      {console.log(arrayResultMovie)}
      <Input onChange={(value) => handleChange(value)} page={currentPage} />
      {type !== "" ? (
        <>
          {arrayResultMovie &&
            arrayResultMovie.length > 0 &&
            arrayResultMovie
              .slice(indexOfFirstPost, indexOfLastPost)
              .map((movie) => {
                return (
                  <MovieCard
                    key={movie.id}
                    data={movie}
                    genreList={props.genreList.genres}
                  />
                );
              })}
          <Pagination
            currentPage={currentPage}
            moviesPerPage={moviesPerPage}
            totalMovies={arrayResultMovie?.length}
            onClickLink={(number) => setCurrentPage(number)}
          />
        </>
      ) : null}
    </>
  );
}

export default connect(mapStateToProps, {
  fetchGenreList,
})(Dashboard);
