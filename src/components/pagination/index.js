import React from "react";
import { DivNumbers } from "./styles";

const Pagination = ({
  moviesPerPage,
  totalMovies,
  onClickLink,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <DivNumbers>
      {pageNumbers.map((number) => {
        return (
          <div
            key={number}
            onClick={() => onClickLink(number)}
            className={currentPage === number ? "atualPage" : "page"}
          >
            {currentPage === number ? (
              <div>
                <p>{number}</p>
              </div>
            ) : (
              <h5>{number}</h5>
            )}
          </div>
        );
      })}
    </DivNumbers>
  );
};

export default Pagination;
