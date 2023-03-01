import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Continents from './components/Continents';
import Contact from './components/Contact';

// import '../src/styles/App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="continents/" element={<Continents />} />
        <Route path="contact/" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
