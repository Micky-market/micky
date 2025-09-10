import React from 'react';
import { LogoIcon, SearchIcon, CartIcon } from './icons/CoreIcons';

const Header: React.FC = () => {
  return (
    <header className="bg-white p-6 border-b border-gray-200 flex items-center justify-between space-x-8">
      {/* Logo */}
      <div className="flex items-center space-x-3 flex-shrink-0">
        <LogoIcon className="h-8 w-8 text-green-600" />
        <span className="text-2xl font-bold text-gray-800">
          Tamika <span className="font-light">Pharmacy</span>
        </span>
      </div>
      
      {/* Search */}
      <div className="relative flex-grow max-w-xl">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Search for products"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>
      </div>
      
      {/* Cart */}
      <div className="flex-shrink-0">
        <button aria-label="Shopping cart" className="p-2 rounded-full hover:bg-gray-100">
          <CartIcon className="h-7 w-7 text-gray-600" />
        </button>
      </div>
    </header>
  );
};

export default Header;