// index.js

export const PetTemplate = {
  id: '',
  name: '',
  species: '', // 'dog', 'cat', 'rabbit', 'bird', 'other'
  breed: '',
  age: 0,
  size: '', // 'small', 'medium', 'large'
  gender: '', // 'male', 'female'
  description: '',
  photos: [],
  location: '',
  shelter: null,
  isNeutered: false,
  isVaccinated: false,
  healthNotes: '',
  adoptionFee: 0,
  dateAdded: '',
  status: '', // 'available', 'pending', 'adopted'
};

export const ShelterTemplate = {
  id: '',
  name: '',
  location: '',
  phone: '',
  email: '',
  website: '',
  description: '',
  verified: false,
};

export const UserTemplate = {
  id: '',
  name: '',
  email: '',
  phone: '',
  location: '',
  type: '', // 'adopter', 'shelter'
  favorites: [],
  applications: [],
};

export const ApplicationTemplate = {
  id: '',
  petId: '',
  userId: '',
  status: '', // 'pending', 'approved', 'rejected'
  submittedAt: '',
  livingSituation: '',
  experience: '',
  references: '',
  additionalNotes: '',
};

export const MessageTemplate = {
  id: '',
  conversationId: '',
  senderId: '',
  content: '',
  timestamp: '',
  read: false,
};
