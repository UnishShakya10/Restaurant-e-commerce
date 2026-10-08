import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRestaurantData } from "../context/RestaurantDataContext.js";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const { navbarLinks } = useRestaurantData();

    return (
        <nav>
            <div className="logo">RESTAURANT</div>
            <div className={show ? "navLinks showmenu": "navLinks"}>
                <div className="links">
                    {
                        navbarLinks.map(element=>{
                            return(
                                <a
                                    href={`#${element.link}`}
                                    key={element.id}
                                    onClick={() => setShow(false)}
                                >
                                    {element.title}
                                </a>
                            );
                        })
                    }
                </div>
                <a className="menuBtn" href="#menu" onClick={() => setShow(false)}>OUR MENU</a>
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
    );
};

export default Navbar;