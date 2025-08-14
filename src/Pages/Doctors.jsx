import Cards from "../components/doctorImages";

function Doctors() {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-6">

      {Cards.map((doc) => (
        <div
          className="border-2 border-black p-4 rounded-lg w-[250px] transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-red-500 hover:text-white"   >
          <img className="w-full h-[200px] object-cover rounded-lg" src={doc.image}  alt=""  />
          <div className="text-center mt-3">
            <p className="text-2xl font-semibold">{doc.name}</p>
            <p className="text-lg text-gray-700 ">{doc.specialist}</p>
            <button className="bg-green-600 px-5 py-2 rounded-lg text-white mt-4 hover:bg-fuchsia-500 transition duration-300">  View Profile </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Doctors;
