import React, { useState } from 'react';
import { User, Heart, CheckCircle, Camera } from 'lucide-react';

export function PetSubmission() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Owner Information
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',

    // Pet Information
    petName: '',
    species: '',
    breed: '',
    age: '',
    size: '',
    gender: '',
    description: '',
    photos: [],
    isNeutered: false,
    isVaccinated: false,
    healthNotes: '',
    adoptionFee: '',
    reasonForRehoming: '',

    // Agreement
    agreeToTerms: false,
    agreeToScreening: false,
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissions = JSON.parse(localStorage.getItem('petSubmissions') || '[]');
    const newSubmission = {
      ...formData,
      id: Date.now().toString(),
      submittedAt: new Date().toISOString(),
      status: 'pending',
    };
    submissions.push(newSubmission);
    localStorage.setItem('petSubmissions', JSON.stringify(submissions));
    console.log('Pet submission:', newSubmission);
    setCurrentStep(4); // Show success step
  };

  const steps = [
    { number: 1, title: 'Owner Details', icon: User },
    { number: 2, title: 'Pet Information', icon: Heart },
    { number: 3, title: 'Review & Submit', icon: CheckCircle },
  ];

  if (currentStep === 4) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-orange-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pet Submitted Successfully!</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Thank you for submitting {formData.petName} for adoption. We'll review your submission 
            and contact you within 24-48 hours.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Find a Home for Your Pet</h1>
            <p className="text-gray-600">Help your beloved pet find their perfect new family</p>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = currentStep === step.number;
              const isCompleted = currentStep > step.number;

              return (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center space-x-2 ${
                    isActive ? 'text-teal-600' : isCompleted ? 'text-green-600' : 'text-gray-400'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      isActive ? 'bg-teal-100' : isCompleted ? 'bg-green-100' : 'bg-gray-100'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <IconComponent className="w-5 h-5" />
                      )}
                    </div>
                    <span className="font-medium hidden sm:block">{step.title}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-8 md:w-16 h-0.5 mx-2 ${
                      isCompleted ? 'bg-green-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
          {/* Step 1 */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <User className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Information</h2>
                <p className="text-gray-600">Tell us about yourself as the current owner</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name *" required value={formData.ownerName} onChange={(e)=>handleInputChange('ownerName', e.target.value)} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500" />
                <input type="email" placeholder="Email *" required value={formData.email} onChange={(e)=>handleInputChange('email', e.target.value)} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500" />
                <input type="tel" placeholder="Phone *" required value={formData.phone} onChange={(e)=>handleInputChange('phone', e.target.value)} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500" />
                <input type="text" placeholder="Street Address *" required value={formData.address} onChange={(e)=>handleInputChange('address', e.target.value)} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500" />
                <input type="text" placeholder="City *" required value={formData.city} onChange={(e)=>handleInputChange('city', e.target.value)} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500" />
                <input type="text" placeholder="State *" required value={formData.state} onChange={(e)=>handleInputChange('state', e.target.value)} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500" />
                <input type="text" placeholder="ZIP Code *" required value={formData.zipCode} onChange={(e)=>handleInputChange('zipCode', e.target.value)} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500" />
              </div>
            </div>
          )}

          {/* Step 2 */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <Heart className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">About Your Pet</h2>
                <p className="text-gray-600">Provide detailed information about your pet</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Pet Name *" required value={formData.petName} onChange={(e)=>handleInputChange('petName', e.target.value)} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500" />
                <input type="text" placeholder="Species *" required value={formData.species} onChange={(e)=>handleInputChange('species', e.target.value)} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500" />
                <input type="text" placeholder="Breed *" required value={formData.breed} onChange={(e)=>handleInputChange('breed', e.target.value)} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500" />
                <input type="number" placeholder="Age *" required value={formData.age} onChange={(e)=>handleInputChange('age', e.target.value)} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500" />
              </div>
            </div>
          )}

          {/* Step 3 */}
          {currentStep === 3 && (
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Review & Submit</h2>
              <p className="text-gray-600">Check all your information before submitting</p>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-8 border-t border-gray-200">
            {currentStep > 1 && <button type="button" onClick={prevStep} className="px-6 py-3 border border-gray-300 rounded-lg">Previous</button>}
            <div className="ml-auto">
              {currentStep < 3 ? (
                <button type="button" onClick={nextStep} className="px-6 py-3 bg-teal-600 text-white rounded-lg">Next Step</button>
              ) : (
                <button type="submit" className="px-6 py-3 bg-teal-600 text-white rounded-lg">Submit Pet for Adoption</button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
