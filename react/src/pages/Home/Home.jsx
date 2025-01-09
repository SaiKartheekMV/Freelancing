// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import searchImg from '../../assets/search.png';
import freelancerImg from '../../assets/freelancer-img.jpg'
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="left-part">
          <h1 className="sub-title">Hurry! Top talent won’t wait—offer ends soon!</h1>
          <p className="sub-title2">Hire loyal, skilled, and top freelancers to make your projects shine!</p>
          <div className="options">
            <button className='hire-btn'>Hire a Warrior</button>
            <div className="search-bar">
              <input type="text" placeholder='Find Warrior for Battle' />
              <img src={searchImg} alt="search-icon" className='search-icon' />
            </div>
          </div>
        </div>
        <div className="right-part">
          <div className="image-placeholder">
            {/* Add an image or illustration */}
            <img src={freelancerImg} alt="Placeholder" className="right-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
