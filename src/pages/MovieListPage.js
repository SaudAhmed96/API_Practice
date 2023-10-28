import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function MovieListPage() {
  const genreListURL = "https://api.themoviedb.org/3/genre/movie/list";
  const baseUrl = "https://api.themoviedb.org/3/discover/movie";
  const apiReadToken =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzUyODY0MmY5OTA4OTkwMzIyYzFiOTRlYzEzMDdkZCIsInN1YiI6IjY1M2QzZWViZTg5NGE2MDExY2EzNzdiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-bkQOq6flSauWpkEAQFljST3o1gPxRKKSlv_QaY4trU";
  const { genreId } = useParams();

  const [movieData, setMovieData] = useState([]);
  function fetchMovieData() {
    axios
      .get(`${baseUrl}?with_genres=${genreId}`, {
        headers: {
          accept: "application/json",
          Authorization: apiReadToken,
        },
      })
      .then((response) => {
        console.log(response.data.results);
        console.log(genreId);
        setMovieData(response.data.results);
      });
  }
  useEffect(() => {
    let genreCheck = genreId;
    if (!genreCheck) {
      setMovieData([]);
    } else {
      fetchMovieData();
    }
  }, [genreId]);

  return (
    <>
      <h1>Movie List Page</h1>
      <div>
        {movieData.map((movie) => {
          return <p key={movie.id}>{movie.original_title}</p>;
        })}
      </div>
    </>
  );
}

export default MovieListPage;
