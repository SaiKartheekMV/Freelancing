// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import searchImg from "../../assets/search.png";
import freelancerImg from "../../assets/freelancer-img.jpg";
import accImg from "../../assets/accImg.png"
import aiImg from "../../assets/aiImg.jpeg"
import workImg from "../../assets/workImg.jpg"
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="homePlace">
        <div className="container">
          <div className="left-part">
            <h1 className="sub-title">
              Hurry! Top talent won’t wait—offer ends soon!
            </h1>
            <p className="sub-title2">
              Hire loyal, skilled, and top freelancers to make your projects
              shine!
            </p>
            <div className="options">
              <button className="hire-btn">Hire a Warrior</button>
              <div className="search-bar">
                <input type="text" placeholder="Find Warrior for Battle" />
                <img
                  src={searchImg}
                  alt="search-icon"
                  className="search-icon"
                />
              </div>
            </div>
          </div>
          <div className="right-part">
            <div className="image-placeholder">
              <img
                src={freelancerImg}
                alt="Placeholder"
                className="right-image"
              />
            </div>
          </div>
        </div>

        <section className="info-place">
          <div className="con1">
            <img className="accImg" src={accImg} alt="" />
            <h2>Create Your Account</h2>
            <p id="p1" >Create your account today and start your journey to success!</p>
          </div>
          <div className="con2">
            <img className="aiImg" src={aiImg} alt="" />
            <h2>AI Assistant!</h2>
            <p id="p2" >Find top talent effortlessly with Our AI based recommedation system</p>
          </div>
          <div className="con3">
            <img className="workImg" src={workImg} alt="" />
            <h2>Save <span className="time">Time</span> and <span className="money">Money</span></h2>
            <p id="p3" >Save time and money with our smart solutions!</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
