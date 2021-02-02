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

function Input(props, { page }) {
  const [valueInput, setValueInput] = useState("");
  const [genreDecision, setGenreDecision] = useState(false);
  const [genreID, setGenreID] = useState();

  const handleKeyPress = (event) => {
    props.genreList.genres.forEach((genre) => {
      if (valueInput === genre.name) {
        setGenreDecision(true);
        setGenreID(genre.id);
      }
    });

    if (event.key === "Enter") {
      if (genreDecision) {
        props.fetchGenreMovie(genreID, page).then(() => {
          props.onChange("genre");
        });
        setGenreDecision(false);
      } else {
        props.fetchSearchMovie(valueInput, page).then(() => {
          props.onChange("search");
        });
        setGenreDecision(false);
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
