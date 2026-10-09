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
            <section className="flex min-h-[65vh] items-center justify-center bg-cream px-6 py-16 text-center">
                <div className="flex max-w-xl flex-col items-center">
                    <img className="mb-5 max-h-56 w-[min(250px,60vw)] object-contain" src="/sandwich.png" alt="" />
                    <h1 className="m-0 font-display text-[clamp(2rem,5vw,3.5rem)] font-medium text-green">Reservation request received</h1>
                    <p className="mb-2.5 mt-3 text-sm leading-7 text-muted">
                        Your request and dish selections have been submitted. The restaurant can confirm table and dish availability with you directly.
                    </p>
                    <p className="mb-6 mt-1 text-sm text-muted">Returning to the home page in {countdown} seconds...</p>
                    <Link className="inline-flex items-center gap-2 text-sm font-semibold text-green no-underline hover:text-accent" to={"/"}>Back to Home <ArrowRight aria-hidden="true" /></Link>
                </div>
            </section>
        </>
    );
};

export default Success;