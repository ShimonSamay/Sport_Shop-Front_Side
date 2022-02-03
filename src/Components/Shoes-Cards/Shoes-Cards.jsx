import React, { useContext } from "react";
import { shoesContext } from "../../Contexts/Shoes-Context";
import ShoesCard from "../Shoes-Card/Shoes-Card";

export default function ShoesCards() {
  let { shoesInfo } = useContext(shoesContext);
  return (
      <div className="divContainer">
          {shoesInfo.map((shoe) => 
          <div className="card">
            {
               <ShoesCard  shoeItem = {shoe} /> 
            }
          </div>)}
      </div>
  )
}
