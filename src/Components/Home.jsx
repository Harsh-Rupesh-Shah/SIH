import React from 'react';
import './home.css';
import Navbar from './Navbar';

function HomePage() {
  return (
    <>
    <Navbar/>
    <div className="App">
            <section className="hero">
              <h1>CIS-Kurukshetra Unleashing the Power of Benchmarks</h1>
              <p>Keep Businesses Secure</p>
              <div className="cta-buttons">
                <button className="view-demo animate-hover">View Demo</button>
                <button className="get-started animate-hover">Get Started</button>
              </div>
            </section>




        <footer>
          <div className="footer-container">

          </div>
        </footer>
      </div>
      </>
  );
}

export default HomePage;