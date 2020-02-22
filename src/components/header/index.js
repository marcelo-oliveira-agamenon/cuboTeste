import React from "react";
import {
  ContainerHeader,
  TextHeader,
  ContainerText,
  ImageIcon
} from "./styles";
import { Link } from "react-router-dom";
import IconBack from "../../assets/left-arrow.svg";

const Header = ({ isMoviePage }) => (
  <ContainerHeader>
    <ContainerText>
      {isMoviePage ? (
        <Link to="/">
          <ImageIcon src={IconBack} />
        </Link>
      ) : null}
      <TextHeader>Movies</TextHeader>
    </ContainerText>
  </ContainerHeader>
);

export default Header;
