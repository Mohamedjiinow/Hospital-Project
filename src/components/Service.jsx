

function Service() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 bg-gradient-to-b from-gray-50 to-white">
    
      <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
        
        <div>
          <p className="flex items-center gap-2 text-green-600 font-semibold uppercase tracking-wide text-sm">
            <i className="fa-solid fa-briefcase-medical text-green-600"></i> Our Portfolio</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">  All The Great Work That <br  /> We Done  </h2>
        </div>

       
        <div>
          <p className="text-gray-600 text-base leading-relaxed">  We are privileged to work with hundreds of future-thinking medical brands, including many of the world's top healthcare professionals. Our projects cover dental, cardiology, neurology, and laboratory research — always focused on safety, trust, and innovation  </p>
        </div>
      </div>

     
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
       
        <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
          <img src="https://medilo-html.netlify.app/assets/img/project_1.jpg"    alt=""  className="h-72 w-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-xl font-semibold">Medical Of Working</h3>
            <p className="text-sm text-gray-200 mt-1 max-w-xs">  We businesss standard chunk of Ipsum used since is Agency & Star tup  </p>
          </div>
          <span className="absolute top-5 right-5 bg-green-600 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold shadow-lg"> 01</span>
        </div>

        
        <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
          <img src="https://medilo-html.netlify.app/assets/img/project_2.jpg" alt="" className="h-72 w-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-xl font-semibold">Medical Of Dental</h3>
            <p className="text-sm text-gray-200 mt-1 max-w-xs">  We businesss standard chunk of Ipsum used since is Agency & Star tup. </p>
          </div>
          <span className="absolute top-5 right-5 bg-green-600 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold shadow-lg"> 02</span>
        </div>

       
        <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group md:col-span-2 lg:col-span-1">
          <img src="https://medilo-html.netlify.app/assets/img/project_3.jpg"  alt="" className="h-72 w-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-xl font-semibold">Laboratory Technologist</h3>
            <p className="text-sm text-gray-200 mt-1 max-w-xs">  We businesss standard chunk of Ipsum used since is Agency & Star tup. </p>
          </div>
          <span className="absolute top-5 right-5 bg-green-600 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold shadow-lg">  03 </span>
        </div>
      </div>
    </section>
  );
}
export default Service;