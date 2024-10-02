import React, { useEffect, useState } from 'react';
import { db } from './firebase'; 
import { collection, getDocs } from 'firebase/firestore'; 
import './notes.css'; 
import Computer from './assets/computer.jpeg';
import Marketing from './assets/marketing.png';

function NotesList() {
  const [notes, setNotes] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const notesCollection = collection(db, 'notes'); 
        const notesSnapshot = await getDocs(notesCollection);
        const notesList = notesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNotes(notesList);
      } catch (error) {
        console.error("Error fetching notes data:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchNotes();
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="notes-container">
      <h2>Notes</h2>
      <div className="notes-list">
        {notes.map((note) => (
          <div key={note.id} className="note-item">
            <a href={note.documentLink} target="_blank" rel="noopener noreferrer">
              <img src={note.thumbnail || Computer} alt="Note Thumbnail" className="note-thumbnail" />
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
