import React from 'react';
import { Filter, MapPin } from 'lucide-react';

export function SearchFilters({ filters, onFilterChange, onClearFilters }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-teal-600" />
          <h3 className="text-lg font-semibold text-gray-900">Filter Pets</h3>
        </div>
        <button 
          onClick={onClearFilters}
          className="text-sm text-teal-600 hover:text-teal-700 font-medium"
        >
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Species</label>
          <select
            value={filters.species}
            onChange={(e) => onFilterChange('species', e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          >
            <option value="">All Species</option>
            <option value="dog">Dogs</option>
            <option value="cat">Cats</option>
            <option value="rabbit">Rabbits</option>
            <option value="bird">Birds</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
          <select
            value={filters.size}
            onChange={(e) => onFilterChange('size', e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          >
            <option value="">All Sizes</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
          <select
            value={filters.age}
            onChange={(e) => onFilterChange('age', e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          >
            <option value="">All Ages</option>
            <option value="young">Young (0-2 years)</option>
            <option value="adult">Adult (3-7 years)</option>
            <option value="senior">Senior (8+ years)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Breed</label>
          <input
            type="text"
            placeholder="Search breed..."
            value={filters.breed}
            onChange={(e) => onFilterChange('breed', e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="City, State"
              value={filters.location}
              onChange={(e) => onFilterChange('location', e.target.value)}
              className="w-full pl-10 rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
