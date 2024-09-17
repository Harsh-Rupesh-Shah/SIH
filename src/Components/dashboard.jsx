import React, { useState } from 'react';
import './dashboard.css';
import Navbar from './Navbar';

const Dashboard = () => {
  const initialBenchmarks = [
    { controlCategory: 'Account Lockout', benchmarkItem: '1.1 Ensure Account Lockout Threshold is Configured', checkDescription: 'Ensure accounts are locked after multiple failed login attempts.', risk: 'Brute-force attacks can easily compromise accounts without this.', remediations: 'Configure Group Policy to enforce account lockout.', severity: 'High' },
    { controlCategory: 'Authentication Controls', benchmarkItem: '1.2 Ensure NTLM Authentication is Disabled', checkDescription: 'Disable the use of NTLM authentication.', risk: 'NTLM is vulnerable to credential forwarding and pass-the-hash attacks.', remediations: 'Configure Group Policy to disable NTLM authentication.', severity: 'High' },
    { controlCategory: 'Local Policies', benchmarkItem: '2.1 Ensure User Rights Assignment is Properly Configured', checkDescription: 'Review and configure user rights assignments for least privilege.', risk: 'Users with unnecessary rights can compromise system integrity.', remediations: 'Configure through Local Security Policy or Group Policy.', severity: 'Medium' },
    { controlCategory: 'Audit Policy', benchmarkItem: '2.2 Enable Advanced Audit Policy Configuration', checkDescription: 'Ensure detailed auditing for system events is enabled.', risk: 'Lack of detailed logs makes incident investigations harder.', remediations: 'Use Group Policy to configure advanced audit policies.', severity: 'High' },
    { controlCategory: 'Event Log Management', benchmarkItem: '3.1 Ensure Event Log Retention is Configured', checkDescription: 'Configure logs to be retained for a sufficient period.', risk: 'Important security events may be lost if logs are overwritten.', remediations: 'Set log retention policies via Group Policy or Local Policy.', severity: 'High' },
    { controlCategory: 'Windows Defender Configuration', benchmarkItem: '4.1 Enable Windows Defender Real-Time Protection', checkDescription: 'Ensure real-time protection in Windows Defender is enabled.', risk: 'Systems without real-time protection are vulnerable to malware.', remediations: 'Enable and configure Windows Defender in Group Policy.', severity: 'High' },
    { controlCategory: 'BitLocker', benchmarkItem: '5.1 Ensure BitLocker Encryption is Enabled for OS Drives', checkDescription: 'Ensure the operating system drive is encrypted with BitLocker.', risk: 'Unencrypted drives are vulnerable to theft or unauthorized access.', remediations: 'Enable BitLocker via Group Policy or Local Security Policy.', severity: 'High' },
    { controlCategory: 'Software Restrictions', benchmarkItem: '6.1 Configure Software Restriction Policies (SRP)', checkDescription: 'Restrict which software is allowed to run on the system.', risk: 'Unchecked software installations can lead to malware infections.', remediations: 'Configure SRP via Group Policy to whitelist trusted software.', severity: 'Medium' },
    { controlCategory: 'PowerShell Restrictions', benchmarkItem: '7.1 Ensure PowerShell Logging is Enabled', checkDescription: 'Enable PowerShell script block and module logging.', risk: 'PowerShell is a common attack vector; logging helps detect misuse.', remediations: 'Configure PowerShell logging via Group Policy.', severity: 'High' },
    { controlCategory: 'Remote Desktop Protocol (RDP)', benchmarkItem: '8.1 Ensure NLA is Enabled for RDP', checkDescription: 'Enable Network Level Authentication (NLA) for Remote Desktop.', risk: 'Without NLA, systems are vulnerable to brute-force attacks via RDP.', remediations: 'Enable NLA in Group Policy.', severity: 'High' }
  ];

  const [benchmarks, setBenchmarks] = useState(initialBenchmarks);
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const filterBenchmarks = (filterType) => {
    setDropdownOpen(false); // Close dropdown when a filter is selected
    switch (filterType) {
      case 'bySeverity':
        const sortedBySeverity = [...initialBenchmarks].sort((a, b) => a.severity.localeCompare(b.severity));
        setBenchmarks(sortedBySeverity);
        break;
      default:
        setBenchmarks(initialBenchmarks);
    }
  };

  const handleSearch = () => {
    if (!searchTerm) {
      setBenchmarks(initialBenchmarks); // Reset to initial list if search term is empty
      return;
    }
    const filteredBenchmarks = initialBenchmarks.filter(benchmark =>
      Object.values(benchmark).some(value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setBenchmarks(filteredBenchmarks.length ? filteredBenchmarks : [{ message: 'No data found' }]);
  };

  return (
    <div>
      <Navbar />
      <div className="nine">
        <h1>Dashboard<span>Analysis Of Audit Scan</span></h1>
      </div>
      <div className="toolbar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button id="search-btn" onClick={handleSearch}>Search</button>
        <div className="dropdown">
          <button className="drop-btn" onClick={toggleDropdown}>Filters</button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="#" onClick={() => filterBenchmarks('bySeverity')}>By Severity</a>
            </div>
          )}
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Control Category</th>
            <th>Benchmark Item</th>
            <th>Check Description</th>
            <th>Risk</th>
            <th>Remediations</th>
            <th>Severity</th>
          </tr>
        </thead>
        <tbody>
          {benchmarks.length && benchmarks[0].message ? (
            <tr>
              <td colSpan="7">{benchmarks[0].message}</td>
            </tr>
          ) : benchmarks.map((benchmark, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{benchmark.controlCategory}</td>
              <td>{benchmark.benchmarkItem}</td>
              <td>{benchmark.checkDescription}</td>
              <td>{benchmark.risk}</td>
              <td>{benchmark.remediations}</td>
              <td>{benchmark.severity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
