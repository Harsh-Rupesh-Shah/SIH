import React from 'react'
import './NewScan.css'
import Navbar from './Navbar';

function NewScan() {
    return (
        <div className="new-scan-container">
            <Navbar/>

            <main className="new-scan-main">
                <h1>Start a New Scan</h1>
                <form className="scan-form">
                

                    <label>
                        Enter Scan Name:
                        <input
                            type="text"
                            placeholder="e.g., Ubuntu Server Audit"
                        />
                    </label>

                    <button type="submit" className="start-scan">
                        Start Scan
                    </button>
                </form>
            </main>

            <footer>
                <div className="footer-content">
                    <p>© 2024 CIS-Kurukshetra. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default NewScan;