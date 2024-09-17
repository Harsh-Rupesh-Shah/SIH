import React, { useState } from 'react';
import './previousScan.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const PreviousScan = () => {
  const initialProjects = [
    { organization: 'User', title: 'Windows Scan 01', date: '2024-09-14' },
    { organization: 'User', title: 'Linux Scan 02', date: '2024-09-01' },
    { organization: 'User', title: 'Linux Scan 03', date: '2024-09-10' },
    { organization: 'User', title: 'Windows Scan 02', date: '2024-08-05' },
    { organization: 'User', title: 'Windows Scan 03', date: '2024-08-20' },
    { organization: 'User', title: 'Linux Scan 01', date: '2024-07-15' }
  ];

  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const filterProjects = (filterType) => {
    setDropdownOpen(false); // Close dropdown when a filter is selected
    switch (filterType) {
      case 'byDate':
        const sortedByDate = [...initialProjects].sort((a, b) => new Date(a.date) - new Date(b.date));
        setProjects(sortedByDate);
        break;
      case 'bySize':
        const sortedBySize = [...initialProjects].sort((a, b) => a.title.localeCompare(b.title));
        setProjects(sortedBySize);
        break;
      default:
        setProjects(initialProjects);
    }
  };

  const handleSearch = () => {
    if (!searchTerm) {
      setProjects(initialProjects); // Reset to initial list if search term is empty
      return;
    }
    const filteredProjects = initialProjects.filter(project =>
      Object.values(project).some(value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setProjects(filteredProjects.length ? filteredProjects : [{ message: 'No data found' }]);
  };

  return (
    <div>
      <Navbar />
      <div className="nine">
        <h1>Previous Scans<span>History Of Audit Scans</span></h1>
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
              <a href="#" onClick={() => filterProjects('byDate')}>By Date</a>
              <a href="#" onClick={() => filterProjects('bySize')}>By Scan Title</a>
            </div>
          )}
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            
            <th>Previous Scan Titles</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {projects.length && projects[0].message ? (
            <tr>
              <td colSpan="4">{projects[0].message}</td>
            </tr>
          ) : projects.map((project, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              
              {/* Wrap the scan title with Link to make it clickable */}
              <td>
                <Link to={`/dashboard`}>
                  {project.title}
                </Link>
              </td>
              <td>{project.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PreviousScan;
