function Footer() {
  return (
    <footer className="bg-green-600 text-white relative mt-28">
      
      {/* Card-ka Som Hospital + Service + Quick Link + Recent Posts isku line */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Som Hospital Card */}
        <div className="bg-green-500 p-6 rounded-xl shadow-xl h-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 flex items-center gap-2">
            <i className="fas fa-hospital-symbol"></i> Som Hospital
          </h2>
          <hr className="border-white/50 mb-4" />
          <div className="flex items-start gap-3 mb-2">
            <i className="fas fa-clock text-white mt-1"></i>
            <p className="text-sm">Open Hours: <br /> Mon - Fri: 8.00 am - 6.00 pm</p>
          </div>
          <div className="flex items-start gap-3 mb-2">
            <i className="fas fa-map-marker-alt text-white mt-1"></i>
            <p className="text-sm">Benadir-Mogadishu-Somalia</p>
          </div>
          <div className="flex items-start gap-3 mb-2">
            <i className="fas fa-phone text-white mt-1"></i>
            <p className="text-sm">+252616789876908778</p>
          </div>
          {/* Social Media Icons */}
          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="hover:text-black"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-black"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-black"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-black"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <div className="border-t border-white/50 pt-3 mt-4">
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-black no-underline text-sm">Why choose us</a></li>
              <li><a href="#" className="hover:text-black no-underline text-sm">Our solutions</a></li>
              <li><a href="#" className="hover:text-black no-underline text-sm">Partners</a></li>
            </ul>
          </div>
        </div>

        {/* Service */}
        <div className="h-auto text-white">
          <h3 className="font-semibold text-lg mb-3">Service</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black no-underline">Why choose us</a></li>
            <li><a href="#" className="hover:text-black no-underline">Our solutions</a></li>
            <li><a href="#" className="hover:text-black no-underline">Partners</a></li>
            <li><a href="#" className="hover:text-black no-underline">Core values</a></li>
            <li><a href="#" className="hover:text-black no-underline">Our projects</a></li>
          </ul>
        </div>

        {/* Quick Link */}
        <div className="h-auto text-white">
          <h3 className="font-semibold text-lg mb-3">Quick Link</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black no-underline">Home</a></li>
            <li><a href="#" className="hover:text-black no-underline">Doctors</a></li>
            <li><a href="#" className="hover:text-black no-underline">About</a></li>
            <li><a href="#" className="hover:text-black no-underline">Contact Us</a></li>
            <li><a href="#" className="hover:text-black no-underline">Booking</a></li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div className="h-auto text-white">
          <h3 className="font-semibold text-lg mb-3">Recent Posts</h3>
          <div className="flex items-center gap-3 mb-2">
            <img src="https://medilo-html.netlify.app/assets/img/recent_post_1.png" className="w-12 h-12 rounded-full" alt="" />
            <div>
              <p className="text-sm">23 Jun 2024</p>
              <a href="#" className="hover:text-black no-underline">We round Solution Mogadishu Blog</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img src="https://medilo-html.netlify.app/assets/img/recent_post_2.png" className="w-12 h-12 rounded-full" alt="" />
            <div>
              <p className="text-sm">20 Jun 2024</p>
              <a href="#" className="hover:text-black no-underline">The Medical Of This Working Health</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black text-gray-300 text-center text-sm py-4">
        <p>Copyright 2024 Som Hospital, All Rights Reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:bg-green-500 no-underline">About Us</a>
          <a href="#" className="hover:bg-green-500 no-underline">Events</a>
          <a href="#" className="hover:bg-green-500 no-underline">News</a>
          <a href="#" className="hover:bg-green-500 no-underline">Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
