import { useRestaurantData } from "../context/RestaurantDataContext.js";

const Qualities = () => {
    const { ourQualities } = useRestaurantData();

    return (
        <section className="qualities" id="qualities">
            <div className="container">
                {
                    ourQualities.map(element=>(
                        <div className="card" key={element.id}>
                            <img src={element.image} alt={element.title} />
                            <p className="title">{element.title}</p>
                            <p className="description">{element.description}</p>
                        </div>
                    ))
                }
            </div>
        
        </section>
    );
};

export default Qualities;