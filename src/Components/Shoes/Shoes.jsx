import React from "react";
import ShoesProvider from "../../Contexts/Shoes-Context";
import ShoesCards from "../Shoes-Cards/Shoes-Cards";

export default function ShoesInfo() {
  return (
    <ShoesProvider>
      <ShoesCards />
    </ShoesProvider>
  );
}
