import React from "react";
import { connect } from "react-redux";
import { fetchGenreList } from "../store/fetch";
import Header from "../components/header/index";
import Input from "../components/input/index";
import MovieCard from "../components/movieCard/index";
import Pagination from "../components/pagination/index";

const mapStateToProps = state => {
  return {
    dataMovie: state.dataMovie,
    searchMovie: state.searchMovie,
    genreList: state.genreList,
    error: state.error
  };
};

let arrayResultMovie;

export class Dashboard extends React.Component {
  state = {
    type: "",
    currentPage: 1,
    moviesPerPage: 5
  };
  componentDidMount() {
    this.props.fetchGenreList();
  }

  handleChange = value => {
    if (value === "search") {
      arrayResultMovie = this.props.searchMovie.results;
      this.setState({ type: value });
    } else if (value === "genre") {
      arrayResultMovie = this.props.dataMovie.results;
      this.setState({ type: value });
    }
  };

  handleClick = numberPage => {
    this.setState({ currentPage: numberPage });
  };

  render() {
    const indexOfLastPost = this.state.currentPage * this.state.moviesPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.moviesPerPage;
    const currentMovieArray =
      arrayResultMovie !== undefined &&
      arrayResultMovie.slice(indexOfFirstPost, indexOfLastPost);
    return (
      <>
        <Header isMoviePage={false} />
        <Input onChange={value => this.handleChange(value)} />
        {this.state.type !== "" ? (
          <>
            {currentMovieArray.map(movie => {
              return (
                <MovieCard
                  key={movie.id}
                  data={movie}
                  genreList={this.props.genreList.genres}
                />
              );
            })}
            <Pagination
              moviesPerPage={this.state.moviesPerPage}
              totalMovies={arrayResultMovie.length}
              onClickLink={this.handleClick}
            />
          </>
        ) : (
          undefined
        )}
      </>
    );
  }
}

export default connect(mapStateToProps, {
  fetchGenreList
})(Dashboard);
