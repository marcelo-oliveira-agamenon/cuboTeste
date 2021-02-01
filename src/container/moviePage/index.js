import React, { useEffect } from "react";
import Header from "../../components/header/index";
import {
  ContainerDiv,
  PreviewDiv,
  DescriptionMovie,
  DescriptionTitle,
  TitleDiv,
  TitleMovie,
  ReleaseDataMovie,
  GenreTagMovie,
  GenreTagMovieDiv,
  InfoDiv,
  InfoComponentDiv,
  InfoTitle,
  InfoTitleResponse,
  PopularityMovie,
  DivImage,
  Image,
  SubTitleDiv1,
  SubTitleDiv2,
  DivBlock,
  DivLine1,
  DivLine2,
  LineSeparator,
} from "./styles";
import moment from "moment";
import { connect } from "react-redux";
import { fetchMovieDetails } from "../../store/fetch";
import NumberFormat from "react-number-format";
import Loader from "react-loader-spinner";

const mapStateToProps = (state) => {
  return {
    movieDetails: state.movieDetails,
    error: state.error,
  };
};

function MoviePage(props) {
  useEffect(() => {
    const { dataMovie } = props.location.state;
    props.fetchMovieDetails(dataMovie.id);
  }, [props]);

  const { dataMovie, genreList } = props.location.state;
  const { movieDetails } = props;
  const dateLaunch =
    movieDetails.status === "Released" ? "Lançado" : "Não Lançado";
  const releaseDateFormat = moment(dataMovie.release_date).format("DD/MM/YYYY");
  let hours = Math.floor(movieDetails.runtime / 60);
  let minutes = movieDetails.runtime % 60;
  const movieTime = hours + "h " + minutes + "min";
  const popularity =
    dataMovie.vote_average !== 0 ? dataMovie.vote_average * 10 + " %" : "N/A";

  return (
    <>
      <Header isMoviePage={true} />
      {dataMovie === undefined || movieDetails === undefined ? (
        <Loader type="Oval" color="#1661b3" height={"5vh"} width={"5vw"} />
      ) : (
        <ContainerDiv>
          <TitleDiv>
            <SubTitleDiv1>
              <TitleMovie>{dataMovie.title}</TitleMovie>
            </SubTitleDiv1>

            <SubTitleDiv2>
              <ReleaseDataMovie>{releaseDateFormat}</ReleaseDataMovie>
            </SubTitleDiv2>
          </TitleDiv>

          <PreviewDiv>
            <DivBlock>
              <DescriptionTitle>Sinopse</DescriptionTitle>
              <LineSeparator />
              <DescriptionMovie>
                {dataMovie.overview === ""
                  ? "Não há descrição para este filme"
                  : dataMovie.overview}
              </DescriptionMovie>

              <DescriptionTitle>Informações</DescriptionTitle>
              <LineSeparator />
              <InfoDiv>
                <InfoComponentDiv>
                  <InfoTitle>Situação</InfoTitle>
                  <InfoTitleResponse>{dateLaunch}</InfoTitleResponse>
                </InfoComponentDiv>

                <InfoComponentDiv>
                  <InfoTitle>Idioma</InfoTitle>
                  <InfoTitleResponse>
                    {movieDetails.spoken_languages !== undefined
                      ? movieDetails.spoken_languages.map((lang) => {
                          return lang.name + " ";
                        })
                      : null}
                  </InfoTitleResponse>
                </InfoComponentDiv>

                <InfoComponentDiv>
                  <InfoTitle>Duração</InfoTitle>
                  <InfoTitleResponse>{movieTime}</InfoTitleResponse>
                </InfoComponentDiv>

                <InfoComponentDiv>
                  <InfoTitle>Orçamento</InfoTitle>
                  <InfoTitleResponse>
                    <NumberFormat
                      value={movieDetails.budget}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </InfoTitleResponse>
                </InfoComponentDiv>

                <InfoComponentDiv>
                  <InfoTitle>Receita</InfoTitle>
                  <InfoTitleResponse>
                    <NumberFormat
                      value={movieDetails.revenue}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </InfoTitleResponse>
                </InfoComponentDiv>

                <InfoComponentDiv>
                  <InfoTitle>Lucro</InfoTitle>
                  <InfoTitleResponse>
                    <NumberFormat
                      value={movieDetails.revenue - movieDetails.budget}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </InfoTitleResponse>
                </InfoComponentDiv>
              </InfoDiv>

              <GenreTagMovieDiv>
                <DivLine1>
                  {genreList.map((genre) => {
                    return (
                      <GenreTagMovie key={genre.id}>{genre.name}</GenreTagMovie>
                    );
                  })}
                </DivLine1>
                <DivLine2>
                  <PopularityMovie>{popularity}</PopularityMovie>
                </DivLine2>
              </GenreTagMovieDiv>
            </DivBlock>

            <DivImage>
              {dataMovie.poster_path === undefined ? (
                <Loader
                  type="Oval"
                  color="#1661b3"
                  height={"5vh"}
                  width={"5vw"}
                />
              ) : (
                <Image
                  src={
                    "http://image.tmdb.org/t/p/w185/" + dataMovie.poster_path
                  }
                  alt="poster Movie"
                />
              )}
            </DivImage>
          </PreviewDiv>
        </ContainerDiv>
      )}
    </>
  );
}

export default connect(mapStateToProps, {
  fetchMovieDetails,
})(MoviePage);
