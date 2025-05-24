'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Sidebar so it stays a server component
const Sidebar = dynamic(() => import('./sidebar'), { ssr: false });

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:hidden">
      {/* Hamburger Button */}
      <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
        <svg className="hover:pointer-cursor w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Sidebar only shows if open */}
      {isOpen && <Sidebar />}
    </div>
  );
}
