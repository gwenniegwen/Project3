import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Insert Project Name
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/Welcome"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Welcome
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Signup"
              className={
                window.location.pathname === "/Signup"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Sign-Up
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Calendar"
              className={
                window.location.pathname === "/Calendar"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Calendar
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Performance"
              className={
                window.location.pathname === "/Performance"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Performance
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
