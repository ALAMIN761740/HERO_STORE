import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 shadow">
      <NavLink to="/">Hero IO</NavLink>

      <div className="space-x-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/apps">Apps</NavLink>
        <NavLink to="/installation">Installation</NavLink>
      </div>

      <a href="https://github.com/your-profile">Contribution</a>
    </nav>
  );
};

export default Navbar;