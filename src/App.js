import './App.css';
import React from 'react';
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';
import HeroBanner from './components/Herobanner';
import CardList from './components/CardList';
import SocialMediaCard from './components/SocialMediaCard';
import MediaCardList from './components/MediaCardList';
import TestimonialCarousel from './components/TestimonialCarousel';
import CountryModal from './components/CcountryModal';

const App = () => {
  return (
    <div className='app'>
      <HeaderComponent />
      <HeroBanner />
      <div className="album py-5 bg-light">
        <CardList />
        <SocialMediaCard />
        <MediaCardList />
        <TestimonialCarousel />
      </div>
      <CountryModal />
      <FooterComponent />
    </div>
  );
};

export default App;
