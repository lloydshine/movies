import "./App.css";

import { useState } from "react";
import { Hero, Movies } from "./containers";
import { Modal } from "./components";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const searchMovie = async () => {
    if (search.length === 0) return;
    const response = await fetch(
      `http://www.omdbapi.com/?s=${search}&apikey=ff253a07`
    );
    const data = await response.json();
    setMovies(data);
  };

  const setSelected = async (id) => {
    if (id.length === 0) return;
    const response = await fetch(
      `http://www.omdbapi.com/?i=${id}&apikey=ff253a07`
    );
    const data = await response.json();
    setSelectedMovie(data);
  };

  return (
    <div className="App">
      <Hero setSearch={setSearch} searchMovie={searchMovie} />
      <Movies movies={movies} search={search} setSelected={setSelected} />
      {selectedMovie && (
        <Modal movie={selectedMovie} setSelectedMovie={setSelectedMovie} />
      )}
    </div>
  );
}

export default App;
