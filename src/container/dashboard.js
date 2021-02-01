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

let arrayResultMovie;

function Dashboard(props) {
  const [type, setType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(5);

  useEffect(() => {
    props.fetchGenreList();
  }, [props]);

  const handleChange = (value) => {
    if (value === "search") {
      arrayResultMovie = props.searchMovie.results;
      setType(value);
    } else if (value === "genre") {
      arrayResultMovie = props.dataMovie.results;
      setType(value);
    }
  };

  const handleClick = (numberPage) => {
    setCurrentPage(numberPage);
  };

  const indexOfLastPost = currentPage * moviesPerPage;
  const indexOfFirstPost = indexOfLastPost - moviesPerPage;
  const currentMovieArray =
    arrayResultMovie !== undefined &&
    arrayResultMovie.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <Header isMoviePage={false} />

      <Input onChange={(value) => handleChange(value)} />
      {type !== "" ? (
        <>
          {currentMovieArray.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                data={movie}
                genreList={props.genreList.genres}
              />
            );
          })}
          <Pagination
            moviesPerPage={moviesPerPage}
            totalMovies={arrayResultMovie.length}
            onClickLink={(number) => handleClick(number)}
          />
        </>
      ) : undefined}
    </>
  );
}

export default connect(mapStateToProps, {
  fetchGenreList,
})(Dashboard);
