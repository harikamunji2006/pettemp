import React from 'react';
import { Shield, Heart, MessageCircle, Search, FileText, MapPin } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Search,
      title: 'Smart Pet Search',
      description: 'Advanced filters to find pets that match your lifestyle, preferences, and living situation.'
    },
    {
      icon: Shield,
      title: 'Verified Shelters',
      description: 'All partner shelters are thoroughly vetted and verified for your peace of mind.'
    },
    {
      icon: Heart,
      title: 'Save Favorites',
      description: 'Keep track of pets you love and get notified about similar pets in your area.'
    },
    {
      icon: MessageCircle,
      title: 'Direct Communication',
      description: 'Chat directly with shelters to ask questions and schedule meet-and-greets.'
    },
    {
      icon: FileText,
      title: 'Easy Applications',
      description: 'Streamlined adoption process with digital applications and progress tracking.'
    },
    {
      icon: MapPin,
      title: 'Local & Nationwide',
      description: 'Find pets in your area or expand your search to find the perfect match anywhere.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose PawsConnect?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We make pet adoption easier, safer, and more meaningful for everyone involved
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center group hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
