import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Login from './components/login/Login';
import AdminPage from './components/adminPage/AdminPage';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes> 
          <Route path="/" element={<Login />} /> 
          <Route path="/admin" element={<AdminPage />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
