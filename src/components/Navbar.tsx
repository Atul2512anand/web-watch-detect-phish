
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-teal-600" />
            <span className="font-bold text-lg">PhishGuard ML</span>
          </Link>
          
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-slate-700 hover:text-teal-600 font-medium text-sm">
              Dashboard
            </Link>
            <Link to="/detector" className="text-slate-700 hover:text-teal-600 font-medium text-sm">
              Live Detector
            </Link>
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/your-username/phishguard" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
