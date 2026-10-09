import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
    return (
        <section className="bg-paper px-6 py-20 sm:px-10 lg:px-12 lg:py-28" id="about">
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-[0.92fr_1.08fr] md:gap-16 lg:gap-28">
                <div className="py-1">
                    <div>
                        <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-accent">A little about us</p>
                        <h2 className="m-0 font-display text-[clamp(2.45rem,5vw,3.75rem)] font-medium leading-[1.13] tracking-tight text-green">Our table is your table.</h2>
                        <p className="mt-4 max-w-sm text-sm leading-7 text-muted">Fresh ingredients, Nepali roots, and hospitality from the heart.</p>
                    </div>
                    <p className="my-6 max-w-md text-sm leading-8 text-[#62655f]">
                        We bring people together around the flavors we grew up with and the dishes we love discovering. Every plate is made with care, inspired by Nepal’s generous food culture, and served with the kind of welcome that makes you want to stay a little longer.
                    </p>
                    <Link className="inline-flex items-center gap-2.5 text-xs font-semibold text-green no-underline transition-colors hover:text-accent" to="/about">
                        Get to know us <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                </div>
                <div>
                    <img className="aspect-[1/1.08] max-h-[440px] w-full object-cover" src="/about.jpg" alt="A warm, welcoming view of the restaurant" loading="lazy" />
                </div>
            </div>
        </section>
    );
};

export default About;