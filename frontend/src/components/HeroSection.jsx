import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="overflow-hidden bg-cream" id="heroSection">
      <div className="mx-auto grid min-h-[610px] w-[calc(100%-2.5rem)] max-w-7xl grid-cols-1 items-center gap-6 py-10 sm:w-[calc(100%-3rem)] md:grid-cols-[0.88fr_1.12fr] md:gap-8 md:py-0">
        <div className="py-5 md:py-16">
          <p className="mb-6 max-w-sm text-[0.7rem] font-bold uppercase leading-relaxed tracking-[0.18em] text-accent">A taste of Nepal, thoughtfully served</p>
          <h1 className="m-0 font-display text-[clamp(3rem,7vw,5.35rem)] font-medium leading-[1.06] tracking-[-0.055em] text-green">
            Gather around<br />
            <span className="text-accent italic">something</span> special.
          </h1>
          <p className="mt-6 max-w-sm text-base leading-8 text-[#676a63]">
            Seasonal ingredients, soulful Nepali flavors, and a warm welcome in the heart of Kathmandu.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link className="inline-flex min-h-12 items-center justify-center gap-3 rounded-sm border border-green bg-green px-5 text-xs font-semibold text-white no-underline transition-colors hover:bg-[#344b40]" to="/menu">
              Explore the menu <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link className="inline-flex items-center gap-2.5 text-xs font-semibold text-green no-underline transition-colors hover:text-accent" to="/reservations">Reserve a table</Link>
          </div>
          <div className="mt-10 flex items-center gap-3 text-xs tracking-wide text-[#77776e]">
            <span className="text-lg text-accent" aria-hidden="true">✳</span>
            <span>Made with care. Shared with joy.</span>
          </div>
        </div>
        <div className="relative grid h-[min(74vw,400px)] min-h-[270px] grid-cols-[1.16fr_0.84fr] items-stretch gap-3 pb-7 md:h-[482px]">
          <img src="/hero1.jpg" alt="A freshly prepared signature dish" className="h-[calc(100%-53px)] w-full self-end object-cover" />
          <img src="/hero2.jpeg" alt="A colorful plate made with fresh ingredients" className="mt-[30px] h-[calc(100%-112px)] w-full self-start object-cover" />
          <div className="absolute bottom-0 left-[20%] right-0 flex min-h-14 items-center justify-between bg-green px-4 font-display text-sm italic text-white">
            <span>Rooted in tradition</span>
            <span>Made for today</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;