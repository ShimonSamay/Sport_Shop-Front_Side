import "./App.css";
import { useState } from "react";
import { getAllShoes } from "./Services/Shoes-services";
import Shoes from "./Components/Shoes-Component/Shoes-component";
import ShoesProvider from "./Contexts/Shoes-Context";
import PantsProvider from "./Contexts/Pants-Context";
import Pants from "./Components/Pants-Component/Pants-Component";
import EquipmentProvider from "./Contexts/Equipment-Context";
import Equipment from "./Components/Equipment-Component/Equipment-Component";
import ShirtsProvider from "./Contexts/Shirts-Context";
import Shirts from "./Components/Shirts-Component/Shirts-Component"
import ClothingProvider from "./Contexts/Clothing-Context";
import Clothing from "./Components/Clothing-Components/Clothing-Component";
import ShoesInfo from "./Components/Shoes/Shoes";

function App() {
  // let [shoesData, setshoesData] = useState([]);

  // function getAllMovies() {
  //    getAllShoes()
  //   .then(res => setshoesData(res))
  // }

  return (
    <div className="App">
     <ShoesInfo/>

      {/* <ShoesProvider>
        <Shoes/>
      </ShoesProvider>
      <PantsProvider>
       <Pants/>
      </PantsProvider> */}
      {/* <EquipmentProvider>
        <Equipment/>
      </EquipmentProvider> */}
      {/* <ShirtsProvider>
        <Shirts/>
      </ShirtsProvider> */}
      {/* <ClothingProvider>
        <Clothing/>
      </ClothingProvider> */}




      {/* <button onClick={getAllMovies}>Get All Shoes</button>
      <div>
        {shoesData.map((shoe) => (
          <p>Shoe Model : {shoe.Model}</p>
        ))}
      </div> */}
    </div>
  );
}

export default App;
