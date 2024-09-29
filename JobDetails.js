import React from 'react';
import { useParams, Link } from 'react-router-dom';

const jobs = [
  {
    id: 1,
    title: 'Quality Assurance Analyst',
    department: 'Quality Assurance',
    location: 'Verna, Goa',
    type: 'Full Time',
    description: (
      <>
        <h1>Responsibilities Include:</h1>
        <p><strong>Testing:</strong> Planning and implementing product testing, including regression testing, software compatibility tests, and software design reviews.</p>
        <p><strong>Analyzing:</strong> Reviewing products for defects and errors, analyzing test results, and analyzing competitors and the market.</p>
        <p><strong>Reporting:</strong> Reporting defects to programmers and preparing and analyzing quality reports for management.</p>
        <p><strong>Improving:</strong> Identifying and recommending solutions, improvements, and updates to products.</p>
        <h1>Additional Responsibilities:</h1>
        <p><strong>Ensuring Quality:</strong> Ensuring that products meet quality standards and customer expectations.</p>
        <p><strong>Following Regulations:</strong> Following legal regulations for testing.</p>
        <p><strong>Communicating:</strong> Communicating quality standards and findings to a diverse audience.</p>
        <p><strong>Working Collaboratively:</strong> Working collaboratively across different departments and teams.</p>
      </>
    ),
  },
  {
    id: 2,
    title: 'Quality Assurance Lead',
    department: 'Quality Assurance',
    location: 'Verna, Goa',
    type: 'Full Time',
    description: (
      <>
        <h1>Responsibilities Include:</h1>
        <p><strong>Test Planning:</strong> Create test plans for projects, and ensure that tests are executed as defined in the plan.</p>
        <p><strong>Quality Assurance:</strong> Review work products for accuracy and applicability, and ensure that systems meet customer needs.</p>
        <p><strong>Quality Improvement:</strong> Identify and implement process improvements to enhance quality and efficiency.</p>
        <p><strong>Team Leadership:</strong> Lead a team of testers, and collaborate with other development teams.</p>
        <p><strong>Reporting:</strong> Provide regular reports on issues found during testing, and make recommendations for service and quality improvements.</p>
        <p><strong>Compliance:</strong> Ensure compliance with regulatory requirements and industry standards.</p>
        <p><strong>Training:</strong> Coach agents on how to professionally communicate with customers.</p>
        <p><strong>Collaboration:</strong> Collaborate with cross-functional teams to ensure adherence to global QA initiatives and processes.</p>
        <h1>Qualifications:</h1>
        <p>A QA Lead typically has at least four years of experience in software testing and is familiar with various software testing tools and methodologies.</p>
      </>
    ),
  },
  {
    id: 3,
    title: 'Business Analyst',
    department: 'Project Management',
    location: 'Verna, Goa',
    type: 'Full Time',
    description: (
      <>
        <h1>Responsibilities Include:</h1>
        <p><strong>Requirements Gathering:</strong> Collaborate with stakeholders to gather and document business requirements.</p>
        <p><strong>Data Analysis:</strong> Analyze data and processes to identify trends, patterns, and insights that inform business decisions.</p>
        <p><strong>Solution Design:</strong> Develop and propose solutions that meet business needs and improve efficiency.</p>
        <p><strong>Stakeholder Communication:</strong> Communicate findings and recommendations effectively to stakeholders and team members.</p>
        <p><strong>Project Management:</strong> Assist in project planning and execution, ensuring alignment with business objectives.</p>
        <p><strong>Testing Support:</strong> Support the QA team by defining test cases based on business requirements and user stories.</p>
        <h1>Qualifications:</h1>
        <p>A Business Analyst typically has a bachelor's degree in business administration or a related field, with strong analytical skills and experience in business process modeling.</p>
      </>
    ),
  },
];

function JobDetails() {
  const { id } = useParams();
  const job = jobs.find(job => job.id === parseInt(id));

  if (!job) {
    return <div>Job not found!</div>;
  }

  return (
    <div className="job-details">
      <h2>{job.title}</h2>
      {job.description}
      <Link to="/">Back to Job Listings</Link>
      <button onClick={() => alert('Apply Now!')}>Apply</button>
    </div>
  );
}

export default JobDetails;
