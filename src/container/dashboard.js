import React from "react";
import { connect } from "react-redux";
import { fetchGenreList } from "../store/fetch";
import Header from "../components/header/index";
import Input from "../components/input/index";
import MovieCard from "../components/movieCard/index";

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
    type: ""
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

  render() {
    return (
      <>
        <Header />
        <Input onChange={value => this.handleChange(value)} />
        {this.state.type !== ""
          ? arrayResultMovie.map(movie => {
              return (
                <MovieCard
                  key={movie.id}
                  data={movie}
                  genreList={this.props.genreList.genres}
                />
              );
            })
          : undefined}
      </>
    );
  }
}

export default connect(mapStateToProps, {
  fetchGenreList
})(Dashboard);
