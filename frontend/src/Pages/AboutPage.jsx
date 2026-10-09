import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Qualities from "../components/Qualities";
import WhoAreWe from "../components/WhoAreWe";

const AboutPage = () => (
    <>
        <section className="bg-cream px-6 py-16 text-center sm:px-10 sm:py-20">
            <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-accent">The people and place behind the plate</p>
            <h1 className="m-0 font-display text-[clamp(2.7rem,6vw,4.5rem)] font-medium leading-tight text-green">A little more about <em>our table.</em></h1>
            <p className="mx-auto mb-0 mt-4 max-w-xl text-sm leading-7 text-muted">We believe the best meals are the ones you remember sharing.</p>
        </section>
        <section className="mx-auto grid w-[calc(100%-3rem)] max-w-6xl grid-cols-1 items-center gap-8 py-16 sm:w-[calc(100%-3.5rem)] md:grid-cols-2 md:gap-12 md:py-20">
            <div>
                <img className="max-h-[440px] w-full aspect-[1.25] object-cover" src="/whoweare.jpeg" alt="Inside our restaurant" />
            </div>
            <div className="py-2">
                <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-accent">Rooted in Nepal</p>
                <h2 className="m-0 font-display text-[clamp(2.4rem,4vw,3.5rem)] font-medium leading-tight tracking-tight text-green">Good food has a way of bringing us home.</h2>
                <p className="mt-5 text-sm leading-8 text-muted">Our kitchen takes its cues from the tastes, ingredients, and traditions that make Nepali food so full of character. We cook with the seasons, make room for a little creativity, and believe every guest deserves to feel at home.</p>
                <p className="mb-6 mt-4 text-sm leading-8 text-muted">Whether you are joining us for a quick meal or settling in for a long evening, there is always a place for you here.</p>
                <Link className="inline-flex min-h-12 items-center justify-center gap-3 rounded-sm bg-green px-5 text-xs font-semibold text-white no-underline transition-colors hover:bg-[#344b40]" to="/reservations">
                    Join us at the table <ArrowRight size={16} aria-hidden="true" />
                </Link>
            </div>
        </section>
        <Qualities />
        <WhoAreWe />
    </>
);

export default AboutPage;
