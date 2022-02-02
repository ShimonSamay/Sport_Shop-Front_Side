import React, { useContext } from "react";
import { pantsContext } from "../../Contexts/Pants-Context";

export default function Pants() {
  let { pantsInfo, setPantsInfo } = useContext(pantsContext);
  return (
    <div>
      {pantsInfo.map((pants) => 
        <p> Pants : {pants.Gender} </p>
      )}
    </div>
  );
}
