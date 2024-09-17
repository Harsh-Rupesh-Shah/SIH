import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldVirus, faChartLine, faTools } from '@fortawesome/free-solid-svg-icons';
import './home.css'; // Ensure the CSS file is correctly linked
import Navbar from './Navbar';



const Home = () => {
  return (
    <div>
      <Navbar/>
      <header className="header">
        <h1>Cyber Kurukshetra: Unleashing the Power of Benchmarks</h1>
        <div className="cta-buttons">
          <button>View Demo</button>
          <a href='/dashboard'><button>Get Started</button></a> 
        </div>
      </header>

      <div className="features">
        <div className="feature">
          <FontAwesomeIcon icon={faShieldVirus} size="3x" />
          <h3>Real-Time Scanning</h3>
          <p>Monitor your systems in real-time with our advanced scanning capabilities.</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faChartLine} size="3x" />
          <h3>Comprehensive Reports</h3>
          <p>Get detailed insights and breakdowns of your security posture.</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faTools} size="3x" />
          <h3>Easy Integration</h3>
          <p>Seamlessly integrate with your existing tools and platforms.</p>
        </div>
      </div>

      <div className="testimonials">
        <h2>What Our Clients Say</h2>
        <p>"Using Cyber Kurukshetra has transformed our security strategy - a must-have tool!" - Jane Doe, CTO</p>
      </div>

      {/* <div className="latest-articles">
        <h2>Latest Articles</h2>
        <p>New Trends in Cybersecurity</p>
        <p>Read about the latest threats and how to protect against them.</p>
      </div> */}

      <footer className="footer-container">
        <div>Privacy Policy</div>
        <div>Terms of Use</div>
        <div>Contact Us: support@cyberkurukshetra.com</div>
      </footer>
    </div>
  );
}

export default Home;
