import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useRestaurantData } from "../context/RestaurantDataContext.js";

const Menu = () => {
    const { dishes, menuStatus, menuError, retryMenu } = useRestaurantData();
    const { pathname } = useLocation();
    const featuredOnly = pathname === "/";
    const [activeCategory, setActiveCategory] = useState("All");
    const categories = ["All", ...new Set(dishes.map((dish) => dish.category))];
    const Heading = featuredOnly ? "h2" : "h1";
    const visibleDishes = featuredOnly
        ? dishes.slice(0, 4)
        : activeCategory === "All"
            ? dishes
            : dishes.filter((dish) => dish.category === activeCategory);

    return (
        <section className="bg-paper" id="menu">
            {!featuredOnly && (
                <header className="relative overflow-hidden bg-green px-6 py-16 text-center text-white sm:px-10 sm:py-20 lg:py-24">
                    <div className="pointer-events-none absolute -right-16 -top-28 size-80 rounded-full border border-white/10" aria-hidden="true" />
                    <div className="pointer-events-none absolute -right-4 -top-16 size-56 rounded-full border border-white/10" aria-hidden="true" />
                    <div className="relative mx-auto max-w-3xl">
                        <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#e7d3b7]">Newa Ghasa · Kathmandu</p>
                        <h1 className="m-0 font-display text-[clamp(3rem,7vw,5rem)] font-medium leading-[1.05] tracking-tight">A taste worth <em className="text-[#d9b48d]">gathering for.</em></h1>
                        <p className="mx-auto mb-0 mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                            Nepali favorites and comforting classics, thoughtfully made for sharing around the table.
                        </p>
                    </div>
                </header>
            )}
            <div className={`${featuredOnly ? "px-6 py-20 sm:px-10 lg:px-12 lg:py-28" : "px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"}`}>
                <div className="mx-auto max-w-7xl">
                {featuredOnly && (
                    <div className="mx-auto mb-10 max-w-2xl text-center">
                        <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-accent">A few guest favorites</p>
                        <Heading className="m-0 font-display text-[clamp(2.5rem,5vw,3.75rem)] font-medium leading-tight tracking-tight text-green">From our kitchen</Heading>
                        <p className="mx-auto mb-0 mt-4 max-w-lg text-sm leading-7 text-muted">A little taste of what is waiting for you at our table.</p>
                    </div>
                )}
                {!featuredOnly && (
                    <div className="mb-8 flex flex-col gap-3 border-b border-[#e8e3d9] pb-6 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="mb-2 text-[0.67rem] font-bold uppercase tracking-[0.18em] text-accent">Explore the menu</p>
                            <h2 className="m-0 font-display text-3xl font-medium text-green">Made to be enjoyed.</h2>
                        </div>
                        <p className="m-0 text-xs text-muted">Prices shown in Nepali rupees (NPR)</p>
                    </div>
                )}
                {!featuredOnly && menuStatus === "loaded" && (
                    <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter menu by meal">
                        {categories.map((category) => (
                            <button
                                className={`min-h-10 rounded-full border px-5 text-xs font-semibold transition-colors ${activeCategory === category ? "border-green bg-green text-white" : "border-[#dedbd3] bg-transparent text-[#62655f] hover:border-green hover:text-green"}`}
                                key={category}
                                type="button"
                                aria-pressed={activeCategory === category}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                )}
                {menuStatus === "loading" && (
                    <p className="my-10 text-center text-sm text-muted" role="status">Loading the menu…</p>
                )}
                {menuStatus === "error" && (
                    <div className="my-10 flex flex-col items-center gap-4 text-center" role="alert">
                        <p className="m-0 text-sm text-[#8c3d32]">We couldn’t load the menu: {menuError}</p>
                        <button className="rounded-sm border border-green px-5 py-3 text-xs font-semibold text-green transition-colors hover:bg-green hover:text-white" type="button" onClick={retryMenu}>Try again</button>
                    </div>
                )}
                {menuStatus === "loaded" && dishes.length === 0 && (
                    <p className="my-10 text-center text-sm text-muted">There are no menu items available right now.</p>
                )}
                {menuStatus === "loaded" && visibleDishes.length > 0 && (
                    <div className="grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {visibleDishes.map((dish) => (
                            <article className="group min-w-0" key={dish.id}>
                                <div className="relative aspect-[1.12] overflow-hidden bg-cream">
                                    <img className="size-full object-cover transition duration-500 group-hover:scale-105" src={dish.image} alt={dish.title.trim()} loading="lazy" />
                                    <span className="absolute left-3 top-3 bg-paper/95 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-green">{dish.category}</span>
                                </div>
                                <div className="flex items-start justify-between gap-3 border-b border-[#e8e3d9] py-4">
                                    <div className="min-w-0">
                                        <h3 className="m-0 font-display text-lg font-medium text-ink">{dish.title.trim()}</h3>
                                        <p className="mb-0 mt-1.5 text-xs leading-6 text-muted">{dish.description}</p>
                                    </div>
                                    <span className="shrink-0 pt-1 text-xs font-bold text-green">NPR {dish.price}</span>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
                {featuredOnly && (
                    <div className="mt-9 text-center">
                    <Link className="inline-flex min-h-12 items-center justify-center gap-3 border border-[#c9c4b8] px-5 text-xs font-semibold text-ink no-underline transition-colors hover:border-green hover:bg-green hover:text-white" to="/menu">
                        View the full menu <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                    </div>
                )}
                </div>
            </div>
        </section>
    );
};

export default Menu;