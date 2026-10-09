import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
    return (
        <>
            <section className="flex min-h-[65vh] items-center justify-center bg-cream px-6 py-16 text-center">
                <div className="flex flex-col items-center">
                    <img className="mb-5 max-h-56 w-[min(250px,60vw)] object-contain" src="/notFound.svg" alt="" />
                    <h1 className="m-0 font-display text-[clamp(2rem,5vw,3.5rem)] font-medium text-green">LOOKS LIKE YOU&apos;RE LOST</h1>
                    <p className="mb-6 mt-3 text-sm text-muted">We can&apos;t seem to find the page you&apos;re looking for</p>
                    <Link className="inline-flex items-center gap-2 text-sm font-semibold text-green no-underline hover:text-accent" to={"/"}>Back to Home <span><ArrowRight aria-hidden="true" /></span></Link>
                </div>
            </section>
        </>
    )
}

export default NotFound