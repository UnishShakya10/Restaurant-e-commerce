import { useState } from "react";
import { Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRestaurantData } from "../context/RestaurantDataContext.js";
import apiClient from "../api.js";

const reservationCourses = [
    { name: "Appetizers", course: "Appetizer" },
    { name: "Main courses", course: "Main Course" },
    { name: "Desserts", course: "Dessert" },
    { name: "Drinks", course: "Drink" },
];

const Reservation = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guestCount, setGuestCount] = useState("");
    const [phone, setPhone] = useState("");
    const [selectedItems, setSelectedItems] = useState({});
    const navigate = useNavigate();
    const { dishes, menuStatus, menuError, retryMenu } = useRestaurantData();
    const selectedItemCount = Object.values(selectedItems).reduce((total, quantity) => total + quantity, 0);

    const updateSelectedItem = (dishId, quantity) => {
        setSelectedItems((currentItems) => {
            const updatedItems = { ...currentItems };

            if (quantity === 0) {
                delete updatedItems[dishId];
            } else {
                updatedItems[dishId] = quantity;
            }

            return updatedItems;
        });
    };

    const handleReservation = async (e) => {
        e.preventDefault();
        try {
            const orderItems = Object.entries(selectedItems).map(([dishId, quantity]) => ({
                dishId: Number(dishId),
                quantity,
            }));
            const { data } = await apiClient.post("/reservation/send",
                { firstName, lastName, email, phone, date, time, guestCount: Number(guestCount), orderItems },
            );
            notifications.show({
                title: "Reservation request received",
                message: data.message,
                color: "green",
            });
            setFirstName("");
            setLastName("");
            setPhone("");
            setEmail("");
            setTime("");
            setDate("");
            setGuestCount("");
            setSelectedItems({});
            navigate("/success");
        } catch (error) {
            notifications.show({
                title: "Unable to make reservation",
                message: error.response?.data?.message
                    || (error instanceof Error ? error.message : "Please try again."),
                color: "red",
            });
        }
    };

    return (
        <section className="reservation" id="reservation">
            <div className="reservation__layout">
                <header className="reservation__intro">
                    <p className="eyebrow">A table with your name on it</p>
                    <h2>Let’s make a plan.</h2>
                    <p>Tell us when you’re coming and we’ll take care of the welcome.</p>
                </header>
                <div className="reservation__card">
                    <aside className="reservation__visual">
                        <img src="/waiter.webp" alt="A waiter welcoming guests at their table" />
                        <div className="reservation__visual-copy">
                            <p className="eyebrow">Good evenings begin here</p>
                            <h3>We’ll make you feel at home.</h3>
                            <p>Share the details. We’ll have a warm welcome waiting.</p>
                        </div>
                    </aside>
                    <div className="reservation_form_box">
                        <form onSubmit={handleReservation}>
                            <div className="reservation-fields reservation-fields--names">
                                <div className="reservation-field">
                                    <label htmlFor="reservation-first-name">First name</label>
                                    <input id="reservation-first-name" type="text" placeholder="Your first name" minLength={3} maxLength={30} autoComplete="given-name" required value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
                                </div>
                                <div className="reservation-field">
                                    <label htmlFor="reservation-last-name">Last name</label>
                                    <input id="reservation-last-name" type="text" placeholder="Your last name" minLength={3} maxLength={30} autoComplete="family-name" required value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
                                </div>
                            </div>

                            <div className="reservation-fields reservation-fields--visit">
                                <div className="reservation-field">
                                    <label htmlFor="reservation-date">Date</label>
                                    <input id="reservation-date" type="date" required value={date} onChange={(e)=> setDate(e.target.value)}/>
                                </div>
                                <div className="reservation-field">
                                    <label htmlFor="reservation-time">Time</label>
                                    <input id="reservation-time" type="time" required value={time} onChange={(e)=> setTime(e.target.value)}/>
                                </div>
                                <div className="reservation-field reservation-field--guests">
                                    <label htmlFor="reservation-guests">Table for</label>
                                    <div className="reservation-guest-control">
                                        <input id="reservation-guests" type="number" min="1" step="1" inputMode="numeric" placeholder="2" aria-label="Table for how many guests" required value={guestCount} onChange={(e)=> setGuestCount(e.target.value)}/>
                                        <span aria-hidden="true">guests</span>
                                    </div>
                                </div>
                            </div>

                            <div className="reservation-fields reservation-fields--contact">
                                <div className="reservation-field">
                                    <label htmlFor="reservation-email">Email address</label>
                                    <input id="reservation-email" type="email" placeholder="you@example.com" autoComplete="email" required value={email} onChange={(e)=> setEmail(e.target.value)}/>
                                </div>
                                <div className="reservation-field">
                                    <label htmlFor="reservation-phone">Phone number</label>
                                    <input id="reservation-phone" type="tel" placeholder="10-digit phone number" inputMode="numeric" pattern="[0-9]{10}" maxLength={10} autoComplete="tel" required value={phone} onChange={(e)=> setPhone(e.target.value)}/>
                                </div>
                            </div>

                            <details className="reservation-order">
                                <summary>
                                    <span>
                                        Add dishes and drinks <span className="reservation-order__optional">(optional)</span>
                                    </span>
                                    {selectedItemCount > 0 && (
                                        <span className="reservation-order__count">
                                            {selectedItemCount} selected
                                        </span>
                                    )}
                                </summary>
                                <p className="reservation-order__note">
                                    Choose as many items as you like. Your selections are a request, not a payment; the restaurant will confirm availability.
                                </p>
                                {menuStatus === "loading" && (
                                    <p className="reservation-order__note" role="status">Loading the current menu…</p>
                                )}
                                {menuStatus === "error" && (
                                    <div className="reservation-order__error" role="alert">
                                        <p>Menu unavailable: {menuError}</p>
                                        <button type="button" onClick={retryMenu}>Retry</button>
                                    </div>
                                )}
                                {menuStatus === "loaded" && (
                                    <div className="reservation-order__courses">
                                        {reservationCourses.map(({ name, course }) => {
                                            const courseDishes = dishes.filter((dish) => dish.course === course);

                                            return (
                                                <fieldset className="reservation-order__course" key={course}>
                                                    <legend>{name}</legend>
                                                    <div className="reservation-order__items">
                                                        {courseDishes.map((dish) => {
                                                            const quantity = selectedItems[dish.id] || 0;

                                                            return (
                                                                <div className="reservation-order__item" key={dish.id}>
                                                                    <label htmlFor={`reservation-dish-${dish.id}`}>
                                                                        <input
                                                                            id={`reservation-dish-${dish.id}`}
                                                                            type="checkbox"
                                                                            checked={quantity > 0}
                                                                            onChange={(event) => updateSelectedItem(
                                                                                dish.id,
                                                                                event.target.checked ? 1 : 0
                                                                            )}
                                                                        />
                                                                        <span className="reservation-order__dish-name">{dish.title.trim()}</span>
                                                                        <span className="reservation-order__price">NPR {dish.price}</span>
                                                                    </label>
                                                                    {quantity > 0 && (
                                                                        <div className="reservation-order__quantity">
                                                                            <label htmlFor={`reservation-quantity-${dish.id}`}>Qty</label>
                                                                            <select
                                                                                id={`reservation-quantity-${dish.id}`}
                                                                                value={quantity}
                                                                                onChange={(event) => updateSelectedItem(dish.id, Number(event.target.value))}
                                                                            >
                                                                                {Array.from({ length: 10 }, (_, index) => index + 1).map((count) => (
                                                                                    <option key={count} value={count}>{count}</option>
                                                                                ))}
                                                                            </select>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </fieldset>
                                            );
                                        })}
                                    </div>
                                )}
                            </details>
                            <div className="reservation-form-footer">
                                <p>Sending a request doesn’t charge you. We’ll confirm your table directly.</p>
                                <Button type="submit" className="reservation-submit" color="orange">
                                    Request a table <ArrowRight aria-hidden="true" />
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reservation;