import React, {useState} from "react";

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

export default Passengers