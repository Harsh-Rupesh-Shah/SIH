import React, { useState } from 'react';
import './dashboard.css';
import Navbar from './Navbar';

const Dashboard = () => {
  const initialProjects = [
    { organization: 'Organization A', title: 'Project A', category: 'Software', date: '2023-01-01', submittedIdeasCount: 10, theme: 'Blockchain & Cybersecurity' },
    { organization: 'Organization B', title: 'Project B', category: 'Hardware', date: '2023-02-15', submittedIdeasCount: 20, theme: 'Blockchain & Cybersecurity' },
    { organization: 'Organization C', title: 'Project C', category: 'Software', date: '2023-03-20', submittedIdeasCount: 5, theme: 'Blockchain & Cybersecurity' },
    { organization: 'Organization D', title: 'Project D', category: 'Hardware', date: '2023-04-10', submittedIdeasCount: 8, theme: 'Blockchain & Cybersecurity' }
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
        const sortedBySize = [...initialProjects].sort((a, b) => a.submittedIdeasCount - b.submittedIdeasCount);
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
              <a href="#" onClick={() => filterProjects('byDate')}>By Date</a>
              <a href="#" onClick={() => filterProjects('bySize')}>By Size</a>
            </div>
          )}
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Organization</th>
            <th>Problem Statement Title</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {projects.length && projects[0].message ? (
            <tr>
              <td colSpan="5">{projects[0].message}</td>
            </tr>
          ) : projects.map((project, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{project.organization}</td>
              <td>{project.title}</td>
              <td>{project.category}</td>
              <td>{project.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
