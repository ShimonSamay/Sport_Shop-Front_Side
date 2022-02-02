import React, { useEffect } from "react";
import { useState } from "react";
import { getAllShoes } from "../Services/Shoes-services";

export let shoesContext = React.createContext();
let shoesArray = ["adidas", "nike", "reebok"];

export default function ShoesProvider({ children }) {
  let [shoesInfo, setShoesInfo] = useState([]);

  useEffect(() => {
    getAllShoes()
    .then(res => setShoesInfo(res))
  }, [] )

  return (
    <shoesContext.Provider value={{ shoesInfo, setShoesInfo }}>
      {children}
    </shoesContext.Provider>
  );
}
