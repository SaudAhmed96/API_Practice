import React from "react";
import "./GenreList.scss";
import { Link } from "react-router-dom";

function GenreList({ genreList }) {
  return (
    <>
      <h1>Genres</h1>
      <div className="genre__list">
        {genreList.map((genre) => {
          return (
            <Link key={genre.id} className="genre__link" to={`/${genre.id}`}>
              <p key={genre.id}>{genre.name}</p>
            </Link>
          );
        })}
      </div>
      <Link to={`/`}>Back to Home</Link>
    </>
  );
}

export default GenreList;
