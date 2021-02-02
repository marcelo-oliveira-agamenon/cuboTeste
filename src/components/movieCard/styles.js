import styled from "styled-components";

export const ContainerMovieCard = styled.div`
  margin-top: 5vh;
  margin-left: 18vw;
  margin-bottom: 3vh;
  width: 65vw;
  background-color: #f3f5f5;
`;

export const ContainerDiv = styled.div`
  width: 65vw;
  height: 33.9vh;
  display: flex;
  justify-content: flex-start;
`;

export const DivImage = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const TitleMovie = styled.h3`
  font-family: Abel, sans-serif;
  color: #63eadf;
  font-size: 2.1vw;
  font-weight: 100;
  margin-left: 100px;
`;

export const DescriptionMovie = styled.p`
  font-family: Lato, sans-serif;
  font-size: 0.8vw;
  font-weight: 600;
  margin: 15px;
  color: #959393;
  padding: 10px;
`;

export const PopularityMovie = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Abel, sans-serif;
  font-size: 1.4vw;
  background-color: #1661b3;
  font-weight: 100;
  color: #63eadf;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-left: 10px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #63eadf;
    width: 70px;
    height: 70px;
  }

  h5 {
    padding-top: 18px;
    text-align: center;
    border-radius: 50%;
    background-color: #1661b3;
    width: 60px;
    height: 60px;
  }
`;

export const ReleaseDateMovie = styled.h4`
  font-family: Abel, sans-serif;
  font-size: 0.9vw;
  color: #8c9291;
  font-weight: 100;
  margin: 1vh 0 0 6.8vw;
`;

export const GenreTagMovie = styled.h5`
  font-family: Abel, sans-serif;
  font-size: 15px;
  color: #1661b3;
  font-weight: 200;
  border: 1px solid #1661b3;
  border-radius: 18px;
  padding: 2px 12px;
  background-color: #fefefe;
`;

export const GenreTagMovieDiv = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  margin-right: 0.6vw;
`;

export const SecondDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 65vw;
`;

export const ThirdDiv = styled.div`
  display: flex;
  background-color: #1661b3;
  padding-top: 3vh;
`;

export const FourDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1vh;
`;

export const FiveDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2vw;
`;

export const ImageTag = styled.img`
  height: 34vh;
  width: 10vw;
`;
