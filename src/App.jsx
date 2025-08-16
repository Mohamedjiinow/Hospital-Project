
import {  Route, Routes } from "react-router-dom";
import Header from "./Pages/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Booking from "./Pages/Booking";
import Center from "./Pages/center";
import Doctors from "./Pages/Doctors";
import Home from "./Pages/home";

function App(){
  
  return <div>
  <Header />

    <Routes>
   <Route path="/" element ={<Home />}/>
   <Route path="/about" element ={<About />}/>
   <Route path="/contact" element ={<Contact />}/>
   <Route path="/booking" element ={<Booking />}/>
   <Route path="/Doctors" element ={<Doctors />}/>
    </Routes>

  </div>
}
export default App