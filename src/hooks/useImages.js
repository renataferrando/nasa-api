import { useEffect, useState, useContext } from "react";
import { useParams, useSearchParams, useLocation } from "react-router-dom";
import ImagesContext from "../context/ImagesContext";
import RoversContext from "../context/RoversContext";
import getImages from "../service/getImages";

function useImages() {
  const { images, setImages } = useContext(ImagesContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const { maxdate } = useContext(RoversContext);
  const [searchParams, setSearchParams] = useSearchParams({
    earth_date: maxdate,
  });

  useEffect(() => {
    setLoading(true);
    setSearchParams(searchParams);
    getImages({ id, params: searchParams })
      .then((response) => {
        setImages(response.data.photos);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }, [searchParams]);

  return {
    images,
    loading,
    error,
    searchParams,
    setSearchParams,
    id,
  };
}

export default useImages;
