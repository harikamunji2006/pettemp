import React from 'react';
import { Heart, Shield, Stethoscope, Home, Users, BookOpen, CheckCircle, AlertTriangle } from 'lucide-react';

export function PetCare() {
  const careGuides = [
    {
      icon: Home,
      title: 'Preparing Your Home',
      description: 'Essential steps to pet-proof your space',
      tips: [
        'Remove toxic plants and chemicals',
        'Secure loose wires and small objects',
        'Create a designated pet area',
        'Install safety gates if needed',
        'Stock up on essential supplies'
      ]
    },
    {
      icon: Stethoscope,
      title: 'Health & Wellness',
      description: 'Keeping your pet healthy and happy',
      tips: [
        'Schedule a vet visit within first week',
        'Maintain vaccination schedules',
        'Establish a grooming routine',
        'Monitor eating and bathroom habits',
        'Watch for signs of illness'
      ]
    },
    {
      icon: Users,
      title: 'Socialization',
      description: 'Helping your pet adjust to their new life',
      tips: [
        'Introduce family members gradually',
        'Start with short outings',
        'Arrange supervised pet meetups',
        'Enroll in training classes',
        'Be patient with adjustment period'
      ]
    },
    {
      icon: Heart,
      title: 'Building Bonds',
      description: 'Creating lasting relationships with your pet',
      tips: [
        'Establish daily routines',
        'Use positive reinforcement',
        'Spend quality one-on-one time',
        'Learn your pet\'s preferences',
        'Be consistent with rules'
      ]
    }
  ];

  const emergencyTips = [
    {
      situation: 'Pet Won\'t Eat',
      severity: 'medium',
      action: 'Monitor for 24 hours. If continues, contact vet.',
      icon: AlertTriangle
    },
    {
      situation: 'Excessive Hiding',
      severity: 'low',
      action: 'Normal for first few days. Provide quiet space and patience.',
      icon: Home
    },
    {
      situation: 'Vomiting/Diarrhea',
      severity: 'high',
      action: 'Contact veterinarian immediately, especially if persistent.',
      icon: Stethoscope
    },
    {
      situation: 'Aggressive Behavior',
      severity: 'high',
      action: 'Consult with shelter and professional trainer immediately.',
      icon: Shield
    }
  ];

  const supplies = [
    {
      category: 'Dogs',
      essential: ['Collar & Leash', 'Food & Water Bowls', 'Dog Bed', 'Toys', 'Waste Bags'],
      recommended: ['Crate', 'Car Harness', 'Grooming Supplies', 'Training Treats', 'ID Tag']
    },
    {
      category: 'Cats',
      essential: ['Litter Box & Litter', 'Food & Water Bowls', 'Cat Bed', 'Scratching Post', 'Toys'],
      recommended: ['Cat Carrier', 'Cat Tree', 'Grooming Brush', 'Nail Clippers', 'ID Collar']
    },
    {
      category: 'Small Pets',
      essential: ['Appropriate Cage/Habitat', 'Food & Water Containers', 'Bedding', 'Toys', 'Hiding Places'],
      recommended: ['Exercise Equipment', 'Grooming Tools', 'Health Supplements', 'Cleaning Supplies']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Pet Care Guide
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know to give your new pet the best possible start 
            in their forever home.
          </p>
        </div>
      </section>

      {/* Care Guides */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential Care Guidelines</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these expert-recommended steps for a successful adoption
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careGuides.map((guide, index) => {
              const IconComponent = guide.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{guide.title}</h3>
                      <p className="text-gray-600 text-sm">{guide.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {guide.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Supply Checklist */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Supply Checklist</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Make sure you have everything your new pet needs before they arrive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supplies.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{category.category}</h3>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3 flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Essential Items</span>
                  </h4>
                  <ul className="space-y-2">
                    {category.essential.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3 flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-orange-500" />
                    <span>Recommended</span>
                  </h4>
                  <ul className="space-y-2">
                    {category.recommended.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">First Week Emergency Guide</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common situations and how to handle them during your pet's adjustment period
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emergencyTips.map((tip, index) => {
              const IconComponent = tip.icon;
              const severityColors = {
                low: 'border-green-200 bg-green-50',
                medium: 'border-yellow-200 bg-yellow-50',
                high: 'border-red-200 bg-red-50'
              };
              const severityTextColors = {
                low: 'text-green-800',
                medium: 'text-yellow-800',
                high: 'text-red-800'
              };

              return (
                <div key={index} className={`border-2 rounded-xl p-6 ${severityColors[tip.severity]}`}>
                  <div className="flex items-start space-x-3">
                    <IconComponent className={`w-6 h-6 mt-1 ${severityTextColors[tip.severity]}`} />
                    <div className="flex-1">
                      <h3 className={`font-semibold mb-2 ${severityTextColors[tip.severity]}`}>
                        {tip.situation}
                      </h3>
                      <p className={`text-sm ${severityTextColors[tip.severity]}`}>
                        {tip.action}
                      </p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      tip.severity === 'high' ? 'bg-red-200 text-red-800' :
                      tip.severity === 'medium' ? 'bg-yellow-200 text-yellow-800' :
                      'bg-green-200 text-green-800'
                    }`}>
                      {tip.severity}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-6 text-teal-200" />
          <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
          <p className="text-lg text-teal-100 mb-8 leading-relaxed">
            Our support team and partner veterinarians are here to help you succeed 
            in your pet parenting journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              Contact Support
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-6 py-3 rounded-lg font-semibold transition-colors">
              Find Local Vets
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
