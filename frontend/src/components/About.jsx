import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">ABOUT US</h1>
                        <p>Fresh ingredients, bold flavors, unforgettable dining experiences.</p>
                    </div>
                    <p className="mid">
                        We are not just a restaurant — we are a culinary destination. Born from a passion for bold flavors and exceptional dining, we have spent years perfecting recipes that honor tradition while embracing innovation. Every plate we serve is a reflection of our commitment to quality, freshness, and creativity. Come hungry, leave inspired.
                    </p>
                    <Link to={"/"}>
                        Explore Menu 
                        <span>
                            <ArrowRight aria-hidden="true" />
                        </span>
                    </Link>
                </div>
                <div className="banner">
                    <img src="/about.jpg" alt="about" />
                </div>
            </div>
        </section>
    );
};

export default About;