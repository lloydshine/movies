import "./movie.css";

export default function Movie({ props, setSelected }) {
  return (
    <div className="movie">
      <img onClick={() => setSelected(props.imdbID)} src={props.Poster} alt="img" />
      <div className="title">
        <p className="title-text" onClick={() => setSelected(props.imdbID)}>
          {props.Title}
        </p>
        <div className="info">
          <p>{props.Year}</p>
          <p className="type">{props.Type}</p>
        </div>
      </div>
    </div>
  );
}
