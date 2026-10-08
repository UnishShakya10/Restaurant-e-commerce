import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <p className="eyebrow">A little about us</p>
                        <h2 className="heading">Our table is your table.</h2>
                        <p>Fresh ingredients, Nepali roots, and hospitality from the heart.</p>
                    </div>
                    <p className="mid">
                        We bring people together around the flavors we grew up with and the dishes we love discovering. Every plate is made with care, inspired by Nepal’s generous food culture, and served with the kind of welcome that makes you want to stay a little longer.
                    </p>
                    <Link className="text-link" to="/about">
                        Get to know us <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                </div>
                <div className="banner">
                    <img src="/about.jpg" alt="A warm, welcoming view of the restaurant" loading="lazy" />
                </div>
            </div>
        </section>
    );
};

export default About;