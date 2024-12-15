import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginForm } from './Components/Assets/LoginForm/LoginForm';
import SignupForm from './Components/Assets/SignupForm/SigunpForm'  // Corrected import for default export

function App() {
  return (
    <Router>
      <div>
        {/* Define the routing here */}
        <Routes>
          {/* Route for Login Form */}
          <Route path="/" element={<LoginForm />} />
          {/* Route for Signup Form */}
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

