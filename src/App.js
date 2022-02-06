import "./App.css";
import { useReducer, useState } from "react";
import { getAllShoes } from "./Services/Shoes-services";
import Shoes from "./Components/Shoes-Component/Shoes-component";
import ShoesProvider from "./Contexts/Shoes-Context";
import PantsProvider from "./Contexts/Pants-Context";
import Pants from "./Components/Pants-Component/Pants-Component";
import EquipmentProvider from "./Contexts/Equipment-Context";
import Equipment from "./Components/Equipment-Component/Equipment-Component";
import ShirtsProvider from "./Contexts/Shirts-Context";
import Shirts from "./Components/Shirts-Component/Shirts-Component";
import ClothingProvider from "./Contexts/Clothing-Context";
import Clothing from "./Components/Clothing-Components/Clothing-Component";
import ShoesInfo from "./Components/Shoes/Shoes";

function App() {
  // let [shoesData, setshoesData] = useState([]);

  // function getAllMovies() {
  //    getAllShoes()
  //   .then(res => setshoesData(res))
  // }

  let countReducer = (state, action) => {
    switch (action.type) {
      case "UP":
        return state + 1;

      case "LOW":
        return state - 1;

      case "RESET":
        return 0;

      case "ADD":
        return state + action.payload ;

      default:
        return state;
    }
  };

  let [count, dispatch] = useReducer(countReducer, 0);
  let [number, setNumber] = useState(0);

  let UpClick = () => {
    dispatch({ type: "UP" });
  };

  let LowClick = () => {
    dispatch({ type: "LOW" });
  };

  let ResetClick = () => {
    dispatch({ type: "RESET" });
  };

  let updateValue = (e) => {
    number = Number(e.target.value);
    console.log(number);
  };

  let putValue = () => {
    setNumber(number);
    dispatch({ type: "ADD", payload : number });
  };
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={UpClick}>up</button>
      <button onClick={LowClick}>low</button>
      <button onClick={ResetClick}>reset</button>
      <br></br>
      <button onClick={putValue}>ADD</button>
      <input onChange={updateValue}></input>
      {/* <ShoesInfo/> */}

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
