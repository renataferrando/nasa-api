import React from "react";
import "../styles/pagination.css";
import usePagination from "../hooks/usePagination";
import LeftArrow from "./svg/LeftArrow";
import RightArrow from "./svg/RightArrow";

const Pagination = ({ data, setCurrentPage, currentPage }) => {
  const {
    pageNumber,
    maxPageNumberLimit,
    minPageNumberLimit,
    pageNumberLimit,
    setmaxPageNumberLimit,
    setminPageNumberLimit,
  } = usePagination({ data });

  const handleNextbtn = () => {
    if (currentPage !== pageNumber.length) {
      setCurrentPage(currentPage + 1);
    } else {
      return;
    }
    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handlePrevbtn = () => {
    if (currentPage !== pageNumber[0]) {
      setCurrentPage(currentPage - 1);
    } else {
      return;
    }

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <div className="pagination">
      {minPageNumberLimit >= 1 && (
        <>
          <LeftArrow
            onClick={handlePrevbtn}
            disabled={currentPage === pageNumber[0] ? true : false}
          />
          <span className="three-dots">...</span>{" "}
        </>
      )}
      {pageNumber.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
            <button
              key={number}
              className={currentPage === number ? "page --active" : "page"}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </button>
          );
        } else {
          return null;
        }
      })}

      {pageNumber.length > maxPageNumberLimit && (
        <>
          <span className="three-dots">...</span>
          <RightArrow
            onClick={handleNextbtn}
            disabled={
              currentPage === pageNumber[pageNumber.length - 1] ? true : false
            }
          />
        </>
      )}
    </div>
  );
};

export default Pagination;
