import React, { useEffect, useState } from "react";
import slider1 from "../images/home-bg-1.png";
import slider2 from "../images/home-bg-2.png";
import slider3 from "../images/home-bg-3.png";
import banner1 from "../images/banner-1.jpg";
import banner2 from "../images/banner-2.jpg";
import banner3 from "../images/banner-3.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slides = document.querySelectorAll(".home .slide");
    const nextButton = document.getElementById("next-slide");
    const prevButton = document.getElementById("prev-slide");

    const next = () => {
      slides[index].classList.remove("active");
      const newIndex = (index + 1) % slides.length;
      slides[newIndex].classList.add("active");
      setIndex(newIndex);
    };

    const prev = () => {
      slides[index].classList.remove("active");
      const newIndex = (index - 1 + slides.length) % slides.length;
      slides[newIndex].classList.add("active");
      setIndex(newIndex);
    };

    nextButton.addEventListener("click", next);
    prevButton.addEventListener("click", prev);

    return () => {
      nextButton.removeEventListener("click", next);
      prevButton.removeEventListener("click", prev);
    };
  }, [index]);



  return (
    <>
      <section className="home">
        <div
          className={`slide ${index === 0 ? "active" : ""}`}
          style={{ background: `url(${slider1}) no-repeat` }}
        >
          <div className="content">
            <span>protect your eyes</span>
            <h3>upto 50% off</h3>
            <Link to="#" className="btn">
              shop now
            </Link>
          </div>
        </div>

        <div
          className={`slide ${index === 1 ? "active" : ""}`}
          style={{ background: `url(${slider2}) no-repeat` }}
        >
          <div className="content">
            <span>protect your eyes</span>
            <h3>upto 50% off</h3>
            <Link to="#" className="btn">
              shop now
            </Link>
          </div>
        </div>

        <div
          className={`slide ${index === 2 ? "active" : ""}`}
          style={{ background: `url(${slider3}) no-repeat` }}
        >
          <div className="content">
            <span>protect your eyes</span>
            <h3>upto 50% off</h3>
            <Link to="#" className="btn">
              shop now
            </Link>
          </div>
        </div>

        <div id="next-slide" className="fas fa-angle-right"></div>
        <div id="prev-slide" className="fas fa-angle-left"></div>
      </section>


      <section className="banner">
        <div className="box">
          <img src={banner1} alt="" />
          <div className="content">
            <span>special offer</span>
            <h3>upto 50% off</h3>
            <Link to="#" className="btn">
              shop now
            </Link>
          </div>
        </div>

        <div className="box">
          <img src={banner2} alt="" />
          <div className="content">
            <span>special offer</span>
            <h3>upto 50% off</h3>
            <Link to="#" className="btn">
              shop now
            </Link>
          </div>
        </div>

        <div className="box">
          <img src={banner3} alt="" />
          <div className="content">
            <span>special offer</span>
            <h3>upto 50% off</h3>
            <Link to="#" className="btn">
              shop now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
