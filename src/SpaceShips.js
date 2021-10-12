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
      <div className="nave">
        <h2> {starship.name} </h2>
        <p> Model: {starship.model} </p>
        <p> Manufacturer: {starship.manufacturer} </p>
        <p> Starship Class: {starship.starship_class} </p>

        <section className="etiquetas">
          <p> MGLT: {starship.MGLT} </p>
          <p> Model: {starship.cost_in_credits} </p>
          <p> Speed: {starship.max_atmosphering_speed} </p>

          {img.complete ? (
            <img width="100" height="100" src={imageUrl} />
          ) : (
            <img
              width="100"
              height="100"
              src="https://starwars-visualguide.com/assets/img/placeholder.jpg"
            />
          )}
        </section>

        <Passengers num={starship.passengers} />
      </div>
    );
  });
};

export default SpaceShips;
