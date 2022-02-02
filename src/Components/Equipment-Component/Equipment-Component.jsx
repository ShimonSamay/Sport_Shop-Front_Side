import React, { useContext } from "react";
import { EquipmentContxet } from "../../Contexts/Equipment-Context";

export default function Equipment() {
  let { equipInfo, setEquipInfo } = useContext(EquipmentContxet);

  return (
    <div>
      {equipInfo.map((equip) => 
      <p> Product : {equip.Company}</p>
    )}
    </div>
  );
}
