'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Accredian
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-blue-600 transition">
              About
            </Link>
            <Link href="#solutions" className="text-gray-700 hover:text-blue-600 transition">
              Solutions
            </Link>
            <Link href="#programs" className="text-gray-700 hover:text-blue-600 transition">
              Programs
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-blue-600 transition">
              Testimonials
            </Link>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Enquire Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition">
                About
              </Link>
              <Link href="#solutions" className="text-gray-700 hover:text-blue-600 transition">
                Solutions
              </Link>
              <Link href="#programs" className="text-gray-700 hover:text-blue-600 transition">
                Programs
              </Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-blue-600 transition">
                Testimonials
              </Link>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition w-full">
                Enquire Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
