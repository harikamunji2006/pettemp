import React, { useState } from 'react';
import { X, Heart, MapPin, Calendar, DollarSign, Phone, Mail, Globe, CheckCircle, AlertCircle } from 'lucide-react';

export function PetDetail({ pet, isFavorite, onClose, onFavoriteToggle, onApply }) {
  if (!pet) return null; // safety check

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const getAgeText = (age) => (age === 1 ? '1 year old' : `${age} years old`);

  const getSizeColor = (size) => {
    switch (size) {
      case 'small': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-blue-600 bg-blue-100';
      case 'large': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const shelter = pet.shelter || {}; // prevent undefined errors

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">{pet.name || 'Unknown Pet'}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Photos */}
            <div className="space-y-4">
              <div className="relative h-80 rounded-xl overflow-hidden">
                {pet.photos?.[currentPhotoIndex] ? (
                  <img
                    src={pet.photos[currentPhotoIndex]}
                    alt={pet.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-2xl">🐾</span>
                  </div>
                )}
                {pet.photos?.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {pet.photos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPhotoIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentPhotoIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {pet.photos?.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {pet.photos.map((photo, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPhotoIndex(index)}
                      className={`h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                        index === currentPhotoIndex ? 'border-teal-500' : 'border-gray-200'
                      }`}
                    >
                      <img src={photo} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Pet Details */}
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{pet.name}</h1>
                  <p className="text-lg text-gray-600">
                    {pet.breed} • {getAgeText(pet.age || 0)} • {pet.gender || 'Unknown'}
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getSizeColor(pet.size)}`}>
                      {pet.size || 'Unknown'}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium capitalize">
                      {pet.species || 'Unknown'}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => onFavoriteToggle?.(pet.id)}
                  className={`p-3 rounded-full transition-all ${
                    isFavorite ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-gray-100 text-gray-400 hover:text-red-500 hover:bg-red-50'
                  }`}
                >
                  <Heart className={`w-6 h-6 ${isFavorite ? 'fill-current' : ''}`} />
                </button>
              </div>

              <p className="text-gray-700 leading-relaxed">{pet.description || 'No description available'}</p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">{pet.location || 'Unknown'}</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <DollarSign className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">${pet.adoptionFee || 0} adoption fee</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">Listed {pet.dateAdded ? new Date(pet.dateAdded).toLocaleDateString() : 'N/A'}</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  {pet.isVaccinated ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-yellow-600" />
                  )}
                  <span className="text-gray-700">{pet.isVaccinated ? 'Vaccinated' : 'Needs vaccines'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => onApply?.(pet)}
                  disabled={pet.status !== 'available'}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-all ${
                    pet.status === 'available' ? 'bg-teal-600 hover:bg-teal-700 text-white transform hover:scale-105' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {pet.status === 'available' ? 'Apply to Adopt' : 'Application Pending'}
                </button>
                <button className="w-full py-3 px-6 border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white rounded-lg font-semibold transition-colors">
                  Message Shelter
                </button>
              </div>
            </div>
          </div>

          {/* Shelter Info */}
          {shelter && (
            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">About the Shelter</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">{shelter.name || 'Unknown Shelter'}</h5>
                  <p className="text-gray-600 text-sm mb-3">{shelter.description || 'No description'}</p>
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="w-4 h-4 text-teal-600" />
                    <span className="text-gray-700">{shelter.location || 'Unknown'}</span>
                    {shelter.verified && <CheckCircle className="w-4 h-4 text-green-600" title="Verified Shelter" />}
                  </div>
                </div>
                <div className="space-y-2">
                  {shelter.phone && (
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="w-4 h-4 text-teal-600" />
                      <a href={`tel:${shelter.phone}`} className="text-teal-600 hover:text-teal-700">{shelter.phone}</a>
                    </div>
                  )}
                  {shelter.email && (
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="w-4 h-4 text-teal-600" />
                      <a href={`mailto:${shelter.email}`} className="text-teal-600 hover:text-teal-700">{shelter.email}</a>
                    </div>
                  )}
                  {shelter.website && (
                    <div className="flex items-center space-x-2 text-sm">
                      <Globe className="w-4 h-4 text-teal-600" />
                      <a href={shelter.website} className="text-teal-600 hover:text-teal-700">Visit Website</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
