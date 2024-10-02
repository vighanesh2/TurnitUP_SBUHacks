import React, { useEffect, useState } from 'react';
import { db } from './firebase'; 
import { collection, getDocs } from 'firebase/firestore'; 
import './homework.css'; 
import Computer from './assets/computer.jpeg';
import Marketing from './assets/marketing.png';

function HomeworkList() {
  const [homework, setHomework] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchHomework = async () => {
      try {
        const homeworkCollection = collection(db, 'homework'); 
        const homeworkSnapshot = await getDocs(homeworkCollection);
        const homeworkList = homeworkSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setHomework(homeworkList);
      } catch (error) {
        console.error("Error fetching homework data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomework();
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="homework-container">
      <h2>Homework</h2>
      <div className="homework-list">
        {homework.map((item) => (
          <div key={item.id} className="homework-item">
            <a href={item.documentLink} target="_blank" rel="noopener noreferrer">
              <img src={item.thumbnail || Computer} alt="Homework Thumbnail" className="homework-thumbnail" />
            </a>
            <div className="homework-details">
              <h3>{item.courseName}</h3>
              <p>Professor: {item.professor}</p>
              <p>Deadline: {item.deadline}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeworkList;
