import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Qualities from "../components/Qualities";
import Team from "../components/Team";
import WhoAreWe from "../components/WhoAreWe";

const AboutPage = () => (
    <>
        <section className="page-intro">
            <p className="eyebrow">The people and place behind the plate</p>
            <h1>A little more about <em>our table.</em></h1>
            <p>We believe the best meals are the ones you remember sharing.</p>
        </section>
        <section className="story-section">
            <div className="story-section__image">
                <img src="/whoweare.jpeg" alt="Inside our restaurant" />
            </div>
            <div className="story-section__content">
                <p className="eyebrow">Rooted in Nepal</p>
                <h2>Good food has a way of bringing us home.</h2>
                <p>Our kitchen takes its cues from the tastes, ingredients, and traditions that make Nepali food so full of character. We cook with the seasons, make room for a little creativity, and believe every guest deserves to feel at home.</p>
                <p>Whether you are joining us for a quick meal or settling in for a long evening, there is always a place for you here.</p>
                <Link className="button button--dark" to="/reservations">
                    Join us at the table <ArrowRight size={16} aria-hidden="true" />
                </Link>
            </div>
        </section>
        <Qualities />
        <WhoAreWe />
        <Team />
    </>
);

export default AboutPage;
