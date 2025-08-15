
import {  Route, Routes } from "react-router-dom";
import Center from "./Pages/center";
import Doctors from "./Pages/Doctors";
import Header from "./Pages/Header";

function App(){
  
  return <div>
  <Header />
    <Doctors />
    <Center />
    <div>

   
    <Routes>
    </Routes>
     </div>
  </div>
}
export default App