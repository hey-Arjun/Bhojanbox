import React from 'react';

export default function Carousal() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
      {/* Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      {/* Carousel Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/Momos.jpg" className="d-block w-100" alt="Delicious Momos" style={{ maxHeight: '500px', objectFit: 'cover' }} />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
            <h5>Mouth-Watering Momos</h5>
            <p>Hot, juicy, and full of flavor!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/Pizza.jpg" className="d-block w-100" alt="Tasty Pizza" style={{ maxHeight: '500px', objectFit: 'cover' }} />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
            <h5>Cheesy Pizza</h5>
            <p>Fresh from the oven with extra cheese.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/Burger.jpg" className="d-block w-100" alt="Yummy Burger" style={{ maxHeight: '500px', objectFit: 'cover' }} />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
            <h5>Juicy Burger</h5>
            <p>Stacked high and grilled to perfection.</p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
