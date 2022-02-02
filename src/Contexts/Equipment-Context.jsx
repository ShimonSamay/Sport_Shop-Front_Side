import React, { useEffect } from "react";
import { useState } from "react";
import { getAllEquip } from "../Services/Equipments-Service";

export let EquipmentContxet = React.createContext();

export default function EquipmentProvider({ children }) {
 let [equipInfo, setEquipInfo] = useState([]);

  useEffect(() => {
    getAllEquip((res) => setEquipInfo(res));
  }, [])

  return (
    <EquipmentContxet.Provider value={{ equipInfo, setEquipInfo }}>
      {children}
    </EquipmentContxet.Provider>
  );
}
 