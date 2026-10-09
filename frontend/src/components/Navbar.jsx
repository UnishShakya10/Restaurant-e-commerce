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
        <header className="relative z-20 bg-paper">
            <nav className="relative mx-auto flex h-20 w-[calc(100%-2rem)] max-w-7xl items-center justify-between border-b border-[#e9e6df] sm:w-[calc(100%-3rem)] lg:h-[88px]" aria-label="Main navigation">
                <Link className="inline-flex min-w-max items-center gap-2.5 no-underline" to="/" onClick={closeMenu} aria-label="Newa Ghasa home">
                    <span className="grid size-10 place-items-center rounded-full border border-[#bba17e] font-display text-xl italic text-green" aria-hidden="true">NG</span>
                    <span className="grid gap-1">
                        <strong className="font-display text-base font-semibold leading-none tracking-wide">Newa Ghasa</strong>
                        <span className="text-[0.61rem] uppercase tracking-[0.12em] text-muted">Kathmandu, Nepal</span>
                    </span>
                </Link>
                <div className={`${show ? "flex" : "hidden"} absolute inset-x-[-1rem] top-full flex-col gap-5 border-b border-[#e6e2da] bg-paper px-6 py-6 shadow-xl md:static md:flex md:flex-row md:items-center md:gap-10 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-7">
                        {links.map(({ to, title }) => (
                            <NavLink
                                end={to === "/"}
                                to={to}
                                key={to}
                                onClick={closeMenu}
                                className={({ isActive }) => `relative py-3 text-sm no-underline transition-colors hover:text-ink md:py-2 md:text-[0.81rem] ${isActive ? "text-ink after:absolute after:bottom-1 after:left-0 after:h-px after:w-8 after:bg-accent md:after:w-full" : "text-[#5f625c]"}`}
                            >
                                {title}
                            </NavLink>
                        ))}
                    </div>
                    <Link className="inline-flex min-h-11 items-center justify-center rounded-sm border border-green bg-green px-5 text-xs font-semibold text-white no-underline transition-colors hover:bg-transparent hover:text-green" to="/reservations" onClick={closeMenu}>Book a table</Link>
                </div>
            <button
                type="button"
                className="inline-flex cursor-pointer border-0 bg-transparent p-2 text-green md:hidden"
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