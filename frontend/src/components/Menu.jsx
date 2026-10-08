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
        <section className="menu" id="menu">
            <div className="container">
                <div className="heading_section">
                    <p className="eyebrow">{featuredOnly ? "A few guest favorites" : "Thoughtfully made, generously served"}</p>
                    <Heading className="heading">{featuredOnly ? "From our kitchen" : "The menu"}</Heading>
                    <p>{featuredOnly
                        ? "A little taste of what is waiting for you at our table."
                        : "Discover comforting classics and vibrant flavors inspired by the Nepali table."}</p>
                    <p className="menu__price-note">Sample prices in Nepali rupees (NPR); please confirm before publishing.</p>
                </div>
                {!featuredOnly && menuStatus === "loaded" && (
                    <div className="menu__filters" role="group" aria-label="Filter menu by meal">
                        {categories.map((category) => (
                            <button
                                className={activeCategory === category ? "menu__filter menu__filter--active" : "menu__filter"}
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
                    <p className="menu__status" role="status">Loading the menu…</p>
                )}
                {menuStatus === "error" && (
                    <div className="menu__status menu__status--error" role="alert">
                        <p>We couldn’t load the menu: {menuError}</p>
                        <button className="button button--outline" type="button" onClick={retryMenu}>Try again</button>
                    </div>
                )}
                {menuStatus === "loaded" && dishes.length === 0 && (
                    <p className="menu__status">There are no menu items available right now.</p>
                )}
                {menuStatus === "loaded" && visibleDishes.length > 0 && (
                    <div className="dishes_container">
                        {visibleDishes.map((dish) => (
                            <article className="card" key={dish.id}>
                                <div className="menu__image-wrap">
                                    <img src={dish.image} alt={dish.title.trim()} loading="lazy" />
                                    <span className="menu__category">{dish.category}</span>
                                </div>
                                <div className="menu__dish-details">
                                    <div>
                                        <h3>{dish.title.trim()}</h3>
                                        <p>{dish.description}</p>
                                    </div>
                                    <span className="menu__price">NPR {dish.price}</span>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
                {featuredOnly && (
                    <Link className="button button--outline menu__all-link" to="/menu">
                        View the full menu <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                )}
            </div>
        </section>
    );
};

export default Menu;