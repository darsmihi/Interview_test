import React from 'react';
import { Link } from 'react-router-dom';

const jobs = [
  { id: 1, title: 'Quality Assurance Analyst ', department: 'Quality Assurance', location: 'Verna, Goa', type: 'Full Time' },
  { id: 2, title: 'Quality Assurance Lead', department: 'Quality Assurance', location: 'Verna, Goa', type: 'Full Time' },
  { id: 3, title: 'Business Analyst', department: 'Project Management', location: 'Verna, Goa', type: 'Full Time' },
];

function JobList() {
  return (
    <div className="search-filter-container">
      <h1>Job Listings</h1>
      {jobs.map(job => (
        <div key={job.id} className="job-item">
          <div className="job-info">
            <Link to={`/jobs/${job.id}`} className="job-title">{job.title}</Link>
            <span>{job.department} • {job.location}</span>
            <span className="job-type">{job.type}</span>
          </div>
          <div className="job-actions">
            <Link to={`/jobs/${job.id}`} className="apply-btn 
            apply for the jobs ">Apply</Link>
            <Link to={`/jobs/${job.id}`} className="view-btn">View</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default JobList;

