function Offer() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10"><h4 className="text-green-600 font-semibold uppercase tracking-wide">Service Offerings</h4><h2 className="text-3xl font-bold mt-2">Explore Our Service Offerings</h2></div>
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <h1 className="flex items-center gap-2 px-6 py-3 rounded-md font-semibold bg-green-600 text-white relative transition"><i className="fas fa-brain"></i>Modern Technology</h1>
        <h1 className="flex items-center gap-2 px-6 py-3 rounded-md font-semibold bg-gray-100 text-gray-800 hover:bg-green-600 hover:text-white transition"><i className="fas fa-heartbeat"></i>Success of Treatment</h1>
        <h1 className="flex items-center gap-2 px-6 py-3 rounded-md font-semibold bg-gray-100 text-gray-800 hover:bg-green-600 hover:text-white transition"><i className="fas fa-user-md"></i>Certified Doctors</h1>
        <h1 className="flex items-center gap-2 px-6 py-3 rounded-md font-semibold bg-gray-100 text-gray-800 hover:bg-green-600 hover:text-white transition"><i className="fas fa-stethoscope"></i>Medical Advice</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div><img src="https://medilo-html.netlify.app/assets/img/offerings03.jpg" alt="Service" className="rounded-lg shadow-md" /></div>
        <div className="flex flex-col justify-center"><h3 className="text-2xl font-bold mb-4">We use Modern Technology</h3><p className="text-gray-600 mb-4">We are privileged to work with hundreds of future-thinking medical specialists, including many of the world’s top hardware, software, and healthcare providers, making sure patients feel safe and comfortable.</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><i className="fas fa-check text-green-600 mt-1"></i>Medical sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.</li>
            <li className="flex items-start gap-2"><i className="fas fa-check text-green-600 mt-1"></i>Professional team ensuring top quality treatment and care.</li>
            <li className="flex items-start gap-2"><i className="fas fa-check text-green-600 mt-1"></i>24/7 medical advice and patient support.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Offer;
