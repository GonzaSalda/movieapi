import { useEffect } from 'react';
import './App.css';

//Api key
const API_URL = "http://www.omdbapi.com/?apikey=4650ae25"


const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    console.log(data)
  }

  useEffect(() => {
     searchMovies("Dead pool")
  }, [])
  
  return (
    <div className="App">

    </div>
  );
}

export default App;
