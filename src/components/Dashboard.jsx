// src/components/Dashboard.jsx
import React, { useState } from 'react';
import { 
  X, Heart, FileText, MessageCircle, Settings, User, MapPin, Phone, Mail, Upload, Calendar, DollarSign 
} from 'lucide-react';
import { mockPets } from './mockData'; // make sure this file exists

export function Dashboard({ user, onClose, favorites, onFavoriteToggle, onViewPet }) {
  const [activeTab, setActiveTab] = useState('favorites');

  const favoritePets = mockPets.filter(pet => favorites.includes(pet.id));
  const submissions = JSON.parse(localStorage.getItem('petSubmissions') || '[]');
  const adoptions = JSON.parse(localStorage.getItem('userAdoptions') || '[]');

  const tabs = [
    { id: 'favorites', label: 'Favorites', icon: Heart },
    { id: 'applications', label: 'Applications', icon: FileText },
    { id: 'submissions', label: 'Your Submissions', icon: Upload },
    { id: 'adoptions', label: 'Your Adoptions', icon: Heart },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Welcome back, {user.name}!</h2>
              <p className="text-teal-100">Manage your pet adoption journey</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex h-[calc(90vh-120px)]">
          {/* Sidebar */}
          <div className="w-64 bg-gray-50 p-6 border-r border-gray-200">
            <nav className="space-y-2">
              {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id ? 'bg-teal-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                    {tab.id === 'favorites' && favorites.length > 0 && (
                      <span className={`ml-auto text-xs px-2 py-1 rounded-full ${
                        activeTab === tab.id ? 'bg-teal-500' : 'bg-gray-200 text-gray-600'
                      }`}>{favorites.length}</span>
                    )}
                    {tab.id === 'submissions' && submissions.length > 0 && (
                      <span className={`ml-auto text-xs px-2 py-1 rounded-full ${
                        activeTab === tab.id ? 'bg-teal-500' : 'bg-gray-200 text-gray-600'
                      }`}>{submissions.length}</span>
                    )}
                    {tab.id === 'adoptions' && adoptions.length > 0 && (
                      <span className={`ml-auto text-xs px-2 py-1 rounded-full ${
                        activeTab === tab.id ? 'bg-teal-500' : 'bg-gray-200 text-gray-600'
                      }`}>{adoptions.length}</span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {activeTab === 'favorites' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Favorite Pets</h3>
                {favoritePets.length === 0 ? (
                  <div className="text-center py-12">
                    <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-gray-900 mb-2">No favorites yet</h4>
                    <p className="text-gray-600">Start browsing pets and add some to your favorites!</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {favoritePets.map(pet => (
                      <div key={pet.id} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                        <div className="flex space-x-4">
                          <img src={pet.photos[0]} alt={pet.name} className="w-20 h-20 rounded-lg object-cover" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{pet.name}</h4>
                            <p className="text-sm text-gray-600 mb-2">{pet.breed} • {pet.age} years old</p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">${pet.adoptionFee}</span>
                              <div className="flex space-x-2">
                                <button onClick={() => onFavoriteToggle(pet.id)} className="p-1 text-red-500 hover:bg-red-50 rounded">
                                  <Heart className="w-4 h-4 fill-current" />
                                </button>
                                <button onClick={() => onViewPet(pet)} className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                                  View
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Other tabs (applications, submissions, adoptions, messages, profile) */}
            {/* For brevity, you can copy the same JSX logic as favorites with their respective data */}
          </div>
        </div>
      </div>
    </div>
  );
}
