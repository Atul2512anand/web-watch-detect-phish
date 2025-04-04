
import React from 'react';
import { Shield, Lock, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <div className="py-12 mb-8 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Phishing Website Detection with Machine Learning
            </h1>
            <p className="text-xl mb-6 text-teal-50">
              Explore how different ML algorithms detect malicious websites and protect users from phishing attacks.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-white text-teal-700 hover:bg-teal-50" size="lg">
                <a href="#algorithms">Explore Algorithms</a>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-teal-600" size="lg">
                <a href="#comparison">See Comparison</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:w-1/2">
            <div className="relative w-64 h-64 flex items-center justify-center">
              <div className="absolute w-full h-full rounded-full bg-teal-400 opacity-20 animate-pulse"></div>
              <div className="absolute w-3/4 h-3/4 rounded-full bg-teal-300 opacity-20 animate-pulse"></div>
              <Shield className="w-24 h-24 text-white relative z-10" />
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <div className="bg-teal-500 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">6 ML Algorithms</h3>
            <p className="text-teal-50">
              Compare KNN, Naive Bayes, AdaBoost, SGD, Random Forest and Decision Tree algorithms
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <div className="bg-teal-500 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Lock className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Feature Analysis</h3>
            <p className="text-teal-50">
              Learn what website characteristics are analyzed to detect phishing attempts
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <div className="bg-teal-500 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Performance Metrics</h3>
            <p className="text-teal-50">
              See which algorithms provide the best protection against phishing websites
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
