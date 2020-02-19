import React from "react";
import { connect } from "react-redux";
import { fetchGenreList } from "../store/fetch";
import Header from "../components/header/header";
import Input from "../components/input/input";

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
    return (
      <>
        <Header />
        <Input />
        <h2>dasd</h2>
      </>
    );
  }
}

export default connect(mapStateToProps, {
  fetchGenreList
})(Dashboard);
