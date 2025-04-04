
import React from 'react';
import { Shield } from 'lucide-react';

export const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Shield className="h-6 w-6 text-teal-600" />
          <span className="font-bold text-xl text-slate-800">PhishGuard ML</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#algorithms" className="text-slate-600 hover:text-teal-600 font-medium">Algorithms</a></li>
            <li><a href="#features" className="text-slate-600 hover:text-teal-600 font-medium">Features</a></li>
            <li><a href="#comparison" className="text-slate-600 hover:text-teal-600 font-medium">Comparison</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
