import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const closeMenu = () => setShow(false);
    const links = [
        { to: "/", title: "Home" },
        { to: "/about", title: "Our story" },
        { to: "/menu", title: "Menu" },
        { to: "/contact", title: "Contact" },
    ];

    return (
        <header className="site-header">
            <nav className="site-nav" aria-label="Main navigation">
                <Link className="brand" to="/" onClick={closeMenu} aria-label="Newa Ghasa home">
                    <span className="brand__mark" aria-hidden="true">NG</span>
                    <span className="brand__text">
                        <strong>Newa Ghasa</strong>
                        <span>Kathmandu, Nepal</span>
                    </span>
                </Link>
                <div className={show ? "navLinks showmenu" : "navLinks"}>
                    <div className="links">
                        {links.map(({ to, title }) => (
                            <NavLink
                                end={to === "/"}
                                to={to}
                                key={to}
                                onClick={closeMenu}
                                className={({ isActive }) => isActive ? "nav-link nav-link--active" : "nav-link"}
                            >
                                {title}
                            </NavLink>
                        ))}
                    </div>
                    <Link className="menuBtn" to="/reservations" onClick={closeMenu}>Book a table</Link>
                </div>
            <button
                type="button"
                className="hamburger"
                aria-label={show ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={show}
                onClick={() => setShow((isOpen) => !isOpen)}
            >
                {show ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
            </nav>
        </header>
    );
};

export default Navbar;