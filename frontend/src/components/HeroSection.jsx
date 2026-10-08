import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <div className="hero__container">
        <div className="hero__content">
          <p className="eyebrow hero__tagline">A taste of Nepal, thoughtfully served</p>
          <h1 className="hero__title">
            Gather around<br />
            <span className="hero__title--accent">something</span> special.
          </h1>
          <p className="hero__subtitle">
            Seasonal ingredients, soulful Nepali flavors, and a warm welcome in the heart of Kathmandu.
          </p>
          <div className="hero__actions">
            <Link className="button button--dark" to="/menu">
              Explore the menu <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link className="text-link" to="/reservations">Reserve a table</Link>
          </div>
          <div className="hero__note">
            <span className="hero__note-mark" aria-hidden="true">✳</span>
            <span>Made with care. Shared with joy.</span>
          </div>
        </div>
        <div className="hero__imageGrid">
          <img src="/hero1.jpg" alt="A freshly prepared signature dish" className="hero__img hero__img--tall" />
          <img src="/hero2.jpeg" alt="A colorful plate made with fresh ingredients" className="hero__img" />
          <div className="hero__image-caption">
            <span>Rooted in tradition</span>
            <span>Made for today</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;