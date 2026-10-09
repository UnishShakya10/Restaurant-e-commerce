import { ArrowRight, Clock3, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const ContactPage = () => (
    <>
        <section className="bg-cream px-6 py-14 text-center sm:px-10 sm:py-16">
            <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-accent">Come by any time</p>
            <h1 className="m-0 font-display text-[clamp(2.7rem,6vw,4.5rem)] font-medium leading-tight text-green">We would love to <em>see you.</em></h1>
            <p className="mx-auto mb-0 mt-4 max-w-xl text-sm leading-7 text-muted">Find us in Kathmandu for a relaxed meal and a warm welcome.</p>
        </section>
        <section className="mx-auto grid w-[calc(100%-3rem)] max-w-6xl grid-cols-1 items-stretch gap-8 py-14 sm:w-[calc(100%-3.5rem)] md:grid-cols-[1.1fr_0.9fr] md:gap-14 md:py-20">
            <div className="relative min-h-[300px] md:min-h-[410px]">
                <img className="size-full min-h-[300px] object-cover md:min-h-[410px]" src="/reservation.jpeg" alt="A table prepared for an evening meal" />
                <span className="absolute inset-x-0 bottom-0 bg-green/95 px-5 py-4 font-display text-base italic text-white">A seat is waiting for you.</span>
            </div>
            <div className="flex flex-col justify-center">
                <article className="flex gap-5 border-b border-[#e6e2da] py-6">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#eeeadf] text-green"><MapPin size={20} aria-hidden="true" /></span>
                    <div>
                        <h2 className="m-0 mb-2 font-display text-xl font-medium text-green">Find us</h2>
                        <p className="m-0 mt-1 text-sm text-muted">Kathmandu, Nepal</p>
                    </div>
                </article>
                <article className="flex gap-5 border-b border-[#e6e2da] py-6">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#eeeadf] text-green"><Clock3 size={20} aria-hidden="true" /></span>
                    <div>
                        <h2 className="m-0 mb-2 font-display text-xl font-medium text-green">Opening hours</h2>
                        <p className="m-0 mt-1 text-sm text-muted">Every day</p>
                        <p className="m-0 mt-1 text-sm text-muted">4:00 PM – 1:00 AM</p>
                    </div>
                </article>
                <div className="pt-6">
                    <p className="mb-4 mt-0 text-sm leading-7 text-muted">Planning a visit? We recommend reserving ahead.</p>
                    <Link className="inline-flex min-h-12 items-center justify-center gap-3 rounded-sm bg-green px-5 text-xs font-semibold text-white no-underline transition-colors hover:bg-[#344b40]" to="/reservations">
                        Reserve a table <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    </>
);

export default ContactPage;
