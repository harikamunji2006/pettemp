import React, { useState } from 'react';
import { X, Heart, FileText, MessageCircle, Settings, User, MapPin, Phone, Mail, Upload, Calendar, DollarSign } from 'lucide-react';
import { mockPets } from "./mockData";

export function Dashboard({ user, onClose, favorites, onFavoriteToggle, onViewPet }) {
  const [activeTab, setActiveTab] = useState('favorites');

  const favoritePets = mockPets.filter(pet => favorites.includes(pet.id));
  
  // Get submissions from localStorage for demo
  const submissions = JSON.parse(localStorage.getItem('petSubmissions') || '[]');
  
  // Get adoptions from localStorage for demo
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
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex h-[calc(90vh-120px)]">
          {/* Sidebar */}
          <div className="w-64 bg-gray-50 p-6 border-r border-gray-200">
            <nav className="space-y-2">
              {tabs.map(tab => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-teal-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                    {tab.id === 'favorites' && favorites.length > 0 && (
                      <span className={`ml-auto text-xs px-2 py-1 rounded-full ${
                        activeTab === tab.id ? 'bg-teal-500' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {favorites.length}
                      </span>
                    )}
                    {tab.id === 'submissions' && submissions.length > 0 && (
                      <span className={`ml-auto text-xs px-2 py-1 rounded-full ${
                        activeTab === tab.id ? 'bg-teal-500' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {submissions.length}
                      </span>
                    )}
                    {tab.id === 'adoptions' && adoptions.length > 0 && (
                      <span className={`ml-auto text-xs px-2 py-1 rounded-full ${
                        activeTab === tab.id ? 'bg-teal-500' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {adoptions.length}
                      </span>
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
                          <img
                            src={pet.photos[0]}
                            alt={pet.name}
                            className="w-20 h-20 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{pet.name}</h4>
                            <p className="text-sm text-gray-600 mb-2">{pet.breed} • {pet.age} years old</p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">${pet.adoptionFee}</span>
                              <div className="flex space-x-2">
                                <button
                                  onClick={() => onFavoriteToggle(pet.id)}
                                  className="p-1 text-red-500 hover:bg-red-50 rounded"
                                >
                                  <Heart className="w-4 h-4 fill-current" />
                                </button>
                                <button
                                  onClick={() => onViewPet(pet)}
                                  className="text-teal-600 hover:text-teal-700 text-sm font-medium"
                                >
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

            {activeTab === 'applications' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Applications</h3>
                <div className="text-center py-12">
                  <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-gray-900 mb-2">No applications yet</h4>
                  <p className="text-gray-600">When you apply to adopt a pet, your applications will appear here.</p>
                </div>
              </div>
            )}

            {activeTab === 'submissions' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Pet Submissions</h3>
                {submissions.length === 0 ? (
                  <div className="text-center py-12">
                    <Upload className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-gray-900 mb-2">No submissions yet</h4>
                    <p className="text-gray-600">When you submit a pet for adoption, it will appear here.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {submissions.map((submission, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900">{submission.petName}</h4>
                            <p className="text-gray-600">{submission.breed} • {submission.age} years old • {submission.gender}</p>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>Submitted {new Date(submission.submittedAt).toLocaleDateString()}</span>
                              </div>
                              {submission.adoptionFee && (
                                <div className="flex items-center space-x-1">
                                  <DollarSign className="w-4 h-4" />
                                  <span>${submission.adoptionFee}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            submission.status === 'approved' ? 'bg-green-100 text-green-800' :
                            submission.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                          </span>
                        </div>
                        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{submission.description}</p>
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-gray-500">
                            <span className="font-medium">Reason:</span> {submission.reasonForRehoming.substring(0, 50)}...
                          </div>
                          <button className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                            View Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'adoptions' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Adoptions</h3>
                {adoptions.length === 0 ? (
                  <div className="text-center py-12">
                    <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-gray-900 mb-2">No adoptions yet</h4>
                    <p className="text-gray-600">When you successfully adopt a pet, it will appear here.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {adoptions.map((adoption, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                        <div className="flex space-x-4">
                          <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                            <Heart className="w-8 h-8 text-gray-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{adoption.petName}</h4>
                            <p className="text-sm text-gray-600 mb-2">{adoption.breed} • {adoption.age} years old</p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">
                                Adopted {new Date(adoption.adoptedAt).toLocaleDateString()}
                              </span>
                              <button className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                                View
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'messages' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Messages</h3>
                <div className="text-center py-12">
                  <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-gray-900 mb-2">No messages yet</h4>
                  <p className="text-gray-600">Messages with shelters will appear here.</p>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Profile Settings</h3>
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Personal Information</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <User className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-700">{user.name}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-700">{user.email}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-700">{user.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-700">{user.location}</span>
                      </div>
                    </div>
                    <button className="mt-4 flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-medium">
                      <Settings className="w-4 h-4" />
                      <span>Edit Profile</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}