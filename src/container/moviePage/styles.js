import styled from "styled-components";

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;

  .maindiv {
    width: 90%;
    margin-top: 5vh;
    padding-bottom: 4vh;
  }

  .videos {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 50px;
  }
`;

export const TitleDiv = styled.div`
  width: 100%;
  height: 70px;
  display: inline-flex;
  background-color: #dbd8d8;
`;

export const SubTitleDiv1 = styled.div`
  align-self: center;
  padding-left: 2vw;
`;

export const SubTitleDiv2 = styled.div`
  margin-left: auto;
  padding-right: 2vw;
  align-self: center;
`;

export const PreviewDiv = styled.div`
  display: inline-flex;
  flex-direction: row;
  margin-top: 1vh;
  width: 100%;
`;

export const TitleMovie = styled.h1`
  font-family: Lato, sans-serif;
  font-size: 1.7vw;
  font-weight: 100;
  color: #1661b3;
`;

export const DescriptionTitle = styled.h2`
  font-family: Lato, sans-serif;
  font-size: 1vw;
  color: #1661b3;
  margin: 3vh 0 3vh 0;
`;

export const DescriptionMovie = styled.p`
  font-family: Lato, sans-serif;
  font-size: 0.9vw;
  font-weight: 500;
  margin: 0;
  color: #959393;
  padding: 10px;
`;

export const ReleaseDataMovie = styled.p`
  font-family: Abel, sans-serif;
  font-size: 0.9vw;
  color: #8c9291;
  font-weight: 100;
`;

export const GenreTagMovie = styled.h5`
  font-family: Abel, sans-serif;
  font-size: 0.9vw;
  color: #1661b3;
  font-weight: 200;
  margin-top: 1vh;
  margin-right: 1vw;
  border: 1px solid #1661b3;
  border-radius: 10px;
  padding: 2px 5px;
  background-color: #fefefe;
`;

export const GenreTagMovieDiv = styled.div`
  display: flex;
  margin-top: 6vh;
  margin-left: 2vw;
`;

export const InfoDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
`;

export const InfoComponentDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoTitle = styled.h3`
  font-family: Abel, sans-serif;
  color: #1661b3;
  margin: 0;
  font-size: 1.1vw;
`;

export const InfoTitleResponse = styled.h4`
  font-family: Abel, sans-serif;
  color: #959393;
  font-size: 0.8vw;
`;

export const PopularityMovie = styled.h5`
  font-family: Abel, sans-serif;
  font-size: 28px;
  color: #63eadf;
  width: 100px;
  height: 100px;
  background-color: #1661b3;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #63eadf;
    width: 90px;
    height: 90px;
  }

  h5 {
    padding-top: 25px;
    text-align: center;
    border-radius: 50%;
    background-color: #1661b3;
    width: 80px;
    height: 80px;
  }
`;

export const DivImage = styled.div`
  display: inline-block;
  flex-grow: 2;
  width: auto;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const DivBlock = styled.div`
  display: inline-block;
  padding-left: 2vw;
  padding-right: 1vw;
  flex-grow: 2;
`;

export const DivLine1 = styled.div`
  display: inline-flex;
`;

export const DivLine2 = styled.div`
  margin-left: 45vw;
`;

export const LineSeparator = styled.hr`
  border: 0;
  border-top: 2px solid #63eadf;
`;
