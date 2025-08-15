import { useState } from "react";
import Cards from "../components/doctorImages";
import Center from "./center";
function Home() {
    const [search, setsearch]= useState("")
    const [specialist, Setspecialist] =useState("")

    const filterdata= Cards.filter((xog)=>{
        const searchdata=xog.title.toLowerCase().includes(search.toLowerCase())||xog.name.toLowerCase().includes(search.toLowerCase())
        const selectedspecialist= specialist ? xog.specialist===specialist : true
        return searchdata && selectedspecialist
    })
  return <div>
    <div className="flex flex-wrap justify-around gap-1 w-full py-5">
      <input value={search ||specialist} onChange={(e)=>setsearch(e.target.value) } type="text" name="doctor" className="px-3 sm:w-[370px] w-[300px] py-2 border-2 border-green-600 outline-none rounded-lg "  placeholder="search doctors" />
      <div className="sm:gap-2 gap-1 flex">
      <input  type="radio" name="specialist" value={""} onChange={(e)=>Setspecialist("")}  /> <label className=" sm:text-2xl text-xl sm:font-semibold">All</label>
      <input  type="radio" name="specialist" value={"Medicine"} onChange={(e)=>Setspecialist("Medicine")} /> <label className=" sm:text-2xl text-xl sm:font-semibold">medicine</label>
      <input  type="radio" name="specialist" value={"Neurology"} onChange={(e)=>Setspecialist("Neurology")} /> <label className=" sm:text-2xl text-xl sm:font-semibold">Neurology</label>
      <input  type="radio" name="specialist" value={"Cardiology"} onChange={(e)=>Setspecialist("Cardiology")} /> <label className=" sm:text-2xl text-xl sm:font-semibold">Cardiology</label>
      </div>
    </div>
    <div className="flex flex-wrap justify-center gap-6 mt-6">

      {
     filterdata.length > 0 ? filterdata.map((doc) => {
       return <div
          className="border-2 border-black p-4 rounded-lg w-[250px] transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-red-500 hover:text-white"   >
          <img className="w-full h-[200px] object-cover rounded-lg" src={doc.image}  alt=""  />
          <div className="text-center mt-3">
            <p className="text-2xl font-semibold">{doc.name}</p>
            <p className="text-lg ">{doc.title}</p>
            <button className="bg-green-600 px-5 py-2 rounded-lg text-white mt-4 hover:bg-fuchsia-500 transition duration-300">View Profile </button>
          </div>
        </div>
})
:  <p className="text-5xl font-semibold text-red-600 mt-16">There's Nothing Here!</p>
}
    </div>
    <Center />
    </div>
}

export default Home;

