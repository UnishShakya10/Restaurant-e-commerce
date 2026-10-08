import { useRestaurantData } from "../context/RestaurantDataContext.js";

const WhoAreWe = () => {
    const { who_we_are } = useRestaurantData();

    return (
        <section className="who_are_we" id="who_are_we">
            <div className="container">
                <div className="text_banner">
                    {
                        who_we_are.slice(0,2).map(element=>{
                            return(
                                <div className="card" key={element.id}>
                                    <h2 style={{fontWeight: "300"}} className="heading">{element.number}</h2>
                                    <p>{element.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="image_banner">
                    <img src="/center.svg" alt="center" className="gradient_bg" />
                    <img src="/whoweare.jpeg" alt="who" />
                </div>
                <div className="text_banner">
                    {
                        who_we_are.slice(2).map(element=>{
                            return(
                                <div className="card" key={element.id}>
                                    <h1 style={{fontWeight: "300"}} className="heading">{element.number}</h1>
                                    <p>{element.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default WhoAreWe;