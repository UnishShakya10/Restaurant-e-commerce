import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer__main">
                <div className="footer__brand">
                    <Link className="brand brand--footer" to="/">
                        <span className="brand__mark" aria-hidden="true">NG</span>
                        <span className="brand__text">
                            <strong>Newa Ghasa</strong>
                            <span>Kathmandu, Nepal</span>
                        </span>
                    </Link>
                    <p>Good food, good company, and a place that feels like yours.</p>
                </div>
                <div className="footer__column">
                    <h2>Explore</h2>
                    <Link to="/about">Our story</Link>
                    <Link to="/menu">The menu</Link>
                    <Link to="/reservations">Reservations</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="footer__column">
                    <h2>Visit us</h2>
                    <p>Kathmandu, Nepal</p>
                    <p>Daily · 4:00 PM – 1:00 AM</p>
                    <Link className="footer__map-link" to="/contact">
                        Plan your visit <ArrowUpRight size={15} aria-hidden="true" />
                    </Link>
                </div>
            </div>
            <div className="footer__bottom">
                <span>© {new Date().getFullYear()} Newa Ghasa. Made with care in Nepal.</span>
                <Link to="/reservations">Come dine with us <span aria-hidden="true">↗</span></Link>
            </div>
        </footer>
    );
};

export default Footer;