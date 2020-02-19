import React from "react";
import { connect } from "react-redux";
import { fetchGenreList } from "../store/fetch";

const mapStateToProps = state => {
  return {
    dataMovie: state.dataMovie,
    searchMovie: state.searchMovie,
    genreList: state.genreList,
    error: state.error
  };
};

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGenreList();
  }

  render() {
    return (
      <div>
        {console.log(this.props)}
        <h2>dasd</h2>
      </div>
    );
  }
}

export default connect(mapStateToProps, { fetchGenreList })(Dashboard);
