import React from 'react';
import Login from './components/login/Login';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Login />
      <Footer/>
    </div>
  );
}

export default App;
