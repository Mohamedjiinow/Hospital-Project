import { useState } from "react";
import Cards from "../components/doctorImages";
import Center from "./center";
import CountUp from "react-countup";
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
    <div id="center" className="mt-10">
    
    </div>
   
    <div className="flex justify-center items-center text-center py-4 px-4">
      <div className="py-3">
        <h1 className="text-2xl sm:text-3xl pb-4">Care you can believe in</h1>
        <h1 className="font-semibold text-3xl sm:text-4xl text-green-600 pb-2"> Why Choose Us</h1>
        <h1 className="text-black text-sm sm:text-base"> At SOM Hospital, your health and well-being are at the core of everything we do. <br className="hidden sm:block"/>   We are here to provide exceptional medical care, promote wellness, and support <br className="hidden sm:block"/>  you in achieving a healthier life </h1>
      </div>
    </div>


    <div className="flex flex-wrap justify-center gap-6 py-6 px-4">
      <div className="flex flex-col justify-center items-center bg-green-600 text-white w-[200px] h-[120px] rounded-lg">
        <h1 className="text-4xl font-bold"><CountUp start={0} end={100} duration={3} />+</h1>
        <h1 className="text-black text-lg">Beds</h1>
      </div>

      <div className="flex flex-col justify-center items-center bg-green-600 text-white w-[200px] h-[120px] rounded-lg">
        <h1 className="text-4xl font-bold"><CountUp start={0} end={55} duration={3} />+ </h1>  
        <h1 className="text-black text-lg">Doctors</h1>
      </div>

      <div className="flex flex-col justify-center items-center bg-green-600 text-white w-[200px] h-[120px] rounded-lg">
        <h1 className="text-4xl font-bold"><CountUp start={0} end={30} duration={3} />+ </h1>
        <h1 className="text-black text-lg">Specialists</h1>
      </div>
    </div>

   
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 mt-10 px-4">
      
      <div className="text-center border-2 border-gray-300 p-5 rounded-lg">
        <div className="bg-red-600 rounded-full w-12 h-12 flex justify-center items-center mx-auto">
          <i className="fa-solid fa-heart-pulse text-white text-lg"></i>
        </div>
        <h1 className="font-semibold text-xl sm:text-2xl pt-4 pb-3">Excellence in Healthcare</h1>
        <p className="text-black text-sm sm:text-base">  Our hospital is renowned for its commitment to excellence in healthcare. We have a team of experienced doctors, nurses, and support staff who work together to ensure the highest standards of medical care.</p>
      </div>

      
      <div className="text-center border-2 border-gray-300 p-5 rounded-lg">
        <div className="bg-red-600 rounded-full w-12 h-12 flex justify-center items-center mx-auto">
          <i className="fa-solid fa-lungs text-white text-lg"></i>
        </div>
        <h1 className="font-semibold text-xl sm:text-2xl pt-4 pb-3">Advanced Treatments</h1>
        <p className="text-black text-sm sm:text-base"> Our hospital provides state-of-the-art treatments with modern equipment and highly trained professionals for complex cases and surgeries.</p>
      </div>

     
      <div className="text-center border-2 border-gray-300 p-5 rounded-lg">
        <div className="bg-red-600 rounded-full w-12 h-12 flex justify-center items-center mx-auto">
          <i className="fa-solid fa-hospital text-white text-lg"></i>
        </div>
        <h1 className="font-semibold text-xl sm:text-2xl pt-4 pb-3">Trusted Facility</h1>
        <p className="text-black text-sm sm:text-base">  We are equipped to handle a wide range of medical conditions, from routine check-ups to complex healthcare needs. </p>
      </div>

     
      <div className="text-center border-2 border-gray-300 p-5 rounded-lg">
        <div className="bg-red-600 rounded-full w-12 h-12 flex justify-center items-center mx-auto">
          <i className="fa-solid fa-stethoscope text-white text-lg"></i>
        </div>
        <h1 className="font-semibold text-xl sm:text-2xl pt-4 pb-3">Expert Doctors</h1>
        <p className="text-black text-sm sm:text-base">  Our team of doctors brings years of expertise across different specialties to give you reliable medical services. </p> </div>

     
      <div className="text-center border-2 border-gray-300 p-5 rounded-lg">
        <div className="bg-red-600 rounded-full w-12 h-12 flex justify-center items-center mx-auto">
          <i className="fa-solid fa-truck-medical text-white text-lg"></i>
        </div>
        <h1 className="font-semibold text-xl sm:text-2xl pt-4 pb-3">Emergency Services</h1>
        <p className="text-gray-600 text-sm sm:text-base">  Our emergency services are always ready to respond quickly and provide the best urgent care to patients. </p>
      </div>

    </div>

    </div>
  
}

export default Home;

