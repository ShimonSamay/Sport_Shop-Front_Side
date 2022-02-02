import React, { useEffect } from "react";
import { useState } from "react";
import { getAllShirts } from "../Services/Shirts-Services";

export let shirtsContext = React.createContext();

export default function ShirtsProvider ({children}) {

    let [shirtsInfo  , setShirtsInfo] = useState ([]);
    useEffect(() => {
        getAllShirts()
        .then(res => setShirtsInfo(res))
    } , [])
    return (
        <shirtsContext.Provider value={{shirtsInfo,setShirtsInfo}}>
            {children}
        </shirtsContext.Provider>
    )
}