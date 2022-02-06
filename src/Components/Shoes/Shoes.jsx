import React from "react";
import ShoesProvider from "../../Contexts/Shoes-Context";
import ShoesCards from "../Shoes-Cards/Shoes-Cards";
import Header from "../Header-Component/Header";


export default function ShoesInfo() {
  return (
    <ShoesProvider>
      <Header/>
      <ShoesCards />
    </ShoesProvider>
  );
}
