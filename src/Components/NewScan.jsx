import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './NewScan.css';
import Navbar from './Navbar';
import Loader from './Loader';

function NewScan() {
    const [isSubmitting, setIsSubmitting] = useState(false); // State to handle submit button and show feedback
    const navigate = useNavigate(); // For navigation after the scan starts

    const handleStartScan = (e) => {
        e.preventDefault(); // Prevent form submission
        setIsSubmitting(true); // Disable button to prevent multiple clicks

        // Simulate scan delay of 30 seconds
        setTimeout(() => {
            navigate('/dashboard'); // Redirect to dashboard after delay
        }, 30000); // 30000 ms = 30 seconds
    };

    return (
        <div className="new-scan-container">
            <Navbar />

            <main className="new-scan-main">
                <h1>Start a New Scan</h1>
                <form className="scan-form" onSubmit={handleStartScan}> {/* Add onSubmit handler */}
                    <label>
                        Enter Scan Name:
                        <input
                            type="text"
                            placeholder="e.g., Ubuntu Server Audit"
                            required
                        />
                    </label>

                    <button type="submit" className="start-scan" disabled={isSubmitting}>
                        {isSubmitting ? 'Starting Scan...' && <Loader/> : 'Start Scan'} {/* Show feedback */}
                    </button>
                </form>
            </main>

            <footer>
                <div className="footer-content">
                    <p>© 2024 CIS-Kurukshetra. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default NewScan;
