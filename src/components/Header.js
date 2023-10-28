import React from "react";
import GenreList from "./GenreList";

function Header({ genreList }) {
  return (
    <div>
      <GenreList genreList={genreList} />
    </div>
  );
}

export default Header;
