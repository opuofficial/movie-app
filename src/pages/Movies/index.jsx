import React from "react";
import SearchBox from "../../components/SearchBox";
import SiteHeading from "../../components/SiteHeading";
import MovieCard from "../../components/MovieCard";

import useFetchShows from "../../hooks/useFetchShows";

function Movies() {
  const { loading, data, error } = useFetchShows();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <section>
        <div className="container">
          <SiteHeading />
          <SearchBox />

          <div className="movies__container">
            {data &&
              data.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Movies;
