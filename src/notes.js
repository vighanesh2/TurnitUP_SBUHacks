import React from 'react';
import './notes.css'; // Import CSS for styling the notes
import Computer from './assets/computer.jpeg';
import Marketing from './assets/marketing.png';
function NotesList() {
  // Define an array of hardcoded notes
  const notes = [
    {
      id: 1,
      thumbnail: Computer,
      courseName: 'CS 612 - Concepts and Structures in Internet Computing Week 2',
      professor: 'Professor Maria Vandovich',
      year: '2023',
      documentLink: 'https://docs.google.com/presentation/d/1N1QIc2BPuJJy4CY2nOFZAS5fKm-Lzp7m/edit?usp=drive_link&ouid=102113189562090471648&rtpof=true&sd=true'
    },
    {
      id: 2,
      thumbnail: Computer,
      courseName: 'CS 612 - Concepts and Structures in Internet Computing Syllabus',
      professor: 'Professor Maria Vandovich',
      year: '2024',
      documentLink: 'https://drive.google.com/file/d/1422WSB2AoPj8Cn1IHyiWqRAKnm02Itrc/view?usp=drive_link'
    },
    {
        id: 3,
        thumbnail: Marketing,
        courseName: 'Market-Based Management',
        professor: 'Professor Roger J. Best',
        year: '2023',
        documentLink: 'https://docs.google.com/presentation/d/1jusKyWIHF0-3yAMVp8M3QMeFzoUJx-a3/edit?usp=drive_link&ouid=102113189562090471648&rtpof=true&sd=true'
      },
      {
        id: 4,
        thumbnail: Marketing,
        courseName: 'Marketing Metrics and Marketing Profitability Chapter 2" ',
        professor: 'Professor Roger J. Best',
        year: '2021',
        documentLink: 'https://docs.google.com/presentation/d/1nQirUdcU-I8dDZQlRmEYzI1y7N9C4982/edit?usp=drive_link&ouid=102113189562090471648&rtpof=true&sd=true'
      },
    // Add more notes as needed
  ];

  return (
    <div className="notes-container">
      <h2>Notes</h2>
      <div className="notes-list">
        {notes.map((note) => (
          <div key={note.id} className="note-item">
            <a href={note.documentLink} target="_blank" rel="noopener noreferrer">
              <img src={note.thumbnail} alt="Note Thumbnail" className="note-thumbnail" />
            </a>
            <div className="note-details">
              <h3>{note.courseName}</h3>
              <p>Professor: {note.professor}</p>
              <p>Year: {note.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesList;
