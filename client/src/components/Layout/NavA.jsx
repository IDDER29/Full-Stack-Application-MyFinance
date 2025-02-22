// src/Navbar.js
import { Link } from "react-router-dom";
import { FaHome, FaChartPie, FaUser, FaSignOutAlt } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

const NavbarA = () => {
  const logout = () => {
    localStorage.removeItem('token');
    navigation('/');
  }
  return (
    <div className="bg-gradient-to-b from-teal-300 to-blue-700 w-24 flex flex-col items-center py-8 rounded-xl shadow-lg ">
      <div className="mb-10">
        <img src="./logo.png" alt="Logo" className="w-12 h-12" />
      </div>
      <nav className="flex flex-col space-y-10">
        <Link to="/home" className="text-white flex flex-col items-center">
          <FaHome size={24} />
          <span className="text-sm mt-2">Accueil</span>
        </Link>
        <Link to="/dashboard" className="text-white flex flex-col items-center">
          <FaChartPie size={24} />
          <span className="text-sm mt-2">Dashboard</span>
        </Link>
        <Link to="/profile" className="text-white flex flex-col items-center">
          <FaUser size={24} />
          <span className="text-sm mt-2">Profil</span>
        </Link>
      </nav>
      <div className="mt-auto">
        <Link to="/" className="text-white flex flex-col items-center" onClick={logout}> 
          <FaSignOutAlt size={24} />
          <span className="text-sm mt-2">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default NavbarA;
