import React from 'react';
import './UserProfile.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';
import Forecast from '../components/forecast/Forecast';

export default function Weather() {
  return (
    <div className="profile">
      <Header />
      <div
        class="p-5 bg-image"
        style={{
          backgroundImage: '',
          position: 'relative',
        }}
      >
        <div className="container">
          <Forecast />
        </div>
      </div>

      <Footer />
    </div>
  );
}
