import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../app.css';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setError('');

    try {
     
      const response = await fetch('http://localhost:5600/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      console.log('Fetch Response:', response);
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        
        console.log('Login Successful:', data);
        alert("login successful");
        setUser({ email: '', password: '' }); 
        navigate('/'); 
      } else {
      
        setError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      console.error('Error logging in:', err);
      setError('Something went wrong. Please try again later.');
    }
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <>
    <div className='container1'>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Login</h1>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <label >Enter your e-mail</label><br />
          <input
            type="text"
            required
            placeholder="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          /><br />

          <label >Enter your password</label><br />
          <input
            type="password"
            required
            placeholder="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          /><br /><br />

          <button type="submit" onClick={handleSubmit}>Login</button><br />
          <h2>Don't have an account?</h2>
          <button type="button" onClick={handleSignUp}>SignUp</button>
        </div>
      </form>
      </div>
    </>
  );
};

export default Login;
