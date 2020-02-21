import React from "react";
import { ContainerMovieCard } from "./styles";

export function MovieCard(props) {
  const genres = props.genreList.filter(genre => {
    for (let i = 0; props.data.genre_ids.length > i; i++) {
      if (props.data.genre_ids[i] === genre.id) {
        return genre.name;
      }
    }
  });
  const popularity =
    props.data.vote_average !== 0 ? props.data.vote_average * 10 + " %" : "N/A";
  return (
    <ContainerMovieCard>
      {console.log("ajjj", props.data)}
      <img
        src={"http://image.tmdb.org/t/p/w185/" + props.data.poster_path}
        alt="poster Movie"
      />
      <h3>{props.data.title}</h3>
      <p>
        {props.data.overview === ""
          ? "Não há descrição para este filme"
          : props.data.overview}
      </p>
      <h4>{props.data.release_date}</h4>
      <h5>{popularity}</h5>
      {genres.length === 1 ? (
        <h5>{genres[0].name}</h5>
      ) : (
        genres.map(genre => {
          return <h5>{genre.name}</h5>;
        })
      )}
    </ContainerMovieCard>
  );
}

export default MovieCard;
