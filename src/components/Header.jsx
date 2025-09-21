import React, { useState } from 'react';
import { Heart, Menu, X, User } from 'lucide-react';

export default function Header({ onAuthClick, isAuthenticated, favoriteCount, currentView, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'browse', label: 'Browse Pets', view: 'browse' },
    { id: 'about', label: 'About', view: 'about' },
    { id: 'success-stories', label: 'Success Stories', view: 'success-stories' },
    { id: 'pet-care', label: 'Pet Care', view: 'pet-care' },
    { id: 'contact', label: 'Contact', view: 'contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => onNavigate('home')} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">PawsConnect</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.view)}
                className={`transition-colors font-medium ${
                  currentView === item.view ? 'text-teal-600 border-b-2 border-teal-600 pb-1' : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => onNavigate('pet-submission')}
              className="text-teal-600 hover:text-teal-700 font-medium transition-colors"
            >
              Rehome a Pet
            </button>
            {isAuthenticated && (
              <button className="relative p-2 text-gray-700 hover:text-teal-600 transition-colors">
                <Heart className="w-6 h-6" />
                {favoriteCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {favoriteCount}
                  </span>
                )}
              </button>
            )}
            <button
              onClick={onAuthClick}
              className="flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              <User className="w-4 h-4" />
              <span>{isAuthenticated ? 'Dashboard' : 'Sign In'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-700">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.view);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left transition-colors font-medium ${
                    currentView === item.view ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    onNavigate('pet-submission');
                    setIsMenuOpen(false);
                  }}
                  className="text-teal-600 hover:text-teal-700 font-medium mb-4 block"
                >
                  Rehome a Pet
                </button>
                {isAuthenticated && (
                  <button className="flex items-center space-x-2 text-gray-700 hover:text-teal-600 transition-colors mb-4">
                    <Heart className="w-5 h-5" />
                    <span>Favorites ({favoriteCount})</span>
                  </button>
                )}
                <button
                  onClick={onAuthClick}
                  className="flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors font-medium w-full justify-center"
                >
                  <User className="w-4 h-4" />
                  <span>{isAuthenticated ? 'Dashboard' : 'Sign In'}</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
