import { useEffect, useState, useContext } from "react";
import RoversContext from "../context/RoversContext";
import getRovers from "../service/getRovers";

function useImages() {
  const { rovers, setRovers } = useContext(RoversContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getRovers()
      .then((response) => {
        setRovers(response.data.rovers);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return {
    rovers,
    loading,
    error,
  };
}

export default useImages;
