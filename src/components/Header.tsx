"use client";

import Link from 'next/link';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const { items } = useCart();
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  if (!mounted) return null;

  return (
    <header className="w-full bg-gradient-to-r from-green-900 to-teal-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-extrabold text-white tracking-tight">DissolvaGum</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white font-medium hover:text-teal-200 transition">Home</Link>
          <Link href="/shop" className="text-white font-medium hover:text-teal-200 transition">Shop</Link>
          <Link href="/about" className="text-white font-medium hover:text-teal-200 transition">About</Link>
          <Link href="/how-it-works" className="text-white font-medium hover:text-teal-200 transition">How It Works</Link>
          <Link href="/cart" className="flex items-center text-white font-medium hover:text-teal-200 transition">
            <span className="mr-1">🛒</span> Cart ({totalItems})
          </Link>
        </nav>
        <div className="flex items-center space-x-2 md:space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-teal-800/60 text-white transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="md:hidden p-2 rounded-full hover:bg-teal-800/60 text-white transition"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>
      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col">
          <div className="flex justify-between items-center px-6 py-4">
            <span className="text-2xl font-extrabold text-white">DissolvaGum</span>
            <button
              className="p-2 rounded-full hover:bg-teal-800/60 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-8 mt-8">
            <Link href="/" className="text-white text-xl font-semibold hover:text-teal-200 transition" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/shop" className="text-white text-xl font-semibold hover:text-teal-200 transition" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
            <Link href="/about" className="text-white text-xl font-semibold hover:text-teal-200 transition" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link href="/how-it-works" className="text-white text-xl font-semibold hover:text-teal-200 transition" onClick={() => setIsMobileMenuOpen(false)}>How It Works</Link>
            <Link href="/cart" className="flex items-center text-white text-xl font-semibold hover:text-teal-200 transition" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="mr-2">🛒</span> Cart ({totalItems})
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

