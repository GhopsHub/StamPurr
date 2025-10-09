import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag, Info, Phone } from "lucide-react";
import NameMoreLogo from "../../components/assets/namemorelogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="top-0 left-0 right-0 shadow-md transition-all duration-300 h-28 sm:h-25">
      <div className="relative flex flex-col items-center justify-center h-full">
        {/* Botón menú siempre visible (izquierda) */}
        <button
          onClick={() => setIsOpen(true)}
          className="absolute left-3 top-1/2 -translate-y-1/2"
        >
          <Menu size={28} />
        </button>

        {/* Logo centrado */}
        <Link to="/" className="flex items-center justify-center">
          <NameMoreLogo />
        </Link>
      </div>

      {/* Sidebar izquierdo */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        {/* Header del sidebar */}
        <div className="flex items-center justify-between h-14 mt-7 px-4 border-b border-gray-200">
          <p className="text-lg font-semibold">Menú</p>
          <button onClick={() => setIsOpen(false)}>
            <X size={26} />
          </button>
        </div>

        {/* Enlaces del sidebar */}
        <ul className="flex flex-col mt-6 space-y-4 text-lg font-medium px-6">
          <li>
            <Link
              to="/products"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 hover:text-black transition"
            >
              <ShoppingBag size={20} /> Products
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 hover:text-black transition"
            >
              <Info size={20} /> About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 hover:text-black transition"
            >
              <Phone size={20} /> Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Fondo oscuro detrás del sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
