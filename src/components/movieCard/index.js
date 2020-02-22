import React from "react";
import {
  ContainerMovieCard,
  TitleMovie,
  DivImage,
  DescriptionMovie,
  PopularityMovie,
  ContainerDiv,
  ReleaseDateMovie,
  GenreTagMovie,
  GenreTagMovieDiv,
  SecondDiv,
  ThirdDiv,
  FourDiv,
  FiveDiv,
  ImageTag
} from "./styles";
import { Link } from "react-router-dom";

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
      <ContainerDiv>
        <DivImage>
          <ImageTag
            src={"http://image.tmdb.org/t/p/w185/" + props.data.poster_path}
            alt="poster Movie"
          />
        </DivImage>
        <SecondDiv>
          <ThirdDiv>
            <PopularityMovie>{popularity}</PopularityMovie>
            <TitleMovie>{props.data.title}</TitleMovie>
          </ThirdDiv>
          <ReleaseDateMovie>{props.data.release_date}</ReleaseDateMovie>
          <FourDiv>
            <DescriptionMovie>
              {props.data.overview === ""
                ? "Não há descrição para este filme"
                : props.data.overview}
            </DescriptionMovie>
            <FiveDiv>
              {genres.map(genre => {
                return (
                  <GenreTagMovieDiv key={genre.id}>
                    <GenreTagMovie>{genre.name}</GenreTagMovie>
                  </GenreTagMovieDiv>
                );
              })}
            </FiveDiv>
          </FourDiv>
        </SecondDiv>
      </ContainerDiv>
    </ContainerMovieCard>
  );
}

export default MovieCard;
