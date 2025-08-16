import CountUp from "react-countup";

function About(){
    return <>
     <div id="about">
        <h1 className="text-center font-semibold text-3xl text-white pt-32 uppercase"> Providing Exceptional Care </h1>
      <h1 className="text-center font-semibold text-7xl text-green-600 pt-10">  About Us </h1>
      </div>

      
      <div className="flex flex-col lg:flex-row justify-around items-center mt-10 pb-10 px-4 lg:px-0">
        <img className="w-full max-w-[500px] h-[250px] sm:h-[300px] lg:h-[350px] rounded-lg object-cover" src="https://shaafihospital.so/img/covid-19-sm.jpg" alt="About Som Hospital" />

        
        <div className="mt-6 lg:mt-0 lg:ml-9 text-center lg:text-left">
          <h1 className="font-semibold text-2xl sm:text-3xl text-green-600">  Who We Are  </h1>
          <p className="text-base sm:text-lg pt-5 max-w-[700px] px-2 sm:px-6 lg:px-10">At SOM Hospital, we are proud to be a leading healthcare institution dedicated  to serving our community with integrity, compassion, and excellence. With a rich history spanning over 7 years, our hospital has evolved into  a trusted healthcare provider known for its commitment to delivering   exceptional care and empowering individuals to live healthier, happier lives.  </p>
        </div>
      </div>

      <div className="bg-green-600 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white px-6">

        <div className="flex flex-col items-center justify-center bg-green-500 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <i className="fa-solid fa-users text-5xl mb-4"></i>
          <h2 className="text-3xl font-bold">
            <CountUp start={0} end={567} duration={3} />+
          </h2>
          <p className="mt-2 text-lg">Active Clients</p>
        </div>

       
        <div className="flex flex-col items-center justify-center bg-green-500 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <i className="fa-solid fa-headset text-5xl mb-4"></i>
          <h2 className="text-3xl font-bold">
            <CountUp start={0} end={23000} duration={3} />+
          </h2>
          <p className="mt-2 text-lg">Team Support</p>
        </div>

        
        <div className="flex flex-col items-center justify-center bg-green-500 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <i className="fa-solid fa-diagram-project text-5xl mb-4"></i>
          <h2 className="text-3xl font-bold"> <CountUp start={0} end={241} duration={3} />+</h2>
          <p className="mt-2 text-lg">Projects Complete</p>
        </div>

       
        <div className="flex flex-col items-center justify-center bg-green-500 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <i className="fa-solid fa-award text-5xl mb-4"></i>
          <h2 className="text-3xl font-bold">
            <CountUp start={0} end={16000} duration={3} />+
          </h2>
          <p className="mt-2 text-lg">Award Winner</p>
        </div>

      </div>
    </div>
   
      <div className="bg-green-500 py-16 px-6">
      <div className="max-w-6xl mx-auto">

       
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold uppercase">Our Best Service</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">  High-Quality Services <br /> This Doctor </h1>
          <p className="text-black max-w-2xl mx-auto mt-4">We are privileged to work with hundreds of future-thinking medical providers, including many of the world’s top hardware, software, and brands.  </p>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
            <i className="fa-solid fa-pills text-4xl text-green-600 mb-4"></i>
            <h2 className="font-semibold text-xl">Pharmacology</h2>
            <p className="text-black mt-2 text-sm"> Medical competitor research startup to financial </p>
          </div>

         
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
            <i className="fa-solid fa-bone text-4xl text-green-600 mb-4"></i>
            <h2 className="font-semibold text-xl text-green-600">Orthopedic</h2>
            <p className="text-black mt-2 text-sm">  Medical competitor research startup to financial  </p>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
            <i className="fa-solid fa-heart-pulse text-4xl  mb-4 text-green-600"></i>
            <h2 className="font-semibold text-xl">Hematology</h2>
            <p className="text-black mt-2 text-sm"> Medical competitor research startup to financial  </p>
          </div>

         
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
            <i className="fa-solid fa-user-doctor text-4xl text-green-600 mb-4 "></i>
            <h2 className="font-semibold text-xl">Plastic Surgery</h2>
            <p className="text-black mt-2 text-sm"> Medical competitor research startup to financial </p>
          </div>

         
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
            <i className="fa-solid fa-brain text-4xl text-green-600 mb-4"></i>
            <h2 className="font-semibold text-xl">Neurology</h2>
            <p className="text-black mt-2 text-sm">   Medical competitor research startup to financial</p>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
            <i className="fa-solid fa-eye text-4xl text-green-600 mb-4"></i>
            <h2 className="font-semibold text-xl">Ophthalmology</h2>
            <p className="text-black mt-2 text-sm"> Medical competitor research startup to financial  </p>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
            <i className="fa-solid fa-tooth text-4xl text-green-600 mb-4"></i>
            <h2 className="font-semibold text-xl">Dental Care</h2>
            <p className="text-black mt-2 text-sm">  Medical competitor research startup to financial  </p>
          </div>

         
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
            <i className="fa-solid fa-stethoscope text-4xl text-green-600 mb-4"></i>
            <h2 className="font-semibold text-xl">Cardiology</h2>
            <p className="text-black mt-2 text-sm"> Medical competitor research startup to financial </p>
          </div>

        </div>
      </div>
    </div>



  </>
}
export default About;




 