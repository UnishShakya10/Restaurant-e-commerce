import Reservation from "../components/Reservation";

const ReservationPage = () => (
    <>
        <section className="bg-cream px-6 py-14 text-center sm:px-10 sm:py-16">
            <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-accent">We saved you a seat</p>
            <h1 className="m-0 font-display text-[clamp(2.7rem,6vw,4.5rem)] font-medium leading-tight text-green">Make an <em>evening of it.</em></h1>
            <p className="mx-auto mb-0 mt-4 max-w-xl text-sm leading-7 text-muted">Choose a date and time, then request dishes for your table if you like.</p>
        </section>
        <Reservation />
    </>
);

export default ReservationPage;
