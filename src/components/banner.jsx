import React from 'react'
import '../styles/banner.css'
import BannerImg from '../assets/job-search.png'
import Counter from '../components/counter'
function Banner() {
  return (
    <div className="banner">
        <div className="row banner-div">
            <div className="banner-div-1 col">
                <div className="banner-txt col">
                    <h1>Unlock Your Dream <br />Career - Discover Opportunities <br />Today!</h1>
                    <p>Land Your Dream Job - We Make it Possible!</p>
                </div>
                <div className="banner-btns row">
                    <span>Join Now</span>
                    <span>Know More</span>
                </div>
            </div>
            <div className="banner-img">
                <img src={BannerImg} alt="BannerImage" />
            </div>
        </div>
        <Counter/>
    </div>
  )
}

export default Banner