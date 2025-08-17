import { NavLink } from "react-router-dom"

function Qeeb(){
    return <div>
        <div className="pt-12">
   <h1 className="flex justify-center pt-6 font-semibold text-green-600 text-3xl uppercase">Our Team Member</h1>
   <p  className="flex justify-center pt-3 font-bold text-3xl pb-7">Meet Our Specialist This <br />
Doctor Meeting</p>
   </div>
   <div>
   <div className=" relative pb-12  flex flex-wrap justify-around">

    {/* 1 */}
    <div className="relative group ml-5 py-5">
  <img className="w-[300px] h-[400px] rounded-lg bg-slate-500"
  src="https://medilo-html.netlify.app/assets/img/team_3.jpg" />

  <div className="hidden group-hover:block ml-14">
     <h1 className="absolute bottom-20 ml-2 text-3xl capitalize font-semibold">
      moha Sharif
    </h1>
    <h1 className="absolute bottom-16 ml-12 text-1xl text-green-600 capitalize font-semibold">
      Neurologist
    </h1>
    <div className="text-3xl text-green-600 absolute bottom-6 ml-8">
      <i className="fa-brands fa-square-instagram"></i>
      <i className="fa-brands fa-square-x-twitter"></i>
      <i className="fa-brands fa-facebook"></i>
    </div>
  </div>
</div>

{/* 2 */}
 <div className="relative group ml-5 py-5">
  <img className="w-[300px] h-[400px] rounded-lg bg-slate-500"
  src="https://medilo-html.netlify.app/assets/img/team_3.jpg" />

  <div className="hidden group-hover:block ml-14">
     <h1 className="absolute bottom-20 ml-2 text-3xl capitalize font-semibold">
      moha Sharif
    </h1>
    <h1 className="absolute bottom-16 ml-12 text-1xl text-green-600 capitalize font-semibold">
      Neurologist
    </h1>
    <div className="text-3xl text-green-600 absolute bottom-6 ml-8">
      <i className="fa-brands fa-square-instagram"></i>
      <i className="fa-brands fa-square-x-twitter"></i>
      <i className="fa-brands fa-facebook"></i>
    </div>
  </div>
</div>

{/* 3 */}

  <div className="relative group ml-5 py-5">
  <img className="w-[300px] h-[400px] rounded-lg bg-slate-500"
  src="https://medilo-html.netlify.app/assets/img/team_3.jpg" />

  <div className="hidden group-hover:block ml-14">
    <h1 className="absolute bottom-20 ml-2 text-3xl capitalize font-semibold">
      moha Sharif
    </h1>
    <h1 className="absolute bottom-16 ml-12 text-1xl text-green-600 capitalize font-semibold">
      Neurologist
    </h1>
    <div className="text-3xl text-green-600 absolute bottom-6 ml-8">
      <i className="fa-brands fa-square-instagram"></i>
      <i className="fa-brands fa-square-x-twitter"></i>
      <i className="fa-brands fa-facebook"></i>
    </div>
  </div>
</div>
   </div>
   <div  className="flex justify-center text-center items-center whitespace-nowrap">
<NavLink to="/doctors">  <button className="bg-green-600 px-8 py-3 rounded-full text-3xl font-semibold text-white border-green-600 border-2 hover:bg-blue-400">View Doctors</button> </NavLink> 
   </div>
   </div>
    </div>
}
export default Qeeb