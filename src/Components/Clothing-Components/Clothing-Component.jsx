import React, { useContext } from "react";
import { clothingContext } from "../../Contexts/Clothing-Context";

export default function Clothing() {
  let { clothingInfo, setClothingInfo } = useContext(clothingContext);
  return (
    <div>
      {clothingInfo.map((clothe) => (
        <p>Clothing Type : {clothe.ClothingType}</p>
      ))}
    </div>
  );
}
