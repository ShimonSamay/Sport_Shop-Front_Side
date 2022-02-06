import React, { useContext } from "react";
import { shoesContext } from "../../Contexts/Shoes-Context";
import ShoesCard from "../Shoes-Card/Shoes-Card";
import Loading from "../Loading-Compponent/Loading";

export default function ShoesCards() {
  let { shoesInfo , isLoading } = useContext(shoesContext);
  return (
      <div className="divContainer">
          {
           isLoading ? <Loading/> : shoesInfo.map((shoe) => 
          <div className="card">
                <ShoesCard  shoeItem = {shoe}/> 
          </div>)}
      </div>
  )
}
