
import {  Route, Routes } from "react-router-dom";
import Header from "./Pages/Header";
import Home from "./Pages/Doctors";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Booking from "./Pages/Booking";
import Center from "./Pages/center";

function App(){
  
  return <div>
  <Header />

    <Routes>
   <Route path="/" element ={<Home />}/>
   <Route path="/about" element ={<About />}/>
   <Route path="/contact" element ={<Contact />}/>
   <Route path="/booking" element ={<Booking />}/>
    </Routes>

  </div>
}
export default App