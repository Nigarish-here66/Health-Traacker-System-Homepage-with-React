import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Carousel from 'react-bootstrap/Carousel';
import firstImage from './images/1.jpg';
import secondImage from './images/2.jpg';
import thirdImage from './images/3.jpg';
import fourthImage from './images/4.jpg';
import fifthImage from './images/5.jpg';
import sixthImage from './images/6.jpg';
import seventhImage from './images/7.jpg';
import eighthImage from './images/8.jpg';


function App() {
  const aboutSectionStyle = {
    position: 'relative',
    backgroundImage: `url(${seventhImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '60vh',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
  };

  const aboutOverlayStyle = {
    backgroundColor: 'rgba(37, 37, 37, 0.7)', // Dark overlay for text visibility
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  };

  const h4Style = {
    fontSize: '1.2rem',
  };

  const h1Style = {
    fontSize: '3rem',
  };

  const pStyle = {
    fontSize: '1rem',
    lineHeight: '1.6',
  };
  const carouselStyle = {
    height: '920px', // Adjust height as needed
    position: 'relative',
    overflow: 'hidden',
  };

  const imageStyle = {
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(50%)', // Adds a faded effect to images
  };

  const captionStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    textAlign: 'center',
    zIndex: 2,
  };

  const sectionStyle = {
    padding: '130px 0', // Vertical padding for the section
    minHeight: '600px', // Adjust the minimum height of the section as needed
  };

  const headingStyle = {
    fontSize: '2.5rem', // Adjust font size of the section heading
  };

  const subHeadingStyle = {
    fontSize: '1.8rem', // Adjust font size of the subheading
    color: '#007bff', // Primary color for subheading
  };

  const iconStyle = {
    fontSize: '3rem', // Adjust font size of the icons
  };

  const imagesStyle = {
    height: '250px', // Set image height
    objectFit: 'cover', // Ensure images cover the space without distortion
  };

  const headingItemStyle = {
    fontSize: '1.5rem', // Font size for the heading in each item
    marginTop: '20px', // Margin to give space between image and heading
  };

  const paragraphStyle = {
    fontSize: '1rem', // Font size for the paragraph text
    lineHeight: '1.6', // Adjust line height for readability
    padding: '0 10px', // Padding to avoid text touching the edges
  };
  const footerStyle = {
    backgroundColor: '#0091ea',
    padding: '20px 0',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const linkGroupStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    flexWrap: 'wrap',
    marginBottom: '20px',
  };

  const linkColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    marginBottom: '5px',
  };

  const hrStyle = {
    border: '0',
    borderTop: '1px solid white',
    width: '100%',
    margin: '20px 0',
  };

  const textStyle = {
    fontSize: '14px',
    maxWidth: '600px',
    margin: '0 auto',
    marginBottom: '10px',
  };

  const copyrightStyle = {
    fontSize: '14px',
  };

  const newsectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '160px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
  };

  const textContentStyle = {
    maxWidth: '500px',
  };

  const newheadingStyle = {
    fontSize: '50px',
    fontWeight: 'bold',
    marginBottom: '15px',
  };

  const newparagraphStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '20px',
    color: '#555',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  const newimageStyle = {
    maxWidth: '400px',
    height: '400px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div>
      {/* Header Carousel */}
      <Carousel>
        <Carousel.Item style={carouselStyle} interval={1000} fade>
          <img src={firstImage} className="d-block w-100" alt="First Slide" style={imageStyle} />
          <div style={captionStyle}>
          <h1>Welcome to Health Tracker</h1>
          <p className="lead">
            Track your meals, exercise, and health goals all in one place.
          </p>
          </div>
        </Carousel.Item>
        <Carousel.Item style={carouselStyle}>
          <img src={secondImage} className="d-block w-100" alt="Second Slide" style={imageStyle} />
          <div style={captionStyle}>
            <h2>IT IS HEALTH THAT IS REAL WEALTH AND <br></br>
              NOT PIECES OF GOLD AND SILVER
            </h2>
          </div>
        </Carousel.Item>
        <Carousel.Item style={carouselStyle}>
          <img src={thirdImage} className="d-block w-100" alt="Third Slide" style={imageStyle} />
          <div style={captionStyle}>
          <h2>HAPPINESS IS NOTHING MORE THAN <br></br>
              GOOD HEALTH AND A BAD MEMORY
            </h2>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Benefits Section */}
        <section className="features-section" style={sectionStyle}>
        <div className="container">
          <h2 className="text-center my-3" style={headingStyle}>Benefits of Exercise</h2>
          <h3 className="text-center text-primary" style={subHeadingStyle}>
            To Enjoy The Glow Of Good Health, You Must Exercise
          </h3>
          <div className="row text-center">
            <div className="col-md-4">
              <i className="bi bi-plus-circle display-4" style={iconStyle}></i>
              <div className="text-center mt-5 mb-5">
                <img src={fourthImage} alt="Exercise" className="img-fluid rounded" style={imagesStyle} />
              </div>
              <h4 style={headingItemStyle}>Track Meals</h4>
              <p style={paragraphStyle}>
                Effortlessly log your daily meals and track your calorie intake with ease. Stay on top of your nutrition goals, make informed choices, and maintain a balanced diet by monitoring every meal throughout the day.
              </p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-arrow-down-circle display-4" style={iconStyle}></i>
              <div className="text-center mt-5 mb-5">
                <img src={fifthImage} alt="Exercise" className="img-fluid rounded" style={imagesStyle} />
              </div>
              <h4 style={headingItemStyle}>Set Goals</h4>
              <p style={paragraphStyle}>
                Set clear fitness and health goals to stay motivated and focused on your progress. Whether you're aiming to increase strength, improve endurance, or maintain a healthy lifestyle, having defined targets will keep you on track and driven every day.
              </p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-emoji-smile display-4" style={iconStyle}></i>
              <div className="text-center mt-5 mb-5">
                <img src={sixthImage} alt="Exercise" className="img-fluid rounded" style={imagesStyle} />
              </div>
              <h4 style={headingItemStyle}>Monitor Progress</h4>
              <p style={paragraphStyle}>
                Track your progress over time and see how far you've come in achieving your health targets. With detailed insights into your performance, you can stay motivated and reach your goals faster, making continuous improvements along the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={aboutSectionStyle}>
        <div style={aboutOverlayStyle}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h4 style={h4Style} className="text-uppercase">Who We Are</h4>
                <h1 style={h1Style} className="text-white fw-bold">About Our Blog</h1>
              </div>
              <div className="col-md-6">
                <p style={pStyle}>
                  To enjoy good health, to bring true happiness to one's family, to bring peace to all, one must first discipline and control one's own mind. If a man can control his mind he can find the way to enlightenment, and all wisdom and virtue will naturally come to him.
                </p>
                <p style={pStyle}>
                  Saving our planet, lifting people out of poverty, advancing economic growth... these are one and the same fight. We must connect the dots between climate change, water scarcity, energy shortages, global health, food security, and women's empowerment.
                </p>
                <p style={pStyle}>
                  Our greatest happiness does not depend on the condition of life in which chance has placed us, but is always the result of a good conscience, good health, occupation, and freedom in all just pursuits.
                </p>
                <button className="btn btn-outline-light mt-3">Explore More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={newsectionStyle}>
      <img
        src={eighthImage}
        alt="App Screenshot"
        style={newimageStyle}/>
      <div style={textContentStyle}>
        <h2 style={newheadingStyle}>Track and learn from personal insights</h2>
        <p style={newparagraphStyle}>
          A free app for cancer and chronic illness patients to track symptoms,
          activities, and wellness. Keep a detailed journal of everything that’s
          important to you during treatment, and get personal health insights – so
          you can learn what helps you take control of how you feel.
        </p>
        <a href="#" style={buttonStyle}>
          Wave Health for Patients
        </a>
      </div>
    </section>

      {/* Footers Section */}
      <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={linkGroupStyle}>
          <div style={linkColumnStyle}>
            <a href="#" style={linkStyle}>Home</a>
            <a href="#" style={linkStyle}>Benefits</a>
            <a href="#" style={linkStyle}>About</a>
          </div>
          <div style={linkColumnStyle}>
            <a href="#" style={linkStyle}>Blog</a>
            <a href="#" style={linkStyle}>Image Gallery</a>
            <a href="#" style={linkStyle}>Contact</a>
          </div>
          <div style={linkColumnStyle}>
            <a href="#" style={linkStyle}>Privacy Policy</a>
            <a href="#" style={linkStyle}>Terms and Services</a>
            <a href="#" style={linkStyle}>About Burnout</a>
          </div>
        </div>
        <p style={textStyle}>
          To enjoy good health, to bring true happiness to one's family, to bring peace to all, one must first discipline and control one's own mind. If a man can control his mind he can find the way to Enlightenment.
        </p>
        <hr style={hrStyle} />
        <p style={copyrightStyle}>
          © 2024 Health Tracker. All Rights Reserved.
        </p>
      </div>
    </footer>
    </div>
  );
}

export default App;
