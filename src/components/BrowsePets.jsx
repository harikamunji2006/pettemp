import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { SearchFilters } from './SearchFilters';
import { PetGrid } from './PetGrid';
// <-- corrected relative imports (assuming mockData.js and pets.js live in src/, one level up)
import { mockPets } from './mockData';
import { petsData } from './pets';

export function BrowsePets({ pets, favorites, onFavoriteToggle, onViewDetails }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    species: '',
    breed: '',
    age: '',
    size: '',
    location: ''
  });

  // fallback: use passed `pets` if available, otherwise try mockPets or petsData
  const petList = (pets && pets.length) ? pets : (mockPets && mockPets.length ? mockPets : (petsData || []));

  const handleFilterChange = (key, value) => setFilters(prev => ({ ...prev, [key]: value }));
  const clearFilters = () => {
    setFilters({ species: '', breed: '', age: '', size: '', location: '' });
    setSearchQuery('');
  };

  const filteredPets = useMemo(() => {
    return petList.filter(pet => {
      if (searchQuery && ![pet.name, pet.breed, pet.description].some(val => (val || '').toLowerCase().includes(searchQuery.toLowerCase()))) return false;
      if (filters.species && pet.species !== filters.species) return false;
      if (filters.size && pet.size !== filters.size) return false;
      if (filters.age) {
        const ageGroup = pet.age <= 2 ? 'young' : pet.age <= 7 ? 'adult' : 'senior';
        if (ageGroup !== filters.age) return false;
      }
      if (filters.breed && !pet.breed.toLowerCase().includes(filters.breed.toLowerCase())) return false;
      if (filters.location && !pet.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
      return true;
    });
  }, [petList, searchQuery, filters]);

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Companion</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our collection of loving pets waiting for their forever homes
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-8 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, breed, or description..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        <SearchFilters filters={filters} onFilterChange={handleFilterChange} onClearFilters={clearFilters} />

        <div className="mb-6 text-gray-600">
          Showing <span className="font-semibold">{filteredPets.length}</span> of <span className="font-semibold">{petList.length}</span> pets
        </div>

        <PetGrid pets={filteredPets} favorites={favorites} onFavoriteToggle={onFavoriteToggle} onViewDetails={onViewDetails} />
      </div>
    </section>
  );
}
