import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './ScanSummary.css';
import Navbar from './Navbar';

function ScanSummary() {
  return (
    <>
    <Navbar/>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <div className="dashboard">
                <h2>Report Summary</h2>
                <p>Here is the summary of the generated report</p>

                <section className="audit-report">
                  <h3>Audit Report</h3>
                  <div className="report-cards">
                    <div className="card windows">
                      <h4>Windows Findings</h4>
                      <div className="chart">Complete: 3,200 / 10,000</div>
                    </div>
                    <div className="card linux">
                      <h4>Linux Findings</h4>
                      <div className="chart">Complete: 6,200 / 10,000</div>
                    </div>
                    <div className="card cloud">
                      <h4>Cloud Findings</h4>
                      <div className="chart">Complete: 12,400 / 20,000</div>
                    </div>
                  </div>
                </section>

                <section className="self-assessment">
                  <h3>Self-Assessment Report</h3>
                  <div className="assessment-cards">
                    <div className="card">
                      <h4>Previous</h4>
                      <div className="bar-chart">Mis-Configured Controls: 100%</div>
                      <div className="bar-chart">Not Configured Controls: 45%</div>
                    </div>
                    <div className="card">
                      <h4>Current</h4>
                      <div className="bar-chart">Mis-Configured Controls: 30%</div>
                      <div className="bar-chart">Not Configured Controls: 15%</div>
                    </div>
                  </div>
                </section>
              </div>
            }
          />
        </Routes>

        <footer>
          <div className="footer-container">
            <p>© 2024 CIS-Kurukshetra. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default ScanSummary;
