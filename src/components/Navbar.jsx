import { NavLink  } from "react-router";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {



    // Function to determine the class for active and inactive links
    const navClass = ({ isActive }) =>
    `relative  font-semibold pb-1 transition-all ${
        isActive
        ? "text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-gradient-to-br after:from-[#632EE3] after:to-[#9F62F2]"
        : "text-black hover:text-gray-500"
    }`
    ;



  return (
    <nav className="flex justify-between p-4  shadow">
      <NavLink to="/" className="inline-flex items-center space-x-2">
        <img className="w-8 h-8" src="./../../assets/logo.png" alt="Hero Store logo" />
        <span className="text-lg font-semibold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Hero Store</span>
      </NavLink>

      <div className="space-x-6">
            <NavLink to="/" className={navClass}>
                Home
            </NavLink>

            <NavLink to="/apps" className={navClass}>
                Apps
            </NavLink>

            <NavLink to="/installation" className={navClass}>
                Installation
            </NavLink>
    </div>

      <a
        href="https://github.com/ALAMIN761740"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded"
      >
        <FaGithub />
        <span>Contribution</span>
      </a>
    </nav>
  );
};

export default Navbar;