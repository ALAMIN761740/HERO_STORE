import { NavLink  } from "react-router";
import { FaGithub, FaHome , FaDownload ,FaThLarge} from "react-icons/fa";
import heroImg from "./../../assets/logo.png"


const Navbar = () => {



const navClass = ({ isActive }) =>
  `relative flex items-center gap-2 mx-3 font-semibold pb-1 transition-all duration-300 ${
    isActive
      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2]"
      : "text-black hover:text-gray-500"
  }`;



  return (
    <nav className="px-10 flex justify-between p-4  shadow">
      <NavLink to="/" className="inline-flex items-center space-x-2">
        <img className="w-8 h-8" src={heroImg} alt="Hero Store logo" />
        <span className="text-lg font-semibold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Hero Store</span>
      </NavLink>

<div className="flex items-center gap-4">

  <NavLink to="/" className={navClass}>
    <FaHome />
    <span>Home</span>
  </NavLink>

  <NavLink to="/apps" className={navClass}>
    <FaThLarge />
    <span>Apps</span>
  </NavLink>

  <NavLink to="/installation" className={navClass}>
    <FaDownload />
    <span>Installation</span>
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