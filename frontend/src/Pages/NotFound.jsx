import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
    return (
        <>
            <section className="notFound">
                <div className="container">
                    <img src="/notFound.svg" alt="notFound" />
                    <h1>LOOKS LIKE YOU&apos;RE LOST</h1>
                    <p>We can&apos;t seem to find the page you&apos;re looking for</p>
                    <Link to={"/"}>Back to Home <span><ArrowRight aria-hidden="true" /></span></Link>
                </div>
            </section>
        </>
    )
}

export default NotFound