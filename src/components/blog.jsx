function Blog() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mt-2">Latest Posts & Articles</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://medilo-html.netlify.app/assets/img/post_1.jpeg" alt="" className="w-full h-60 object-cover"/>
          <div className="p-5">
            <p className="text-sm text-gray-500 mb-2 flex items-center gap-4"><span><i className="fas fa-user mr-1"></i> By: Admin</span><span><i className="fas fa-comment mr-1"></i> 2 Comments</span></p>
            <h3 className="text-lg font-bold mb-2">Medical Of This Working Health Blog</h3>
            <p className="text-gray-600 mb-3">This article explores the importance of maintaining a balanced lifestyle in order to prevent common illnesses. We also provide medical advice on how to improve immunity and stay healthy in daily routines.</p>
            <a href="#" className="text-green-600 font-semibold hover:underline">Read More <i className="fas fa-arrow-right ml-1"></i></a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://medilo-html.netlify.app/assets/img/post_2.jpeg" alt="" className="w-full h-60 object-cover"/>
          <div className="p-5">
            <p className="text-sm text-gray-500 mb-2 flex items-center gap-4"><span><i className="fas fa-user mr-1"></i> By: Admin</span><span><i className="fas fa-comment mr-1"></i> 5 Comments</span></p>
            <h3 className="text-lg font-bold mb-2">There Is Only One Thing That Is Hospital.</h3>
            <p className="text-gray-600 mb-3">Hospitals are not just for emergencies; they play a vital role in preventive healthcare, routine checkups, and guiding patients towards better health decisions for long-term wellness.</p>
            <a href="#" className="text-green-600 font-semibold hover:underline">Read More <i className="fas fa-arrow-right ml-1"></i></a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://medilo-html.netlify.app/assets/img/post_3.jpeg" alt="" className="w-full h-60 object-cover"/>
          <div className="p-5">
            <p className="text-sm text-gray-500 mb-2 flex items-center gap-4"><span><i className="fas fa-user mr-1"></i> By: Admin</span><span><i className="fas fa-comment mr-1"></i> 3 Comments</span></p>
            <h3 className="text-lg font-bold mb-2">This Working World and Infection Prevention.</h3>
            <p className="text-gray-600 mb-3">In the modern workplace, infection prevention is more important than ever. Learn how to protect yourself and your colleagues with simple but effective hygiene practices and workplace safety measures.</p>
            <a href="#" className="text-green-600 font-semibold hover:underline">Read More <i className="fas fa-arrow-right ml-1"></i></a>
          </div>
        </div>

      </div>
    </section>
  )
}
export default Blog;
