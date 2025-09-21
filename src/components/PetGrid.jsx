import React from 'react';
import { PetCard } from './PetCard';

export function PetGrid({ pets, favorites, onFavoriteToggle, onViewDetails }) {
  if (!pets || pets.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-2xl">🐾</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No pets found</h3>
        <p className="text-gray-600">Try adjusting your filters to see more pets.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pets.map((pet) => (
        <PetCard
          key={pet.id}
          pet={pet}
          isFavorite={favorites.includes(pet.id)}
          onFavoriteToggle={onFavoriteToggle}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}
