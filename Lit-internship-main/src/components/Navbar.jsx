import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-4 py-4 opacity-100 bg-transparent p-4 fixed top-0 w-full z-50">
      <ul className="flex flex-col md:flex-row md:space-x-8 justify-center items-center text-sm font-semibold uppercase tracking-wider space-y-4 md:space-y-0 ">
        <li className="hover:text-gray-400 cursor-pointer">Game Modes</li>
        <li className="hover:text-gray-400 cursor-pointer">House of Lit</li>
        <li className="hover:text-gray-400 cursor-pointer">Newsletter</li>
        <li className="hover:text-gray-400 cursor-pointer">IR Icon</li>
        <li className="hover:text-gray-400 cursor-pointer">Social Platform</li>
      </ul>
    </nav>
  );
};

export default Navbar;
