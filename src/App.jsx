import React, { useState } from 'react';
import Header from './components/Header';
import { Hero } from './components/Hero';
import { BrowsePets } from './components/BrowsePets';
import { Features } from './components/Features';
import Footer from './components/Footer';
import About from './components/About';
import { Contact } from './components/Contact';
import { ShelterSignup } from './components/ShelterSignup';
import { SuccessStories } from './components/SuccessStories';
import { PetCare } from './components/PetCare';
import { PetDetail } from './components/PetDetail';
import { AdoptionForm } from './components/AdoptionForm';
import { AuthModal } from './components/AuthModal';
import { Dashboard } from './components/Dashboard';
import { mockPets, mockUser } from './components/mockData';
import { PetSubmission } from "./components/PetSubmission";

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedPet, setSelectedPet] = useState(null);
  const [showAdoptionForm, setShowAdoptionForm] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteToggle = (petId) => {
    setFavorites(prev =>
      prev.includes(petId)
        ? prev.filter(id => id !== petId)
        : [...prev, petId]
    );
  };

  const handleViewPetDetails = (pet) => {
    setSelectedPet(pet);
  };

  const handleApplyForAdoption = (pet) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    setSelectedPet(pet);
    setShowAdoptionForm(true);
  };

  const handleAdoptionSubmit = (formData) => {
    console.log('Adoption application submitted:', formData);
    setShowAdoptionForm(false);
    setSelectedPet(null);
    alert('Application submitted successfully! The shelter will contact you soon.');
  };

  const handleAuth = (userData) => {
    setUser(userData);
    setShowAuthModal(false);
    if (userData.type === 'adopter') {
      setFavorites(mockUser.favorites);
    }
  };

  const handleAuthClick = () => {
    if (user) {
      setShowDashboard(true);
    } else {
      setShowAuthModal(true);
    }
  };

  const handleSearchClick = () => {
    setCurrentView('browse');
  };

  const handleNavigate = (view) => {
    setCurrentView(view);
    setSelectedPet(null);
    setShowAdoptionForm(false);
    setShowAuthModal(false);
    setShowDashboard(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        onAuthClick={handleAuthClick}
        isAuthenticated={!!user}
        favoriteCount={favorites.length}
        currentView={currentView}
        onNavigate={handleNavigate}
      />

      {currentView === 'home' && (
        <>
        + <Hero onSearchClick={handleSearchClick} onShelterClick={() => handleNavigate('rehome')} />

          <Features />
        </>
      )}

      {currentView === 'browse' && (
        <BrowsePets
          pets={mockPets}
          favorites={favorites}
          onFavoriteToggle={handleFavoriteToggle}
          onViewDetails={handleViewPetDetails}
        />
      )}

      {currentView === 'about' && <About />}
      {currentView === 'contact' && <Contact />}
      {currentView === 'shelter-signup' && <ShelterSignup />}
      {currentView === 'success-stories' && <SuccessStories />}
      {currentView === 'pet-care' && <PetCare />}
      {currentView === 'rehome' && <PetSubmission />} {/* Added this */}

      {currentView !== 'shelter-signup' && <Footer onNavigate={handleNavigate} />}

      {selectedPet && !showAdoptionForm && (
        <PetDetail
          pet={selectedPet}
          isFavorite={favorites.includes(selectedPet.id)}
          onClose={() => setSelectedPet(null)}
          onFavoriteToggle={handleFavoriteToggle}
          onApply={handleApplyForAdoption}
        />
      )}

      {showAdoptionForm && selectedPet && (
        <AdoptionForm
          pet={selectedPet}
          onClose={() => {
            setShowAdoptionForm(false);
            setSelectedPet(null);
          }}
          onSubmit={handleAdoptionSubmit}
        />
      )}

      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onAuth={handleAuth}
        />
      )}

      {showDashboard && user && (
        <Dashboard
          user={user}
          onClose={() => setShowDashboard(false)}
          favorites={favorites}
          onFavoriteToggle={handleFavoriteToggle}
          onViewPet={handleViewPetDetails}
        />
      )}

      {currentView !== 'home' && (
        <button
          onClick={() => handleNavigate('home')}
          className="fixed bottom-6 right-6 bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-40"
        >
          <span className="sr-only">Back to Home</span>
          🏠
        </button>
      )}
    </div>
  );
}

export default App;
