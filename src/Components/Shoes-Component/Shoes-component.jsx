import React, { useContext } from "react";
import { shoesContext } from "../../Contexts/Shoes-Context";

export default function Shoes() {
  let {shoesInfo , setShoesInfo} = useContext(shoesContext);
  return (
    <div>
        {
            shoesInfo.map((shoe) => 
            <p> Model : {shoe.Model} </p>
            )
        }
    </div>
  );
}
