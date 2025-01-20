import { useState } from 'react'
import Login from './components/login';
import SignUp from './components/signup';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  
  return (
    <div className='container1'>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App
