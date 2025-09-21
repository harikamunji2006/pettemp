import React, { useState } from 'react';
import { X, Mail, Lock, User, Phone, MapPin } from 'lucide-react';

export function AuthModal({ onClose, onAuth }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [userType, setUserType] = useState('adopter');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    location: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAuth({
      ...formData,
      type: userType,
      id: Math.random().toString(36).substr(2, 9),
      favorites: [],
      applications: []
    });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {/* Header */}
        <div style={styles.header}>
          <h2>{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>
          <button onClick={onClose} style={styles.closeBtn}><X /></button>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          {isSignUp && (
            <>
              {/* User Type */}
              <div>
                <label>I am a...</label>
                <div style={styles.userTypeContainer}>
                  <button type="button" onClick={() => setUserType('adopter')} style={userType === 'adopter' ? styles.selectedType : styles.typeBtn}>
                    <User /> Pet Adopter
                  </button>
                  <button type="button" onClick={() => setUserType('shelter')} style={userType === 'shelter' ? styles.selectedType : styles.typeBtn}>
                    Shelter/Rescue
                  </button>
                </div>
              </div>

              {/* Name */}
              <div>
                <label>{userType === 'shelter' ? 'Organization Name' : 'Full Name'}</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder={userType === 'shelter' ? 'Happy Paws Rescue' : 'John Doe'}
                  style={styles.input}
                />
              </div>

              {/* Phone */}
              <div>
                <label>Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="(555) 123-4567"
                  style={styles.input}
                />
              </div>

              {/* Location */}
              <div>
                <label>Location</label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="San Francisco, CA"
                  style={styles.input}
                />
              </div>
            </>
          )}

          {/* Email */}
          <div>
            <label>Email Address</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="your@email.com"
              style={styles.input}
            />
          </div>

          {/* Password */}
          <div>
            <label>Password</label>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              placeholder="••••••••"
              style={styles.input}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" style={styles.submitBtn}>
            {isSignUp ? 'Create Account' : 'Sign In'}
          </button>

          {/* Toggle */}
          <div style={{ textAlign: 'center', marginTop: 10 }}>
            <button type="button" onClick={() => setIsSignUp(!isSignUp)} style={styles.toggleBtn}>
              {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Simple inline styles
const styles = {
  overlay: {
    position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16, zIndex: 50
  },
  modal: {
    backgroundColor: '#fff', borderRadius: 16, maxWidth: 400, width: '100%', padding: 16
  },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  closeBtn: { background: 'none', border: 'none', cursor: 'pointer' },
  form: { display: 'flex', flexDirection: 'column', gap: 12 },
  input: { width: '100%', padding: 8, borderRadius: 8, border: '1px solid #ccc' },
  submitBtn: { backgroundColor: '#14b8a6', color: '#fff', padding: 10, borderRadius: 8, fontWeight: 'bold', border: 'none', cursor: 'pointer' },
  toggleBtn: { background: 'none', border: 'none', color: '#14b8a6', cursor: 'pointer', textDecoration: 'underline' },
  userTypeContainer: { display: 'flex', gap: 8, marginTop: 8, marginBottom: 8 },
  typeBtn: { flex: 1, padding: 8, borderRadius: 8, border: '1px solid #ccc', cursor: 'pointer', background: '#f9f9f9' },
  selectedType: { flex: 1, padding: 8, borderRadius: 8, border: '2px solid #14b8a6', background: '#d1f5f4', fontWeight: 'bold', cursor: 'pointer' }
};
