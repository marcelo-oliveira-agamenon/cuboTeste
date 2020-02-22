import React from "react";
import { connect } from "react-redux";
import { ContainerInput, TextInput } from "./styles";
import { fetchSearchMovie, fetchGenreMovie } from "../../store/fetch";

const mapStateToProps = state => {
  return {
    dataMovie: state.dataMovie,
    searchMovie: state.searchMovie,
    genreList: state.genreList,
    error: state.error
  };
};

export class Input extends React.Component {
  state = {
    valueInput: ""
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.props.fetchSearchMovie(this.state.valueInput, 1);
    }
  };

  handleChange = event => {
    this.setState({ valueInput: event.target.value });
  };

  render() {
    return (
      <>
        <ContainerInput>
          <TextInput
            type="text"
            name="search"
            value={this.state.valueInput}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyPress}
            placeholder={"Busque um filme por nome ou gênero..."}
          />
        </ContainerInput>
      </>
    );
  }
}

export default connect(mapStateToProps, {
  fetchGenreMovie,
  fetchSearchMovie
})(Input);
