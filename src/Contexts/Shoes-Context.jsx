import React, { useEffect } from "react";
import { useState } from "react";
import { getAllShoes } from "../Services/Shoes-services";

export let shoesContext = React.createContext();

export default function ShoesProvider({ children }) {
  let [shoesInfo, setShoesInfo] = useState([]);
  let [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllShoes()
      .then((res) => setShoesInfo(res))
      .catch((rej) => console.log(rej))
      .finally(() => setLoading(false));
  }, []);

  return (
    <shoesContext.Provider value={{ shoesInfo, setShoesInfo, isLoading }}>
      {children}
    </shoesContext.Provider>
  );
}
