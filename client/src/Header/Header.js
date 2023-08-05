import React, { useState } from 'react';
import RegisterForm from '../RegisterForm';
import './Header.css';

const Header = () => {
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleRegister = (formData) => {
    // Implement the registration logic here or call an API to register the user
    console.log('Registering user:', formData);
  };

  const handleLogin = (email, password) => {
    // Handle login logic here
    // Example: Send a POST request to the server to authenticate the user
    console.log('Login:', email, password);
    // Close the modal after login
    setLoginModalOpen(false);
  };

  const handleModalClose = () => {
    setLoginModalOpen(false);
    setRegisterModalOpen(false);
  }

  return (
    <header className="header">
      <div><h1>Store Management</h1></div>
      <div className="button-container">
        <button className="login-button" onClick={() => setLoginModalOpen(true)}>Login</button>
        <button className="register-button" onClick={() => setRegisterModalOpen(true)}>Register</button>
      </div>
      <RegisterForm
        isOpen={isRegisterModalOpen || isLoginModalOpen}
        onRequestClose={handleModalClose}
        onRegister={handleRegister}
        isLogin={isLoginModalOpen}
        onLogin={handleLogin}
      />
    </header>
  );
};

export default Header;
