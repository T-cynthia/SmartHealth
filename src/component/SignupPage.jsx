import React, { useState } from 'react';
import { useAuth } from '../AuthContext';  // Adjusted the path to where AuthContext is located

const SignupPage = () => {
  const { login } = useAuth(); // Use the login function from AuthContext
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    const userSignupData = { username, password };

    // Call the login function after successful signup
    login(userSignupData);
  };

  return (
    <form onSubmit={handleSignup}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupPage;
