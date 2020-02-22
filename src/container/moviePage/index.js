import React from "react";
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
  SubTitleDiv2
} from "./styles";
import moment from "moment";
import { connect } from "react-redux";
import { fetchMovieDetails } from "../../store/fetch";
import NumberFormat from "react-number-format";

const mapStateToProps = state => {
  return {
    movieDetails: state.movieDetails,
    error: state.error
  };
};

export class MoviePage extends React.Component {
  componentDidMount() {
    const { dataMovie } = this.props.location.state;
    this.props.fetchMovieDetails(dataMovie.id);
  }
  render() {
    const { dataMovie, genreList } = this.props.location.state;
    const { movieDetails } = this.props;
    const dateLaunch =
      movieDetails.status === "Released" ? "Lançado" : "Não Lançado";
    const releaseDateFormat = moment(dataMovie.release_date).format(
      "DD-MM-YYYY"
    );
    let hours = Math.floor(movieDetails.runtime / 60);
    let minutes = movieDetails.runtime % 60;
    const movieTime = hours + "h " + minutes + "min";
    const popularity =
      dataMovie.vote_average !== 0 ? dataMovie.vote_average * 10 + " %" : "N/A";
    return (
      <>
        {console.log(dataMovie)}
        <Header />
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
            <DescriptionTitle>Sinopse</DescriptionTitle>

            <DescriptionMovie>
              {dataMovie.overview === ""
                ? "Não há descrição para este filme"
                : dataMovie.overview}
            </DescriptionMovie>

            <TitleMovie>Informações</TitleMovie>

            <InfoDiv>
              <InfoComponentDiv>
                <InfoTitle>Situação</InfoTitle>
                <InfoTitleResponse>{dateLaunch}</InfoTitleResponse>
              </InfoComponentDiv>

              <InfoComponentDiv>
                <InfoTitle>Idioma</InfoTitle>
                <InfoTitleResponse>
                  {movieDetails.spoken_languages !== undefined
                    ? movieDetails.spoken_languages.map(lang => {
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
              {genreList.map(genre => {
                return (
                  <GenreTagMovie key={genre.id}>{genre.name}</GenreTagMovie>
                );
              })}
              <PopularityMovie>{popularity}</PopularityMovie>
            </GenreTagMovieDiv>
          </PreviewDiv>

          <DivImage>
            <Image
              src={"http://image.tmdb.org/t/p/w185/" + dataMovie.poster_path}
              alt="poster Movie"
            />
          </DivImage>
        </ContainerDiv>
      </>
    );
  }
}

export default connect(mapStateToProps, {
  fetchMovieDetails
})(MoviePage);
