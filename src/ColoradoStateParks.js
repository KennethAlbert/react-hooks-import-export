import React from "react";
import { trees, wildlife } from "./parks/RockyMountain";
import MesaVerde from "./parks/MesaVerde";
import howManyParks from "./parks/howManyParks";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  console.log(trees);
// => "Aspen and Pine"

wildlife();
// => "Elk, Bighorn Sheep, Moose

  return ( <MesaVerde />);
}

export default ColoradoStateParks;
