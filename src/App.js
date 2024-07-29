import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./components/MovieCard";
//Api key
const API_URL = "http://www.omdbapi.com/?apikey=4650ae25";

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Deadpool");
  }, []);

  return (
    <div className="App">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value="Deadpool"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search.svg" onClick={() => {}} />
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
