import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Success = () => {
    const [countdown, setCountdown] = useState(10);
    const navigate = useNavigate();

    useEffect(()=>{
        const timeoutId = setInterval(()=>{
            setCountdown(preCount=>{
                if(preCount ===1){
                    clearInterval(timeoutId)
                    navigate("/");
                }
                return preCount - 1;
            });
        }, 1000);
        return () => clearInterval(timeoutId);
    }, [navigate]);

    return (
        <>
            <section className="notFound">
                <div className="container">
                    <img src="/sandwich.png" alt="success" />
                    <h1>Reservation request received</h1>
                    <p className="success-message">
                        Your request and dish selections have been submitted. The restaurant can confirm table and dish availability with you directly.
                    </p>
                    <p>Returning to the home page in {countdown} seconds...</p>
                    <Link to={"/"}>Back to Home <ArrowRight aria-hidden="true" /></Link>
                </div>
            </section>
        </>
    );
};

export default Success;