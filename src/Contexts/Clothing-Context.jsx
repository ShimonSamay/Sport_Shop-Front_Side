import React, { useEffect } from "react";
import { useState } from "react";
import { getAllClothing } from "../Services/Clothing-services";

export let clothingContext = React.createContext();

export default function ClothingProvider ({children}) {
    let [clothingInfo , setClothingInfo] = useState([]);
    useEffect(() => {
        getAllClothing()
        .then(res => setClothingInfo(res));
    } , [])
    return (
        <clothingContext.Provider value={{clothingInfo , setClothingInfo}}>
          {children}
        </clothingContext.Provider>
    )
}