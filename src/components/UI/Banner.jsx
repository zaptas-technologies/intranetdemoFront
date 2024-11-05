import React from "react";

export default function Banner() {
  return (
    <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img
            src="/intranetdemoFront/banner1.jpg"
            className="d-block w-100"
            alt="Banner 1"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Slide 1 Title</h5>
            <p>Some description for the first slide.</p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img
            src="/intranetdemoFront/banner2.jpg"
            className="d-block w-100"
            alt="Banner 2"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Slide 2 Title</h5>
            <p>Some description for the second slide.</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img
            src="/intranetdemoFront/banner3.jpg"
            className="d-block w-100"
            alt="Banner 3"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Slide 3 Title</h5>
            <p>Some description for the third slide.</p>
          </div>
        </div>
        {/* Slide 4 */}
        <div className="carousel-item">
          <img
            src="/intranetdemoFront/banner4.jpg"
            className="d-block w-100"
            alt="Banner 4"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Slide 4 Title</h5>
            <p>Some description for the third slide.</p>
          </div>
        </div>
      </div>

      {/* Previous and Next controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#bannerCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#bannerCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
