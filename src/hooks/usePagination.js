import { useEffect, useState } from "react";

const usePagination = ({ data }) => {
  const POST_PER_PAGE = 25;
  const [currentPage, setCurrentPage] = useState(1);
  let lastPhoto = currentPage * POST_PER_PAGE;
  let firstPhoto = lastPhoto - POST_PER_PAGE;
  const currentPosts = data.slice(firstPhoto, lastPhoto);
  const totalPosts = data;
  const pageNumber = [];
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  for (let i = 1; i <= Math.ceil(totalPosts.length / POST_PER_PAGE); i++) {
    pageNumber.push(i);
  }

  useEffect(() => {
    setCurrentPage(1);
    setmaxPageNumberLimit(5);
    setmaxPageNumberLimit(5);
    setminPageNumberLimit(0);
  }, [data]);

  return {
    currentPosts,
    totalPosts,
    pageNumber,
    currentPage,
    pageNumberLimit,
    maxPageNumberLimit,
    minPageNumberLimit,
    setpageNumberLimit,
    setmaxPageNumberLimit,
    setminPageNumberLimit,
    setCurrentPage,
  };
};

export default usePagination;
