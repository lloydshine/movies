import "./modal.css";

export default function Modal({ movie, setSelectedMovie }) {
  return (
    <div className="modal-container">
      <div className="modal">
        <img
          src={movie.Poster}
          alt="poster"
          onClick={() => setSelectedMovie(null)}
        />
        <div className="info">
          <p style={{color:"gray"}}>{movie.Year} | {movie.Runtime}</p>
          <h2>{movie.Title}</h2>
          <p>{movie.Plot}</p>
          <p>Genre: {movie.Genre}</p>
        </div>
      </div>
    </div>
  );
}
