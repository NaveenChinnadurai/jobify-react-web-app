import React from 'react'
import { useState } from 'react'
import {BsArrowUpCircle as Top} from 'react-icons/bs'
import '../styles/PagesStyles/home.css'
import Partners from '../components/partners'
import Banner from '../components/banner'
import Signin from '../components/signin'
import Highlights from '../components/highlights'
import About from '../components/about'
import AppPromo from '../components/appPromo'
import Features from '../components/features'
import Missions from '../components/mission'
import Courses from '../components/courses'
import JobFields from '../components/jobFields'

function Home() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  window.addEventListener('scroll', handleScroll);

  return (
    <div className=' '>
        <Banner/>
        <div className="quote-div col">
            <h1>Fly like Flies</h1>
            <h1>Grap Your Oppurtunies on Jobify</h1>
            <h3>65% of the Jobify Aspirant Uncovered the right job prospects within 6 month from the day they become part of Jobify</h3>
        </div>
        <div className='search-div row'>
            <span className='search-txt'>Explore Jobs</span>
            <input type="text" placeholder='Browse Jobs here' className='search-tab'/>
            <button   className='search-btn'>Search</button>
        </div>
        <div className="job-search col">
          <h2>Explore the latest jobs</h2>
          <JobFields />
        </div>
        <Partners/>
        <About/>
        <Features/>
        <Missions/>
        <Courses/>
        <Highlights/>
        <Signin/>
        <AppPromo/>
        {showButton && (
          <button className="top-btn col" onClick={scrollToTop}><Top className='top-icon'/></button>
      )}
    </div>
  )
}

export default Home