import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./components/MovieCard";
//Api key
const API_URL = "http://www.omdbapi.com/?apikey=4650ae25";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState(" ");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };


  return (
    <div className="App">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={SearchIcon} alt="search.svg" onClick={() => searchMovies(search)} />
      </div>
      <div className="container">
        {movies?.length > 0 ? (
          movies.map((movies, index) => (
            <MovieCard key={index} movies={movies} />
          ))
        ) : (
          <div className="empty">
            <p>No movies found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
