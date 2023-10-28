import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieListPage from "./pages/MovieListPage";

function App() {
  const genreListURL = "https://api.themoviedb.org/3/genre/movie/list";
  const baseUrl = "https://api.themoviedb.org/3/discover/movie";
  const apiReadToken =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzUyODY0MmY5OTA4OTkwMzIyYzFiOTRlYzEzMDdkZCIsInN1YiI6IjY1M2QzZWViZTg5NGE2MDExY2EzNzdiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-bkQOq6flSauWpkEAQFljST3o1gPxRKKSlv_QaY4trU";
  const movieGenre = "53";
  //takes in number input

  const [genreList, setGenreList] = useState([]);

  //api key not working, we need to use header token
  // const apiKey = "?api_key=bc528642f9908990322c1b94ec1307dd";

  function fetchMovieGenres() {
    axios
      .get(`${genreListURL}`, {
        headers: {
          accept: "application/json",
          Authorization: apiReadToken,
        },
      })
      .then((response) => {
        setGenreList(response.data.genres);
      });
  }
  useEffect(() => {
    fetchMovieGenres();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header genreList={genreList} />
        <Routes>
          <Route path="/" element={<MovieListPage />} />
          <Route path="/:genreId" element={<MovieListPage />} />
          <Route
            path="*"
            element={
              <div>
                <h1>404 Error</h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
      {/* <MovieList movieData={movieData} /> */}
    </div>
  );
}

export default App;
