import React from "react";
import { connect } from "react-redux";
import { fetchGenreList } from "../store/fetch";
import Header from "../components/header/header";
import Input from "../components/input/input";
import MovieCard from "../components/movieCard/index";

const mapStateToProps = state => {
  return {
    dataMovie: state.dataMovie,
    searchMovie: state.searchMovie,
    genreList: state.genreList,
    error: state.error
  };
};

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchGenreList();
  }

  render() {
    let arrayResultMovie;
    if (this.props.searchMovie.length !== 0) {
      arrayResultMovie = this.props.searchMovie[0].results;
    }
    return (
      <>
        <Header />
        <Input />
        {this.props.searchMovie.length !== 0
          ? arrayResultMovie.map(movie => {
              return (
                <MovieCard
                  key={movie.id}
                  data={movie}
                  genreList={this.props.genreList[0].genres}
                />
              );
            })
          : console.log("sad")}
      </>
    );
  }
}

export default connect(mapStateToProps, {
  fetchGenreList
})(Dashboard);
