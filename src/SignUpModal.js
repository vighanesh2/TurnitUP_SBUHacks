import React, { useState } from 'react';
import { auth } from './firebase'; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; 
import './signup.css';

function SignUpModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); 
  const [successMessage, setSuccessMessage] = useState('');
  const [isSignIn, setIsSignIn] = useState(false); 

  const handleSignUp = async () => {
    try {
     
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccessMessage('Sign up successful!');
      onClose();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignIn = async () => {
    try {
    
      await signInWithEmailAndPassword(auth, email, password);
      setSuccessMessage('Sign in successful!');
      onClose();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleToggle = () => {
    setIsSignIn((prevIsSignIn) => !prevIsSignIn); 
    setError(null); 
    setSuccessMessage(''); 
  };

  return (
    <div className="modal-background">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
        {successMessage && <div className="success">{successMessage}</div>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        {error && <div className="error">{error}</div>}
        {isSignIn ? (
          <button onClick={handleSignIn}>Sign In</button>
        ) : (
          <button onClick={handleSignUp}>Sign Up</button>
        )}
        <div className="toggle-button" onClick={handleToggle}>
          {isSignIn ? 'New User? Sign Up' : 'Already have an account? Sign In'}
        </div>
      </div>
    </div>
  );
}

export default SignUpModal;
