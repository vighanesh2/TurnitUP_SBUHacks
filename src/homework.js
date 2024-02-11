import React from 'react';
import './homework.css'; // Import CSS for styling the homework items
import Computer from './assets/computer.jpeg';
import Marketing from './assets/marketing.png';

function HomeworkList() {
  // Define an array of hardcoded homework items
  const homework = [
    {
      id: 1,
      thumbnail: Computer,
      courseName: 'CSCI 345 Theory of Computation',
      professor: 'Professor Ibrahim sala',
      deadline: '2023-02-15',
      documentLink: 'https://docs.google.com/document/d/1vVGhQS399ZlKCupQCMbOIOrpi9L5Hv3D/edit?usp=drive_link&ouid=102113189562090471648&rtpof=true&sd=true'
    },
    {
      id: 2,
      thumbnail: Computer,
      courseName: 'CS Data Structures',
      professor: 'Professor Micheal Kadri',
      deadline: '2023-02-22',
      documentLink: 'https://drive.google.com/file/d/1lFUMYU2cjOni59KPTXGoxfhMyEzoJ2CB/view?usp=drive_link'
    },
    {
      id: 3,
      thumbnail: Marketing,
      courseName: 'Market-Based Management Assignment 1',
      professor: 'Professor Roger J. Best',
      deadline: '2023-02-20',
      documentLink: 'https://docs.google.com/document/d/1j-um2i53IIIMKB9qZH1NirPAqMGmnyaV/edit?usp=drive_link&ouid=102113189562090471648&rtpof=true&sd=true'
    },
    {
      id: 4,
      thumbnail: Marketing,
      courseName: 'Market-Based Management Assignment 2',
      professor: 'Professor Roger J. Best',
      deadline: '2023-02-28',
      documentLink: 'https://docs.google.com/document/d/13Hl-wew4WBXd5X7jI7FYHLM9MV0gVYze/edit?usp=drive_link&ouid=102113189562090471648&rtpof=true&sd=true'
    },
    // Add more homework items as needed
  ];

  return (
    <div className="homework-container">
      <h2>Homework</h2>
      <div className="homework-list">
        {homework.map((item) => (
          <div key={item.id} className="homework-item">
            <a href={item.documentLink} target="_blank" rel="noopener noreferrer">
              <img src={item.thumbnail} alt="Homework Thumbnail" className="homework-thumbnail" />
            </a>
            <div className="homework-details">
              <h3>{item.courseName}</h3>
              <p>Professor: {item.professor}</p>
              <p>Year {item.deadline}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeworkList;
