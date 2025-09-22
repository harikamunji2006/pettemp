import React, { useState } from 'react';
import { User, Heart, CheckCircle, Camera } from 'lucide-react';

export function PetSubmission() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
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
    agreeToTerms: false,
    agreeToScreening: false
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissions = JSON.parse(localStorage.getItem('petSubmissions') || '[]');
    const newSubmission = {
      ...formData,
      id: Date.now().toString(),
      submittedAt: new Date().toISOString(),
      status: 'pending'
    };
    submissions.push(newSubmission);
    localStorage.setItem('petSubmissions', JSON.stringify(submissions));
    setCurrentStep(4); // Success step
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const steps = [
    { number: 1, title: 'Owner Details', icon: User },
    { number: 2, title: 'Pet Information', icon: Heart },
    { number: 3, title: 'Review & Submit', icon: CheckCircle }
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
            and contact you within 24-48 hours. You can track the status in your dashboard.
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

      {/* Form */}
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input type="text" required value={formData.ownerName} onChange={(e) => handleInputChange('ownerName', e.target.value)} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500" placeholder="John Doe"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input type="email" required value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500" placeholder="john@example.com"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input type="tel" required value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500" placeholder="(555) 123-4567"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Street Address *</label>
                  <input type="text" required value={formData.address} onChange={(e) => handleInputChange('address', e.target.value)} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500" placeholder="123 Main Street"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                  <input type="text" required value={formData.city} onChange={(e) => handleInputChange('city', e.target.value)} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500" placeholder="San Francisco"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                  <input type="text" required value={formData.state} onChange={(e) => handleInputChange('state', e.target.value)} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500" placeholder="CA"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code *</label>
                  <input type="text" required value={formData.zipCode} onChange={(e) => handleInputChange('zipCode', e.target.value)} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500" placeholder="94102"/>
                </div>
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pet Name *</label>
                  <input type="text" required value={formData.petName} onChange={(e) => handleInputChange('petName', e.target.value)} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500" placeholder="Buddy"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Species *</label>
                  <select required value={formData.species} onChange={(e) => handleInputChange('species', e.target.value)} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500">
                    <option value="">Select species...</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="rabbit">Rabbit</option>
                    <option value="bird">Bird</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Breed *</label>
                  <input type="text" required value={formData.breed} onChange={(e) => handleInputChange('breed', e.target.value)} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500" placeholder="Golden Retriever"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Age *</label>
                  <input type="number" required min="0" max="30" value={formData.age} onChange={(e) => handleInputChange('age', e.target.value)} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500" placeholder="3"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Size *</label>
                  <select required value={formData.size} onChange={(e) => handleInputChange('size', e.target.value)} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500">
                    <option value="">Select size...</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                  <select required value={formData.gender} onChange={(e) => handleInputChange('gender', e.target.value)} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500">
                    <option value="">Select gender...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Adoption Fee ($)</label>
                  <input type="number" min="0" value={formData.adoptionFee} onChange={(e) => handleInputChange('adoptionFee', e.target.value)} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500" placeholder="200"/>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                <textarea required value={formData.description} onChange={(e) => handleInputChange('description', e.target.value)} rows={4} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500" placeholder="Describe your pet..."/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Rehoming *</label>
                <textarea required value={formData.reasonForRehoming} onChange={(e) => handleInputChange('reasonForRehoming', e.target.value)} rows={3} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500" placeholder="Reason for rehoming..."/>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="isNeutered" checked={formData.isNeutered} onChange={(e) => handleInputChange('isNeutered', e.target.checked)} className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"/>
                  <label htmlFor="isNeutered" className="text-sm text-gray-700">Spayed/Neutered</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="isVaccinated" checked={formData.isVaccinated} onChange={(e) => handleInputChange('isVaccinated', e.target.checked)} className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"/>
                  <label htmlFor="isVaccinated" className="text-sm text-gray-700">Up to date on vaccinations</label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Pet Photos *</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-teal-400 transition-colors">
                  <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Upload photos of your pet</p>
                  <p className="text-sm text-gray-500">Drag and drop or click to browse (JPG, PNG)</p>
                  <button type="button" className="mt-4 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">Choose Photos</button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <CheckCircle className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Review & Submit</h2>
                <p className="text-gray-600">Please review your information before submitting</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">Owner Details</h3>
                <p><strong>Name:</strong> {formData.ownerName}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
                <p><strong>Address:</strong> {formData.address}, {formData.city}, {formData.state} {formData.zipCode}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">Pet Details</h3>
                <p><strong>Name:</strong> {formData.petName}</p>
                <p><strong>Species:</strong> {formData.species}</p>
                <p><strong>Breed:</strong> {formData.breed}</p>
                <p><strong>Age:</strong> {formData.age}</p>
                <p><strong>Size:</strong> {formData.size}</p>
                <p><strong>Gender:</strong> {formData.gender}</p>
                <p><strong>Description:</strong> {formData.description}</p>
                <p><strong>Reason for Rehoming:</strong> {formData.reasonForRehoming}</p>
                <p><strong>Spayed/Neutered:</strong> {formData.isNeutered ? 'Yes' : 'No'}</p>
                <p><strong>Vaccinated:</strong> {formData.isVaccinated ? 'Yes' : 'No'}</p>
                <p><strong>Adoption Fee:</strong> ${formData.adoptionFee}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="agreeToTerms" required checked={formData.agreeToTerms} onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)} className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"/>
                  <label htmlFor="agreeToTerms" className="text-sm text-gray-700">I agree to terms and conditions *</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="agreeToScreening" required checked={formData.agreeToScreening} onChange={(e) => handleInputChange('agreeToScreening', e.target.checked)} className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"/>
                  <label htmlFor="agreeToScreening" className="text-sm text-gray-700">I agree to pre-adoption screening *</label>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            {currentStep > 1 && <button type="button" onClick={prevStep} className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">Back</button>}
            {currentStep < 3 && <button type="button" onClick={nextStep} className="ml-auto px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">Next</button>}
            {currentStep === 3 && <button type="submit" className="ml-auto px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">Submit</button>}
          </div>
        </form>
      </div>
    </div>
  );
}
