'use client'

import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-paty-cyan-opacity flex justify-center items-center p-4">
      <div className="w-full xl:w-5/6 2xl:w-4/6 min-h-20 md:h-28 flex items-center justify-between px-4 relative text-white">
        
        {/* Logo Patrícia */}
        <div className="flex flex-col xl:flex-row items-center justify-center font-serif text-4xl lg:text-5xl p-1 md:w-1/6 lg:w-3/12 h-full">
          <span className="text-paty-blue">Patrícia</span>
          <span className="text-paty-cyan">Cruz</span>
        </div>

        {/* Botão de menu hambúrguer para mobile */}
        <button
          className="sm:hidden p-2 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Opções de navegação - visível em telas maiores */}
        <div className="hidden sm:flex justify-around items-center text-xl w-8/12 md:w-6/12 h-full max-w-4xl text-black">
          {['Home', 'Serviços', 'Quem Somos', 'Contato'].map((item) => (
            <div
              key={item}
              className="hover:text-paty-cyan cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Contato - visível em telas maiores */}
        <div className="hidden md:flex justify-center items-center p-1 h-full w-3/12">
          <div className="flex justify-around items-center text-xl bg-paty-blue p-4 rounded-xl w-5/6">
            <div className="text-paty-cyan tracking-wide font-semibold cursor-pointer">
              Contato
            </div>
          </div>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="sm:hidden absolute top-full left-0 w-full bg-white text-black p-4 z-50 flex flex-col items-center">
            {['Home', 'Serviços', 'Quem Somos', 'Contato'].map((item) => (
              <div
                key={item}
                className="py-2 w-full text-center hover:bg-gray-100 cursor-pointer"
                onClick={closeMenu}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
