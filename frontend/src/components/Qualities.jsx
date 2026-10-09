import { HeartHandshake } from "lucide-react";
import { useRestaurantData } from "../context/RestaurantDataContext.js";

const Qualities = () => {
    const { ourQualities } = useRestaurantData();

    return (
        <section className="bg-cream px-6 py-16 sm:px-10 lg:px-12 lg:py-20" id="qualities">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
                {
                    ourQualities.map(element=>(
                        <article className="group min-h-56 border border-green/10 bg-paper p-6 text-left transition duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_16px_36px_rgba(38,42,36,0.08)] sm:p-7" key={element.id}>
                            <div className="mb-7 flex items-center justify-between">
                                <span className="grid size-[52px] place-items-center rounded-full bg-cream">
                                    {element.icon === "hospitality"
                                        ? <HeartHandshake className="size-7 text-accent" aria-hidden="true" strokeWidth={1.5} />
                                        : <img className="size-7 object-contain" src={element.image} alt="" aria-hidden="true" />}
                                </span>
                                <span className="font-display text-sm text-[#a19a8d]" aria-hidden="true">
                                    {String(element.id).padStart(2, "0")}
                                </span>
                            </div>
                            <h2 className="mb-2.5 font-display text-xl font-medium text-green">{element.title}</h2>
                            <p className="m-0 max-w-[315px] text-[0.79rem] leading-7 text-muted">{element.description}</p>
                        </article>
                    ))
                }
            </div>
        
        </section>
    );
};

export default Qualities;