import { FaGlobe, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">
      
      <div className="max-w-7xl mx-auto px-6 py-12 flex  justify-between gap-8 items-start  text-center md:text-left">
        
        
        <NavLink to="/" className="inline-flex items-center space-x-2">
            <img className="w-8 h-8" src="./../../assets/logo.png" alt="Hero Store logo" />
            <span className="text-lg font-semibold  ">Hero Store</span>
        </NavLink>

     
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