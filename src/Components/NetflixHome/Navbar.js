import React from "react";
import "bootstrap/dist/js/bootstrap.js";
import "../NetflixHome/Navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-dark text-light p-3">
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png"
          style={{ width: "100px" }}
          href="#"
        ></img>
        <button
          class="navbar-toggler text-bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span><ion-icon name="reorder-four-outline"></ion-icon></span>
        </button>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="/home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="/TvShow"
                >
                  TV Shows
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-light" href="#">
                  Movies
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled">Recent Added</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
