import React, { useContext } from "react";
import { shirtsContext } from "../../Contexts/Shirts-Context";

export default function Shirts () {
    let {shirtsInfo , setShirtsInfo} = useContext(shirtsContext) ;
    return (
        <div>
           {
             shirtsInfo.map((shirt) => 
             <p>Shirt Price : {shirt.Price} </p>
             )  
           }
        </div>
    )
}