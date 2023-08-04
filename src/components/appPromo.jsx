import React from 'react'
import '../styles/appPromo.css'
import playStoreImg from '../assets/playstore.png'
import appleStoreImg from '../assets/appleStore.png'
import promoImg from '../assets/promoImage.jpeg'
function AppPromo() {
  return (
    <div className="app-promo">
        <div className="app-promo-text col">
            <span className="app-promo-head">Get Home Service App</span>
            <div className="promo-text">
              <p className="description">Are you tired of endlessly scrolling through job websites, struggling to find the perfect opportunity?</p>
              <p className='desc-1'>Discover your dream job with our job seeking app. Access top-notch job listings, tailored recommendations, and powerful tools for a successful career journey. Download now and take charge of your future!</p>
            </div>
            <div className="download-app">
                <img src={playStoreImg} alt="playstore" className="download-icon" />
                <img src={appleStoreImg} alt="applestore" className="download-icon" />
            </div>
        </div>
        <div className="app-promo-img-div">
            <img src={promoImg} alt="mobilePromo" className="app-promo-img"/>
        </div>
    </div>
  )
}

export default AppPromo