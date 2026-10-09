import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#202e27] px-6 py-12 text-white sm:px-10 lg:px-12 lg:pb-5 lg:pt-[61px]">
            <div className="mx-auto grid max-w-7xl gap-10 border-b border-white/15 pb-10 md:grid-cols-[1.6fr_0.7fr_1fr] md:gap-12 md:pb-12">
                <div className="md:col-span-1">
                    <Link className="inline-flex min-w-max items-center gap-2.5 no-underline" to="/">
                        <span className="grid size-10 place-items-center rounded-full border border-white/40 font-display text-xl italic text-[#e7d3b7]" aria-hidden="true">NG</span>
                        <span className="grid gap-1">
                            <strong className="font-display text-base font-semibold leading-none">Newa Ghasa</strong>
                            <span className="text-[0.61rem] uppercase tracking-[0.12em] text-white/55">Kathmandu, Nepal</span>
                        </span>
                    </Link>
                    <p className="mt-5 max-w-64 text-sm leading-7 text-white/65">Good food, good company, and a place that feels like yours.</p>
                </div>
                <div className="flex flex-col items-start gap-3 text-sm text-white/75">
                    <h2 className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#e7d3b7]">Explore</h2>
                    <Link className="no-underline hover:text-white" to="/about">Our story</Link>
                    <Link className="no-underline hover:text-white" to="/menu">The menu</Link>
                    <Link className="no-underline hover:text-white" to="/reservations">Reservations</Link>
                    <Link className="no-underline hover:text-white" to="/contact">Contact</Link>
                </div>
                <div className="flex flex-col items-start gap-3 text-sm text-white/75">
                    <h2 className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#e7d3b7]">Visit us</h2>
                    <p className="m-0">Kathmandu, Nepal</p>
                    <p className="m-0">Daily · 4:00 PM – 1:00 AM</p>
                    <Link className="inline-flex items-center gap-1 text-[#e7d3b7] no-underline hover:text-white" to="/contact">
                        Plan your visit <ArrowUpRight size={15} aria-hidden="true" />
                    </Link>
                </div>
            </div>
            <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 pt-5 text-xs text-white/55 sm:flex-row sm:items-center">
                <span>© {new Date().getFullYear()} Newa Ghasa. Made with care in Nepal.</span>
                <Link className="text-white/85 no-underline hover:text-white" to="/reservations">Come dine with us <span aria-hidden="true">↗</span></Link>
            </div>
        </footer>
    );
};

export default Footer;