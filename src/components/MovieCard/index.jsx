import React from "react";

function MovieCard({ movie }) {
  const {
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
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
          <span>{average}</span>
        </div>
        <button>Summary</button>
      </div>
    </div>
  );
}

function getYearFromString(dateString) {
  const year = dateString?.split("-")[0];

  return year;
}

export default MovieCard;
