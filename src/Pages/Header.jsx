
import { useState } from "react"
import { NavLink } from "react-router-dom"

function Header(){

const [open, Setopen] = useState(false)

  const handleisopen= ()=>{
    Setopen(true)
  }

  const handleisclose= ()=>{
    Setopen(false)
  }

return <div>
  <div className="flex justify-between sm:px-10 sm:bg-white bg-black">
    <div className="flex gap-20 mt-2">
      <div className="flex gap-3">
    <i class="fa-solid fa-user-nurse font-semibold text-3xl text-green-600 sm:hover:bg-green-600 sm:hover:text-white sm:hover:rounded-lg "></i>
    <p className="font-semibold text-3xl sm:text-black text-white">SOM</p>
    <p className="font-semibold text-3xl sm:text-green-600 text-white ">HOSPITAL</p>
    </div>
     <i onClick={handleisopen}  style={{display: open===true?"none":""}} class="fa-solid fa-bars font-semibold text-3xl text-white sm:hidden transform transition-all"></i>
     <i onClick={handleisclose} style={{display: open===true?"block":""}}  class="fa-solid fa-x  text-3xl text-white font-semibold hidden"></i>
    </div>
  <div  className="sm:flex block pb-6 ">
    <ul style={{display: open===true?"block":""}}  className="sm:flex hidden gap-10 text-3xl font-semibold sm:ml-0 sm:mt-2 mt-16 -ml-64 sm:text-black text-white">
        <li className="hover:bg-green-600 hover:text-white sm:px-2 rounded-lg py-1">Home</li>
        <NavLink to=""> <li className="hover:bg-green-600 hover:text-white sm:px-2 rounded-lg py-1">About</li></NavLink>
        <li className="hover:bg-green-600 hover:text-white sm:px-2 rounded-lg py-1">Contact</li>
        <li className="hover:bg-green-600 hover:text-white sm:px-2 rounded-lg py-1">Booking</li>
    </ul>
    
  </div>
</div>

</div>
}

export default Header;