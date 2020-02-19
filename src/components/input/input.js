import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ContainerInput, TextInput } from "./style";
import { fetchSearchMovie, fetchGenreMovie } from "../../store/fetch";

const mapStateToProps = state => {
  return {
    dataMovie: state.dataMovie,
    searchMovie: state.searchMovie,
    genreList: state.genreList,
    error: state.error
  };
};

export function Input(props) {
  const [genreList, setGenreList] = useState();
  const [valueInput, setValueInput] = useState("");

  const handleChange = event => {
    setValueInput(event.target.value);
  };

  useEffect(() => {
    if (valueInput !== "") {
      fetchSearchMovie(valueInput, 1);
    }
  }, [valueInput]);

  return (
    <>
      {console.log("input", props)}
      <ContainerInput>
        <TextInput
          type="text"
          name="search"
          value={valueInput}
          onChange={handleChange}
        />
      </ContainerInput>
    </>
  );
}

export default connect(mapStateToProps, {
  fetchGenreMovie,
  fetchSearchMovie
})(Input);
