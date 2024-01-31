import { useState, useEffect } from "react";

const useFetchSingleShow = (showId) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSingleShow = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${showId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSingleShow();
  }, [showId]);

  return { loading, data, error };
};

export default useFetchSingleShow;
