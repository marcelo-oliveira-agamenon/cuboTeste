import React from "react";
import { DivNumbers, Numbers } from "./styles";

const Pagination = ({ moviesPerPage, totalMovies, onClickLink }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <DivNumbers>
      {pageNumbers.map((number) => {
        return (
          <Numbers key={number} onClick={() => onClickLink(number)}>
            {number}
          </Numbers>
        );
      })}
    </DivNumbers>
  );
};

export default Pagination;
