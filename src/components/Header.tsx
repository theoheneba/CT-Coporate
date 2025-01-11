import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-teal-900/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src="/Logo.png" alt="LW Studio" className="h-[55px]" />
          </a>

          {/* Contact Info */}
          <div className="hidden md:flex items-center">
            <a href="tel:+233552870892" className="text-white/90 hover:text-orange-500 transition-colors">
              +233 552 870 892
            </a>
            <span className="text-white/50 mx-3">/</span>
            <a href="mailto:info@celeteck.com" className="text-white/90 hover:text-orange-500 transition-colors">
              info@celeteck.com
            </a>
          </div>

          {/* Menu Button */}
          <div className="flex items-center gap-6">
            <span className="text-white/90 uppercase tracking-wider text-sm font-medium">Menu</span>
            <button 
              className="text-white hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} py-4`}>
          <div className="flex flex-col space-y-2">
            <a href="tel:+233552870892" className="block px-3 py-2 text-white hover:text-orange-500">
              +233 552 870 892
            </a>
            <a href="mailto:info@celeteck.com" className="block px-3 py-2 text-white hover:text-orange-500">
              info@celeteck.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}