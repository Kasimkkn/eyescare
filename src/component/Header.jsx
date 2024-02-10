import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    let searchForm = document.querySelector(".header .search-form");

    document.querySelector("#search-btn").onclick = () => {
      searchForm.classList.toggle("active");
      navbar.classList.remove("active");
    };

    let navbar = document.querySelector(".header .navbar");

    document.querySelector("#menu-btn").onclick = () => {
      navbar.classList.toggle("active");
      searchForm.classList.remove("active");
    };

    window.onscroll = () => {
      searchForm.classList.remove("active");
      navbar.classList.remove("active");
    };
  });

  return (
    <>
      <header className="header">
        <Link to="home" className="logo">
          {" "}
          EYESCARE{" "}
        </Link>

        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="products">products</Link>
            </li>
            <li>
              <Link to="#">pages +</Link>
              <ul>
                <li>
                  <Link to="about">about</Link>
                </li>
                <li>
                  <Link to="blogs">blogs</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="contact">contact</Link>
            </li>
            <li>
              <Link to="#">account +</Link>
              <ul>
                <li>
                  <Link to="login">login</Link>
                </li>
                <li>
                  <Link to="register">register</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <div className="icons">
          <div id="menu-btn" className="fas fa-bars"></div>
          <div id="search-btn" className="fas fa-search"></div>
          <Link to="cart" className="fas fa-shopping-cart"></Link>
        </div>

        <form action="" className="search-form">
          <input
            type="search"
            name=""
            placeholder="search here..."
            id="search-box"
          />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </form>
      </header>
    </>
  );
};

export default Header;
