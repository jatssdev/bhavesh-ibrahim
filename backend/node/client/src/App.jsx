import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import RegisterUser from './components/RegisterUser';
import './App.css'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/register" element={<RegisterUser />} />
      </Routes>
    </Router>
  );
}

export default App;
