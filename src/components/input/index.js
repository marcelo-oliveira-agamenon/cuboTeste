import React, { useState } from "react";
import { connect } from "react-redux";
import { ContainerInput, TextInput } from "./styles";
import { fetchSearchMovie, fetchGenreMovie } from "../../store/fetch";

const mapStateToProps = (state) => {
  return {
    dataMovie: state.dataMovie,
    searchMovie: state.searchMovie,
    genreList: state.genreList,
    error: state.error,
  };
};

let genreDecision = false;
let genreID;

function Input(props) {
  const [valueInput, setValueInput] = useState("");

  const handleKeyPress = (event) => {
    props.genreList.genres.map((genre) => {
      if (valueInput === genre.name) {
        genreDecision = true;
        genreID = genre.id;
      }
    });
    if (event.key === "Enter") {
      if (genreDecision) {
        props.fetchGenreMovie(genreID, 2).then(() => {
          props.onChange("genre");
        });
        genreDecision = false;
      } else {
        props.fetchSearchMovie(this.state.valueInput, 1).then(() => {
          props.onChange("search");
        });
        genreDecision = false;
      }
    }
  };

  const handleChange = (event) => {
    setValueInput(event.target.value);
  };

  return (
    <>
      <ContainerInput>
        <TextInput
          type="text"
          name="search"
          value={valueInput}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder={"Busque um filme por nome ou gênero ..."}
        />
      </ContainerInput>
    </>
  );
}

export default connect(mapStateToProps, {
  fetchGenreMovie,
  fetchSearchMovie,
})(Input);
