import React from "react";
import Navbar from "./Navbar"; 

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="hero__container">

        {/* LEFT — text content */}
        <div className="hero__content">
          <p className="hero__tagline">Fresh · Authentic · Nepali</p>
          <h1 className="hero__title">
            Enjoy <span className="hero__title--accent">Delicious</span> Foods
          </h1>
          <p className="hero__subtitle">
            Bold flavors, fresh ingredients, and recipes crafted to take you
            on an unforgettable culinary journey.
          </p>
        </div>

        {/* RIGHT — image grid */}
        <div className="hero__imageGrid">
          <img src="/hero1.jpg" alt="Signature dish" className="hero__img hero__img--tall" />
          <img src="/hero2.jpeg" alt="Popular dish" className="hero__img" />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;