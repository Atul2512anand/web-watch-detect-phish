
import React from 'react';
import { Shield } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Shield className="h-6 w-6 text-teal-400" />
            <span className="font-bold text-lg">PhishGuard ML Dashboard</span>
          </div>
          <div className="text-sm text-slate-300">
            Educational dashboard for understanding ML-based phishing detection
          </div>
        </div>
      </div>
    </footer>
  );
};
