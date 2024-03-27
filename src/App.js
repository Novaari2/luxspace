import React from 'react';
import './tailwind.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Browse from './components/Browse';
import Arrive from './components/Arrive';
import Clients from './components/Clients';
import Footer from './components/Footer';
import AsideMenu from './components/AsideMenu';

function App() {
  return (
    <div>
    <Header />
    <Hero />
    <Browse />
    <Arrive />
    <Clients />
    <AsideMenu />
    <Footer />
    </div>
  );
}

export default App;
