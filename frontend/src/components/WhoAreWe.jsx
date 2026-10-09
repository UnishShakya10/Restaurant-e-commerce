import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WhoAreWe = () => {
    return (
        <section className="bg-green px-6 py-16 text-white sm:px-10 lg:px-12 lg:py-24" id="who_are_we">
            <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12 lg:gap-20">
                <div className="flex flex-col items-start justify-center text-left">
                    <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#e7d3b7]">A Newari table in Kathmandu</p>
                    <h2 className="m-0 font-display text-[clamp(3.2rem,7vw,5.1rem)] font-medium leading-none tracking-tight text-white">Newa Ghasa</h2>
                    <p className="my-5 max-w-sm text-[0.92rem] leading-8 text-white/75">
                        Gather around Nepali flavors, generous hospitality, and a table made for sharing.
                    </p>
                    <Link className="inline-flex items-center gap-2.5 text-xs font-semibold text-[#e7d3b7] no-underline transition-colors hover:text-white" to="/about">
                        Our story <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                </div>
                <div className="relative h-[330px] md:h-[420px]">
                    <img src="/center.svg" alt="" className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 opacity-[0.17]" />
                    <img src="/whoweare.jpeg" alt="A warm dining room ready to welcome guests" className="relative z-10 size-full object-cover" />
                </div>
            </div>
        </section>
    );
};

export default WhoAreWe;