import React from 'react';

import { Heart, Users, Shield, Award, CheckCircle, Star } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '50,000+', label: 'Pets Adopted', icon: Heart },
    { number: '1,200+', label: 'Partner Shelters', icon: Shield },
    { number: '98%', label: 'Success Rate', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Users }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former veterinarian with 15 years of experience in animal welfare.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in shelter management and pet adoption processes.'
    },
    {
      name: 'Emily Johnson',
      role: 'Community Manager',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Passionate about connecting families with their perfect pets.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassion First',
      description: 'Every decision we make is guided by our love for animals and commitment to their wellbeing.'
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'We thoroughly vet all shelters and ensure safe, transparent adoption processes.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Building a supportive community of pet lovers, adopters, and rescue organizations.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Matches',
      description: 'Using smart matching to ensure pets find their perfect forever homes.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Mission is <span className="text-teal-600 block">Saving Lives</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Founded in 2020, TailMate has revolutionized pet adoption by connecting loving families with pets.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <Icon className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team and Values sections can be added similarly */}
    </div>
  );
}
