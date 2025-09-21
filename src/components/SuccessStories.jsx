import React from 'react';
import { Heart, Star, Calendar } from 'lucide-react';

export function SuccessStories() {
  const stories = [
    {
      id: 1,
      petName: 'Buddy',
      petImage: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600',
      familyName: 'The Johnson Family',
      familyImage: 'https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=600',
      story: "After losing our previous dog, we weren't sure we were ready for another pet. But when we saw Buddy's profile on PawsConnect, we knew he was meant to be part of our family. The adoption process was seamless, and now Buddy brings so much joy to our daily lives.",
      adoptionDate: '2024-01-15',
      location: 'San Francisco, CA',
      rating: 5
    },
    {
      id: 2,
      petName: 'Luna',
      petImage: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=600',
      familyName: 'Sarah & Mike',
      familyImage: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=600',
      story: "We were first-time cat owners and nervous about the process. The shelter was incredibly helpful through PawsConnect's messaging system, answering all our questions. Luna has been the perfect addition to our apartment life!",
      adoptionDate: '2024-02-03',
      location: 'Austin, TX',
      rating: 5
    },
    {
      id: 3,
      petName: 'Charlie & Daisy',
      petImage: 'https://images.pexels.com/photos/104373/pexels-photo-104373.jpeg?auto=compress&cs=tinysrgb&w=600',
      familyName: 'The Martinez Family',
      familyImage: 'https://images.pexels.com/photos/1157394/pexels-photo-1157394.jpeg?auto=compress&cs=tinysrgb&w=600',
      story: "We adopted two bonded rabbits through PawsConnect. The platform made it easy to find pets that needed to stay together. Charlie and Daisy have brought so much happiness to our home, and our kids absolutely adore them.",
      adoptionDate: '2024-01-28',
      location: 'Denver, CO',
      rating: 5
    },
    {
      id: 4,
      petName: 'Rex',
      petImage: 'https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?auto=compress&cs=tinysrgb&w=600',
      familyName: 'David Thompson',
      familyImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
      story: "As a single professional, I wanted a loyal companion. Rex was exactly what I was looking for - well-trained, calm, and incredibly loving. The adoption process was thorough but efficient.",
      adoptionDate: '2024-02-10',
      location: 'Seattle, WA',
      rating: 5
    },
    {
      id: 5,
      petName: 'Mittens',
      petImage: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=600',
      familyName: 'The Chen Family',
      familyImage: 'https://images.pexels.com/photos/1128316/pexels-photo-1128316.jpeg?auto=compress&cs=tinysrgb&w=600',
      story: "Our elderly mother wanted a calm companion, and Mittens was perfect. The shelter provided detailed information about her personality, and she's been a wonderful addition to our family.",
      adoptionDate: '2024-01-05',
      location: 'Portland, OR',
      rating: 5
    },
    {
      id: 6,
      petName: 'Sunny',
      petImage: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600',
      familyName: 'The Williams Family',
      familyImage: 'https://images.pexels.com/photos/1128317/pexels-photo-1128317.jpeg?auto=compress&cs=tinysrgb&w=600',
      story: "We have three young children and needed a patient, gentle dog. Sunny exceeded all our expectations. She's protective, playful, and has become an integral part of our family adventures.",
      adoptionDate: '2024-02-14',
      location: 'Phoenix, AZ',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 to-orange-50 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Success Stories</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Every adoption is a success story. Here are some of the beautiful connections we've helped create between pets and their forever families.
        </p>
      </section>

      {/* Stories Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {stories.map(story => (
          <div key={story.id} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="flex items-center space-x-4 mb-6">
              <img src={story.petImage} alt={story.petName} className="w-16 h-16 rounded-full object-cover" />
              <div className="flex-1">
                <h3 className="text-xl font-bold">{story.petName}</h3>
                <p className="text-gray-600">Adopted by {story.familyName}</p>
                <div className="flex items-center space-x-1 mt-1">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <img src={story.familyImage} alt={story.familyName} className="w-12 h-12 rounded-full object-cover" />
            </div>
            <blockquote className="text-gray-700 italic mb-6">"{story.story}"</blockquote>
            <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Adopted {new Date(story.adoptionDate).toLocaleDateString()}</span>
              </div>
              <span>{story.location}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-teal-600 text-white text-center">
        <Heart className="w-16 h-16 mx-auto mb-6 text-teal-200" />
        <h2 className="text-3xl font-bold mb-4">Ready to Write Your Own Success Story?</h2>
        <p className="text-lg text-teal-100 mb-8 leading-relaxed">
          Join thousands of families who have found their perfect companions through PawsConnect. Your new best friend is waiting for you.
        </p>
        <button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
          Start Your Search
        </button>
      </section>
    </div>
  );
}
