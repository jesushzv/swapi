import { useState, useEffect } from "react";
import "./App.css";
import SpaceShips from "./SpaceShips";

function App() {
  //2 manejo de estados
  const [apiData, setApiData] = useState([]);
  const [spaceship, setSpaceship] = useState("");

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

  return (
    <div className="App">
      <input
        onChange={(event) => setSpaceship(event.target.value)}
        id="searchBar"
        type="text"
        placeholder="Search for a spaceship"
      />

      <SpaceShips search={spaceship} data={apiData} />


    </div>
  );
}

export default App;
