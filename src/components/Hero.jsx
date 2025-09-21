import React from 'react';
import { Search } from 'lucide-react';

export function Hero({ onSearchClick, onShelterClick }) {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Find Your Perfect
            <span className="text-teal-600 block">Furry Friend</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect with loving pets waiting for their forever homes. Browse thousands of adoptable 
            pets from verified shelters and rescue organizations across the country.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <button 
              onClick={onSearchClick}
              className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <Search className="w-5 h-5" />
              <span>Start Searching</span>
            </button>
            <button 
              onClick={onShelterClick}
              className="w-full sm:w-auto border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              Rehome a Pet
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-teal-600 mb-2">10,000+</div>
              <div className="text-gray-600">Pets Adopted</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-600">Partner Shelters</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-purple-600 mb-2">99%</div>
              <div className="text-gray-600">Happy Matches</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
