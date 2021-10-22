import React, {useState} from "react";

 //Passengers functional component with a button to actualize the number of passengers
 let Passengers = (props) => {
    var [pas, setPas] = useState(parseInt(props.num));

    return (
      <div className="col text-center" >
        <p>{pas}</p>
        <button onClick={() => setPas((past) => past + 1)}> + </button>
      </div>
    );
  };

export default Passengers