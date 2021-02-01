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
  ImageTag,
} from "./styles";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import moment from "moment";

export function MovieCard(props) {
  const genres = props.genreList.filter((genre) => {
    for (let i = 0; props.data.genre_ids.length > i; i++) {
      if (props.data.genre_ids[i] === genre.id) {
        return genre.name;
      }
    }
    return null;
  });

  const popularity =
    props.data.vote_average !== 0 ? props.data.vote_average * 10 + " %" : "N/A";
  const dateFormat = moment(props.data.release_date).format("DD/MM/YYYY");

  return (
    <ContainerMovieCard>
      {props.data === undefined || props.genreList.length === 0 ? (
        <Loader type="Oval" color="#1661b3" height={"5vh"} width={"5vw"} />
      ) : (
        <Link
          to={{
            pathname: "/movie",
            state: {
              dataMovie: props.data,
              genreList: genres,
            },
          }}
          style={{ textDecoration: "none" }}
        >
          <ContainerDiv>
            <DivImage>
              {props.data.poster_path === undefined ? (
                <Loader
                  type="Oval"
                  color="#1661b3"
                  height={"5vh"}
                  width={"5vw"}
                />
              ) : (
                <ImageTag
                  src={
                    "http://image.tmdb.org/t/p/w185/" + props.data.poster_path
                  }
                  alt="poster Movie"
                />
              )}
            </DivImage>
            <SecondDiv>
              <ThirdDiv>
                <PopularityMovie>{popularity}</PopularityMovie>
                <TitleMovie>{props.data.title}</TitleMovie>
              </ThirdDiv>
              <ReleaseDateMovie>{dateFormat}</ReleaseDateMovie>
              <FourDiv>
                <DescriptionMovie>
                  {props.data.overview === ""
                    ? "Não há descrição para este filme"
                    : props.data.overview}
                </DescriptionMovie>
                <FiveDiv>
                  {genres.map((genre) => {
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
        </Link>
      )}
    </ContainerMovieCard>
  );
}

export default MovieCard;
