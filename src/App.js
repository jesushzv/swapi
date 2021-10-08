//CHECK THIS OUT science BITCH!
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  //2 manejo de estados
  const [apiData, setApiData] = useState([]);
  const [inputState, setInputState] = useState("");
  const [starship, setStarship] = useState("Death Star");

  // 1 Manejo de la api

  const apiUrl = `https://swapi.dev/api/starships/?page=`;

  //#3 Side effect: useEffect
  //Manda a llamar la API y actualiza el estado solo cuando apiURL cambie

  let getData = (num) => {
    fetch(`${apiUrl}${num}`)
      .then((res) => res.json())
      .then((data) => setApiData((past) => [...past, ...data.results]));
  };

  useEffect(() => {
    for (let i = 1; i <= 4; i++) {
      getData(i);
    }
  }, []);


  //Passengers functional component with a button to actualize the number of passengers
  let Passengers = (props) => {
    var [pas, setPas] = useState(parseInt(props.num));

    return (
      <>
        <p>Passengers: {pas}</p>
        <button onClick={() => setPas((past) => past + 1)}> + </button>
      </>
    );
  };

  return (
    <div className="App">
      {console.log(apiData)}

      <h2>List of starships:</h2>

      <div>
        {apiData.map((starship) => {
          let url = starship.url;
          let id = url.match(/[0-9]+/);
          id = id.join("");
          let imageUrl = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

          return (
            <div>
              <h2> {starship.name} </h2>
              <p> Model: {starship.model} </p>
              <p> Manufacturer: {starship.manufacturer} </p>
              <p> Starship Class: {starship.starship_class} </p>

              <section className="etiquetas">
                <p> MGLT: {starship.MGLT} </p>
                <p> Model: {starship.cost_in_credits} </p>
                <p> Speed: {starship.max_atmosphering_speed} </p>
                <img width="100" height="100" src={imageUrl} alt="spaceShipImage" />

                <Passengers num={starship.passengers} />
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
