export const mockShelters = [
  {
    id: '1',
    name: 'Happy Paws Rescue',
    location: 'San Francisco, CA',
    phone: '(555) 123-4567',
    email: 'info@happypaws.org',
    website: 'https://happypaws.org',
    description: 'Dedicated to finding loving homes for abandoned pets since 1995.',
    verified: true
  },
  {
    id: '2',
    name: 'Second Chance Animal Shelter',
    location: 'Austin, TX',
    phone: '(555) 987-6543',
    email: 'contact@secondchance.org',
    description: 'Non-profit organization focused on pet rehabilitation and adoption.',
    verified: true
  }
];

export const mockPets = [
  {
    id: '1',
    name: 'Bella',
    species: 'dog',
    breed: 'Golden Retriever',
    age: 3,
    size: 'large',
    gender: 'female',
    description: "Bella is a sweet, energetic Golden Retriever...",
    photos: [
      'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
      'https://images.pexels.com/photos/1478685/pexels-photo-1478685.jpeg'
    ],
    location: 'San Francisco, CA',
    shelter: mockShelters[0],
    isNeutered: true,
    isVaccinated: true,
    healthNotes: 'Up to date on all vaccinations, microchipped',
    adoptionFee: 250,
    dateAdded: '2024-01-15',
    status: 'available'
  }
  // ... add other pets similarly
];

export const mockUser = {
  id: '1',
  name: 'Sarah Johnson',
  email: 'sarah@example.com',
  phone: '(555) 123-4567',
  location: 'San Francisco, CA',
  type: 'adopter',
  favorites: ['1', '2'],
  applications: []
};
