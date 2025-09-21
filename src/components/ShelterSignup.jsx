import React, { useState } from 'react';
import { Building, Mail, Phone, MapPin, Globe, FileText, CheckCircle, Upload, Users, Shield } from 'lucide-react';

export function ShelterSignup() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Information
    organizationName: '',
    organizationType: '',
    taxId: '',
    yearEstablished: '',

    // Contact Information
    email: '',
    phone: '',
    website: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',

    // Organization Details
    description: '',
    missionStatement: '',
    servicesOffered: [],
    animalTypes: [],
    capacity: '',

    // Legal & Verification
    license: '',
    insurance: '',
    references: '',

    // Agreement
    agreeToTerms: false,
    agreeToBackground: false
  });

  const [uploadedFiles, setUploadedFiles] = useState({
    license: null,
    insurance: null,
    taxExempt: null
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayToggle = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Shelter application submitted:', formData);
    setCurrentStep(5); // Show success screen
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const steps = [
    { number: 1, title: 'Basic Info', icon: Building },
    { number: 2, title: 'Contact Details', icon: Mail },
    { number: 3, title: 'Organization', icon: Users },
    { number: 4, title: 'Verification', icon: Shield }
  ];

  if (currentStep === 5) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-orange-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Thank you for your interest in partnering with PawsConnect. We'll review your 
            application and contact you within 3-5 business days.
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Join Our Shelter Network</h1>
          <p className="text-gray-600">Help us connect more pets with loving families</p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isActive = currentStep === step.number;
            const isCompleted = currentStep > step.number;

            return (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center space-x-2 ${isActive ? 'text-teal-600' : isCompleted ? 'text-green-600' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isActive ? 'bg-teal-100' : isCompleted ? 'bg-green-100' : 'bg-gray-100'}`}>
                    {isCompleted ? <CheckCircle className="w-5 h-5" /> : <IconComponent className="w-5 h-5" />}
                  </div>
                  <span className="font-medium hidden sm:block">{step.title}</span>
                </div>
                {index < steps.length - 1 && <div className={`w-8 md:w-16 h-0.5 mx-2 ${isCompleted ? 'bg-green-600' : 'bg-gray-200'}`} />}
              </div>
            );
          })}
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
          {/* Steps 1-4 content here (same as your JSX version, just remove TS types) */}
          {/* Step navigation */}
          <div className="flex justify-between pt-8 border-t border-gray-200">
            {currentStep > 1 && (
              <button type="button" onClick={prevStep} className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Previous
              </button>
            )}
            <div className="ml-auto">
              {currentStep < 4 ? (
                <button type="button" onClick={nextStep} className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors">
                  Next Step
                </button>
              ) : (
                <button type="submit" disabled={!formData.agreeToTerms || !formData.agreeToBackground} className="px-6 py-3 bg-teal-600 hover:bg-teal-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors">
                  Submit Application
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
