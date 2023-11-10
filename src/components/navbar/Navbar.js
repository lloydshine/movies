import "./navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-logo">
        <p>KintMovies</p>
      </div>
      <div className="nav-links">
        <a href="#Home">Home</a>
        <a href="#Home">Movies</a>
        <button>Login</button>
      </div>
    </header>
  );
}
