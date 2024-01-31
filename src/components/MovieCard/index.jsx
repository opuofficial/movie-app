import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const {
    id,
    name,
    premiered,
    genres,
    rating: { average },
  } = movie.show;

  const medium = movie.show.image?.medium;

  return (
    <div className="movie__item">
      <div className="movie__poster">
        <img src={medium} alt={name} />
      </div>
      <div className="movie__title">
        <div className="title">{name}</div>
        <div className="year">{getYearFromString(premiered)}</div>
      </div>
      <div className="genres">
        {genres.map((genre) => (
          <span key={genre}>{genre}</span>
        ))}
      </div>
      <div className="movie__item__footer">
        <div className="rating">
          {average && (
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
          )}
          <span>{average}</span>
        </div>
        <Link to={`/movie/${id}`}>
          <button>Summary</button>
        </Link>
      </div>
    </div>
  );
}

function getYearFromString(dateString) {
  const year = dateString?.split("-")[0];

  return year;
}

export default MovieCard;
