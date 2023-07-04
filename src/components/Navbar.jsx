import { Link } from "react-router-dom";
import "../style/Navbar.css";

function Navbar() {
  return (
    <div className="container-nav">
      <nav>
        <div className="nav-item">
          <Link to="/">LS Blog</Link>
        </div>
        <div className="nav-item">
          <Link to="/">Blog</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
