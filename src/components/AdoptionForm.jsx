import React, { useState } from 'react';
import { X, FileText, Home, Users, Heart } from 'lucide-react';

export function AdoptionForm({ pet, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    livingSituation: '',
    hasYard: false,
    hasOtherPets: false,
    otherPetsDetails: '',
    experience: '',
    workSchedule: '',
    references: '',
    additionalNotes: '',
    agreeToTerms: false,
    agreeToHomeVisit: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save adoption to localStorage for demo
    const adoptions = JSON.parse(localStorage.getItem('userAdoptions') || '[]');
    const newAdoption = {
      petName: pet.name,
      breed: pet.breed,
      age: pet.age,
      adoptedAt: new Date().toISOString(),
      ...formData
    };
    adoptions.push(newAdoption);
    localStorage.setItem('userAdoptions', JSON.stringify(adoptions));

    // Call parent onSubmit
    if (onSubmit) {
      onSubmit(newAdoption);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <FileText className="w-6 h-6 text-teal-600" />
            <h2 className="text-2xl font-bold text-gray-900">Adoption Application</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Pet Info Banner */}
        <div className="bg-teal-50 p-6 flex items-center space-x-4">
          <img
            src={pet.photos[0]}
            alt={pet.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{pet.name}</h3>
            <p className="text-gray-600">{pet.breed} • {pet.age} years old</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <section>
            <div className="flex items-center space-x-2 mb-4">
              <Users className="w-5 h-5 text-teal-600" />
              <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
            </div>
          </section>

          {/* Living Situation */}
          <section>
            <div className="flex items-center space-x-2 mb-4">
              <Home className="w-5 h-5 text-teal-600" />
              <h3 className="text-lg font-semibold text-gray-900">Living Situation</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Living Situation *</label>
                <select
                  required
                  value={formData.livingSituation}
                  onChange={(e) => handleInputChange('livingSituation', e.target.value)}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                >
                  <option value="">Select...</option>
                  <option value="own-house">Own House</option>
                  <option value="rent-house">Rent House</option>
                  <option value="own-apartment">Own Apartment</option>
                  <option value="rent-apartment">Rent Apartment</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="hasYard"
                  checked={formData.hasYard}
                  onChange={(e) => handleInputChange('hasYard', e.target.checked)}
                  className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                />
                <label htmlFor="hasYard" className="text-sm text-gray-700">I have a yard</label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="hasOtherPets"
                  checked={formData.hasOtherPets}
                  onChange={(e) => handleInputChange('hasOtherPets', e.target.checked)}
                  className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                />
                <label htmlFor="hasOtherPets" className="text-sm text-gray-700">I have other pets</label>
              </div>

              {formData.hasOtherPets && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Other Pets Details</label>
                  <textarea
                    value={formData.otherPetsDetails}
                    onChange={(e) => handleInputChange('otherPetsDetails', e.target.value)}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    rows={2}
                    placeholder="Please describe your other pets..."
                  />
                </div>
              )}
            </div>
          </section>

          {/* Experience & References */}
          <section>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-5 h-5 text-teal-600" />
              <h3 className="text-lg font-semibold text-gray-900">Experience & References</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pet Experience</label>
                <textarea
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  rows={3}
                  placeholder="Tell us about your experience with pets..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Work Schedule</label>
                <textarea
                  value={formData.workSchedule}
                  onChange={(e) => handleInputChange('workSchedule', e.target.value)}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  rows={2}
                  placeholder="Describe your typical work schedule..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">References</label>
                <textarea
                  value={formData.references}
                  onChange={(e) => handleInputChange('references', e.target.value)}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  rows={3}
                  placeholder="Please provide two references (name, relationship, phone number)..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                <textarea
                  value={formData.additionalNotes}
                  onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  rows={2}
                  placeholder="Anything else you'd like us to know..."
                />
              </div>
            </div>
          </section>

          {/* Agreements */}
          <section className="space-y-3">
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="agreeToTerms"
                required
                checked={formData.agreeToTerms}
                onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                className="rounded border-gray-300 text-teal-600 focus:ring-teal-500 mt-1"
              />
              <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
                I agree to the <a href="#" className="text-teal-600 hover:text-teal-700">terms and conditions</a> and understand that all information will be verified *
              </label>
            </div>

            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="agreeToHomeVisit"
                checked={formData.agreeToHomeVisit}
                onChange={(e) => handleInputChange('agreeToHomeVisit', e.target.checked)}
                className="rounded border-gray-300 text-teal-600 focus:ring-teal-500 mt-1"
              />
              <label htmlFor="agreeToHomeVisit" className="text-sm text-gray-700">
                I consent to a home visit as part of the adoption process
              </label>
            </div>
          </section>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={!formData.agreeToTerms}
              className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold text-lg transition-colors"
            >
              Submit Adoption Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
