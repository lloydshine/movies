import "./hero.css";
import { Navbar } from "../../components";

export default function Hero({ setSearch, searchMovie }) {
  return (
    <section className="hero">
      <Navbar />
      <div className="main-search">
        <div className="intro">
          <h1>KintMovies</h1>
          <p>A place where you can netlfix and chill with your bayots!</p>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search Movie"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => searchMovie()}>
            <a href="#movies">Search</a>
          </button>
        </div>
      </div>
    </section>
  );
}
