import React from "react";

function SearchBox() {
  return (
    <div className="search__box">
      <div className="input__group">
        <input type="text" placeholder="Search movie or tv series" />
        <span>
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
    </div>
  );
}

export default SearchBox;
