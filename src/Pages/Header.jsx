
function Header(){
return <div>
  <div className="flex justify-between px-10">
    <div className="flex gap-2 mt-2">
    <i class="fa-solid fa-user-nurse font-semibold text-3xl text-green-600"></i>
    <p className="font-semibold text-3xl">SOM</p>
    <p className="font-semibold text-3xl text-green-600 ">HOSPITAL</p>
    </div>
  <div>
    <ul className="flex gap-10 text-3xl font-semibold mt-2">
        <li className="hover:bg-green-600 hover:text-white px-2 rounded-lg py-1">Home</li>
        <li className="hover:bg-green-600 hover:text-white px-2 rounded-lg py-1">About</li>
        <li className="hover:bg-green-600 hover:text-white px-2 rounded-lg py-1">Contact</li>
        <li className="hover:bg-green-600 hover:text-white px-2 rounded-lg py-1">Services</li>
        <li className="hover:bg-green-600 hover:text-white px-2 rounded-lg py-1">Booking</li>
    </ul>
  </div>
</div>
</div>
}

export default Header