import "./movies.css";
import { Movie } from "../../components";

export default function Movies({ movies, search, setSelected }) {
  return (
    <section className="movies" id="movies">
      <p className="result">Search Results for {search}</p>
      <div className="movies-container">
        {movies === null ? (
          <></> // Render nothing if movies is null
        ) : movies.Response === "False" ? (
          <p className="not-found">No movies found</p>
        ) : (
          movies.Search.map((movie) => (
            <Movie key={movie.imdbID} props={movie} setSelected={setSelected} />
          ))
        )}
      </div>
    </section>
  );
}
