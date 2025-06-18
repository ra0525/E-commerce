import React, { useState } from 'react';
import '../styles/LoginSignupModal.css';

const LoginSignupModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', phone: '', password: '' });

  if (!isOpen) return null;

  const handleLogin = () => {
    if (!loginData.email || !loginData.password) {
      alert('Please enter both Email and Password');
      return;
    }
    alert(`Logged in as ${loginData.email}`);
    onClose();
  };

  const handleSignup = () => {
    if (!signupData.name || !signupData.email || !signupData.phone || !signupData.password) {
      alert('Please fill all the fields');
      return;
    }
    alert(`Account created for ${signupData.name}`);
    onClose();
  };

  const handleForgotPassword = () => {
    const email = prompt("Please enter your registered email:");
    if (email) {
      alert(`A password reset link has been sent to ${email}`);
      // Later you can replace this with backend API integration
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>{isLogin ? 'Login' : 'Create Account'}</h2>

        {isLogin ? (
          <>
            <input
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
            <button className="submit-btn" onClick={handleLogin}>Login</button>
            <p className="forgot-password" onClick={handleForgotPassword}>Forgot Password?</p>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Name"
              value={signupData.name}
              onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              value={signupData.email}
              onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
            />
            <input
              type="phone"
              placeholder="Mobile Number"
              value={signupData.phone}
              onChange={(e) => setSignupData({ ...signupData, phone: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={signupData.password}
              onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
            />
            <button className="submit-btn" onClick={handleSignup}>Create Account</button>
          </>
        )}

        <p className="toggle-mode" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Don't have an account? Create one" : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
};

export default LoginSignupModal;
