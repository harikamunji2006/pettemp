import React from 'react';
import { Heart, MapPin, Calendar, DollarSign } from 'lucide-react';

export function PetCard({ pet, isFavorite, onFavoriteToggle, onViewDetails }) {
  const getAgeText = (age) => {
    if (age === 1) return '1 year old';
    return `${age} years old`;
  };

  const getSizeColor = (size) => {
    switch (size) {
      case 'small': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-blue-600 bg-blue-100';
      case 'large': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      {/* Pet Photo */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={pet.photos[0]}
          alt={pet.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <button
          onClick={() => onFavoriteToggle(pet.id)}
          className={`absolute top-4 right-4 p-2 rounded-full transition-all ${
            isFavorite 
              ? 'bg-red-500 text-white hover:bg-red-600' 
              : 'bg-white text-gray-400 hover:text-red-500 hover:bg-red-50'
          }`}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
        
        {/* Status Badge */}
        {pet.status === 'pending' && (
          <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Pending
          </div>
        )}
      </div>

      {/* Pet Information */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900">{pet.name}</h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getSizeColor(pet.size)}`}>
            {pet.size}
          </span>
        </div>

        <p className="text-gray-600 mb-3">{pet.breed} • {getAgeText(pet.age)} • {pet.gender}</p>
        
        <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-2">
          {pet.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>{pet.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <DollarSign className="w-4 h-4" />
            <span>${pet.adoptionFee}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            <span>Listed {new Date(pet.dateAdded).toLocaleDateString()}</span>
          </div>
          <button
            onClick={() => onViewDetails(pet)}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
