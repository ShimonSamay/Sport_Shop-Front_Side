import React, { useEffect } from "react";
import { useState } from "react";
import { getAllPants } from "../Services/Pants.service";

export let pantsContext = React.createContext() ;

export default function PantsProvider ({children}) {
    let [pantsInfo , setPantsInfo] = useState([]) ;

    useEffect(() => {
    getAllPants()
    .then(res => setPantsInfo(res))
    } , [])

    return (
        <pantsContext.Provider value={{pantsInfo , setPantsInfo}}>
         {children}
        </pantsContext.Provider>
    )
}