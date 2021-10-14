import React from "react";
import Passengers from "./Passengers";

//Spaceships functional component

let SpaceShips = (props) => {
  return props.data.map((starship) => {
    const search = props.search.toLowerCase();
    const name = starship.name.toLowerCase();

    if (!name.startsWith(search)) {
      return <> </>;
    }

    let url = starship.url;
    let id = url.match(/[0-9]+/);
    id = id.join("");
    let imageUrl = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

    //Check if image exists
    const img = new Image();
    img.src = imageUrl;

    return (
      <div className="nave container">
        <h2 className="starFont"> {starship.name} </h2>

        <div className="content row align-items-center">
          {img.complete ? (
            <img className="col-4 h-50 " src={imageUrl} />
          ) : (
            <img
              className="col-4 h-50 "
              src="https://starwars-visualguide.com/assets/img/placeholder.jpg"
            />
          )}

          <div className="info col-6 h-50">
            <p className="starFont"> Model:</p>
            <p>{starship.model} </p>
            <p className="starFont"> Manufacturer: </p>{" "}
            <p> {starship.manufacturer} </p>
            <p className="starFont"> Starship Class: </p>{" "}
            <p> {starship.starship_class} </p>
            <section className="etiquetas">
              <p> MGLT: {starship.MGLT} </p>
              <p> Model: {starship.cost_in_credits} </p>
              <p> Speed: {starship.max_atmosphering_speed} </p>
            </section>
          </div>

            <Passengers className="col" num={starship.passengers} />
        </div>
      </div>
    );
  });
};

export default SpaceShips;
