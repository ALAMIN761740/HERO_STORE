import { FaGlobe, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">
      
      <div className="max-w-7xl mx-auto px-10 py-12 grid md:grid-cols-3   justify-between gap-8 items-start  text-center md:text-left">
        
        <div>
          <Link to="/" className="inline-flex items-center space-x-2">
            <img className="w-8 h-8" src="./../../assets/logo.png" alt="Hero Store logo" />
            <span className="text-lg font-semibold  ">Hero Store</span>
        </Link>
          <p className="mt-4 text-gray-400">
            Your one-stop app store for all your software needs. Discover, download, and manage your favorite applications with ease.
          </p>
        </div>

        <div>
        
          <Link to="/" className="text-gray-400 hover:text-white transition">
            Home
          </Link>

          <Link to="/apps" className="text-gray-400 hover:text-white transition block mt-2">
            Apps
          </Link>
          <Link to="/installation" className="text-gray-400 hover:text-white transition block mt-2">
            Installation
          </Link>
        </div>
      


     
        <div>
          <h3 className="text-lg font-semibold mb-3">Social Links</h3>
          <div className="flex justify-center md:justify-start space-x-4 text-xl">
            <a href="#" aria-label="Website" className="hover:scale-110 transition transform"><FaGlobe /></a>
            <a href="#" aria-label="Twitter" className="hover:scale-110 transition transform"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn" className="hover:scale-110 transition transform"><FaLinkedin /></a>
            <a href="#" aria-label="Instagram" className="hover:scale-110 transition transform"><FaInstagram /></a>
          </div>
        </div>

      </div>

      
      <div className="text-center text-sm border-t border-white/20 py-4">
        © {new Date().getFullYear()} Hero Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;