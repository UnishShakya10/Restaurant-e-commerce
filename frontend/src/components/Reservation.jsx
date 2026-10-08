import axios from "axios";
import { useState } from "react";
import { Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [phone, setPhone] = useState(0);
    const navigate = useNavigate();

        const handleReservation = async (e)=>{
            e.preventDefault();
            try{
                const {data} = await axios.post("http://localhost:4000/api/v1/reservation/send", 
                    {firstName, lastName, email, phone, date, time},
                    {
                        headers:{
                            "Content-Type": "application/json"
                        },
                        withCredentials: true
                    }
                );
                notifications.show({
                    title: "Reservation received",
                    message: data.message,
                    color: "green",
                });
                setFirstName("");
                setLastName("");
                setPhone(0);
                setEmail("");
                setTime("");
                setDate("");
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
            <div className="container">
                <div className="banner">
                    <img src="/reservation.jpeg" alt="res" />
                </div>
                <div className="banner">
                    <div className="reservation_form_box">
                        <h1>MAKE A RESERVATION</h1>
                        <p>For Further Questions, Please Contact</p>
                        <form onSubmit={handleReservation}>
                            <div>
                                <input type="text" placeholder="First Name" value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
                                <input type="text" placeholder="Last Name" value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
                            </div>

                            <div>
                                <input type="date" placeholder="Date" value={date} onChange={(e)=> setDate(e.target.value)}/>
                                <input type="time" placeholder="Time" value={time} onChange={(e)=> setTime(e.target.value)}/>
                            </div>

                            <div>
                                <input type="email" placeholder="Email" className="email_tag" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                                <input type="number" placeholder="Phone" value={phone} onChange={(e)=> setPhone(e.target.value)}/>

                            </div>
                            <Button type="submit" className="reservation-submit" color="orange">
                                RESERVE NOW{" "}
                                <span>
                                    <ArrowRight aria-hidden="true" />
                                </span>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reservation;