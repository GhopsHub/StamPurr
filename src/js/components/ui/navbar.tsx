import { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../../assets/images/stampurr.png';
import { Menu } from 'lucide-react';
import NamePage from '../assets/namepage';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" relative shadow-md bg-beige h-14">
      <div className="flex items-center justify-between h-14 px-2 sm:px-4">

        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <NamePage />
        </Link>

        {/* Menú escritorio */}
        <ul className="hidden sm:flex gap-8 text-xl">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products/">Products</Link></li>
          <li><Link to="/aboutus/">About Us</Link></li>
          <li><Link to="/contact/">Contact</Link></li>
        </ul>

        {/* Botón del menú móvil */}
        <button
          title="button-navbar"
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Menú para móvil */}
      {isOpen && (
        <ul className="absolute left-0 right-0 sm:hidden flex flex-col items-center gap-5 text-xl py-5 mt-1 rounded-b-lg shadow-lg">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/products/" onClick={() => setIsOpen(false)}>Products</Link></li>
          <li><Link to="/aboutus/" onClick={() => setIsOpen(false)}>About us</Link></li>
          <li><Link to="/contact/" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
