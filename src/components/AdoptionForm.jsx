import React from 'react';

export default function AdoptionForm({ pet, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500">X</button>
        <h3 className="text-xl font-semibold mb-4">Adopt {pet.name}</h3>
        <p className="mb-4">{pet.description}</p>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border p-2 rounded"/>
          <input type="email" placeholder="Your Email" className="w-full border p-2 rounded"/>
          <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700">Submit</button>
        </form>
      </div>
    </div>
  );
}
