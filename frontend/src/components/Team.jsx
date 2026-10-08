import { useRestaurantData } from "../context/RestaurantDataContext.js";

const Team = () => {
    const { team } = useRestaurantData();

    return (
        <section className="team" id="team">
            <div className="container">
                <div className="heading_section">
                    <h1 className="heading">OUR TEAM</h1>
                    <p>Behind every great dish is an even greater team. Our passionate chefs and dedicated staff bring years of experience, creativity, and love for food to the table every single day. Meet the people who make the magic happen.</p>

                </div>
                <div className="team_container">
                    {
                        team.map(element=>{
                            return(
                                <div className="card" key={element.id}>
                                    <img src={element.image} alt={element.name} />
                                    <h3>{element.name}</h3>
                                    <p>{element.designation}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Team;