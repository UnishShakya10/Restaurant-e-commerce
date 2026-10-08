import Reservation from "../components/Reservation";

const ReservationPage = () => (
    <>
        <section className="page-intro page-intro--compact">
            <p className="eyebrow">We saved you a seat</p>
            <h1>Make an <em>evening of it.</em></h1>
            <p>Choose a date and time, then request dishes for your table if you like.</p>
        </section>
        <Reservation />
    </>
);

export default ReservationPage;
