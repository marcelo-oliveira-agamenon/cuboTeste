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

let genreDecision = false;
let genreID;

export class Input extends React.Component {
  state = {
    valueInput: ""
  };

  handleKeyPress = event => {
    this.props.genreList.genres.map(genre => {
      if (this.state.valueInput === genre.name) {
        genreDecision = true;
        genreID = genre.id;
      }
    });
    if (event.key === "Enter") {
      if (genreDecision) {
        this.props.fetchGenreMovie(genreID, 2).then(() => {
          this.props.onChange("genre");
        });
        genreDecision = false;
      } else {
        this.props.fetchSearchMovie(this.state.valueInput, 1).then(() => {
          this.props.onChange("search");
        });
        genreDecision = false;
      }
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
            placeholder={"Busque um filme por nome ou gênero ..."}
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
