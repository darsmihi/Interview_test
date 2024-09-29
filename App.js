import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobList from './JobList';
import JobDetails from './JobDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
      </Routes>
    </Router>
  );
}

export default App;


