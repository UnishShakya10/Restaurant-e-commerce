import { ArrowRight, Clock3, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const ContactPage = () => (
    <>
        <section className="page-intro page-intro--compact">
            <p className="eyebrow">Come by any time</p>
            <h1>We would love to <em>see you.</em></h1>
            <p>Find us in Kathmandu for a relaxed meal and a warm welcome.</p>
        </section>
        <section className="contact-section">
            <div className="contact-section__image">
                <img src="/reservation.jpeg" alt="A table prepared for an evening meal" />
                <span className="contact-section__image-caption">A seat is waiting for you.</span>
            </div>
            <div className="contact-section__details">
                <article className="contact-card">
                    <span className="contact-card__icon"><MapPin size={20} aria-hidden="true" /></span>
                    <div>
                        <h2>Find us</h2>
                        <p>Kathmandu, Nepal</p>
                    </div>
                </article>
                <article className="contact-card">
                    <span className="contact-card__icon"><Clock3 size={20} aria-hidden="true" /></span>
                    <div>
                        <h2>Opening hours</h2>
                        <p>Every day</p>
                        <p>4:00 PM – 1:00 AM</p>
                    </div>
                </article>
                <div className="contact-cta">
                    <p>Planning a visit? We recommend reserving ahead.</p>
                    <Link className="button button--dark" to="/reservations">
                        Reserve a table <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    </>
);

export default ContactPage;
