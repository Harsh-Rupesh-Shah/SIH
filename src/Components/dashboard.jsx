import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dashboard.css';
import Navbar from './Navbar';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [theme, setTheme] = useState('Blockchain & Cybersecurity');
  const [category, setCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchProjects = async () => {
//       const response = await axios.get('/api/projects', {
//         params: { theme, category }
//       });
//       setProjects(response.data);
//     };

//     fetchProjects();
//   }, [theme, category]);

  return (
    <div>
        <Navbar/>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="Blockchain & Cybersecurity">Blockchain & Cybersecurity</option>
        {/* Add more themes as options */}
      </select>
      
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="lastModified">Last modified</option>
        <option value="bestResults">Best results</option>
        <option value="leastResults">Least results</option>
        <option value="date">Modified by date</option>
        {/* Add more categories as options */}
      </select>

        <div className="toolbar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => console.log('Filters clicked')}>Filters</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Organization</th>
            <th>Problem Statement Title</th>
            <th>Category</th>
            <th>PS Number</th>
            {/* <th>Submitted Idea(s) Count</th>
            <th>Theme</th> */}
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{project.organization}</td>
              <td>{project.title}</td>
              <td>{project.category}</td>
              <td>{project.psNumber}</td>
              <td>{project.submittedIdeasCount}</td>
              <td>{project.theme}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
