import React from "react";
import { Link, useParams } from "react-router-dom";

import useFetchSingleShow from "../../hooks/useFetchSingleShow";

function MovieSummary() {
  const { id } = useParams();
  const { loading, data, error } = useFetchSingleShow(id);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section>
      <div className="container">
        <div className="movie__summary">
          <div className="movie__poster">
            <img src={data.image?.original} alt={data.name} />
          </div>
          <div className="summary">
            <h3>{data.name}</h3>
            <p>{sanitizeHTML(data.summary)}</p>
            <Link to={`/movie/ticket?title=${data.name}`}>
              <button>Book a Ticket</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function sanitizeHTML(inputString) {
  return inputString.replace(/<[^>]*>/g, "");
}

export default MovieSummary;
