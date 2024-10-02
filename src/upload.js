import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/storage';
import './upload.css'; 

function CourseForm({ onClose }) {
  const [courseName, setCourseName] = useState('');
  const [year, setYear] = useState('');
  const [professor, setProfessor] = useState('');
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      setUploading(true);

      const fileRef = firebase.storage().ref().child(`courseFiles/${file.name}`);
      const snapshot = await fileRef.put(file);

      const fileUrl = await snapshot.ref.getDownloadURL();

 
      const courseData = {
        courseName,
        year,
        professor,
        fileUrl,
      };

      await firebase.database().ref('courses').push(courseData);

      setCourseName('');
      setYear('');
      setProfessor('');
      setFile(null);

      setUploading(false);
      setUploadProgress(0);

      onClose(); 
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="modal-background2">
      <div className="modal-content2">
        <span className="close" onClick={onClose}>&times; </span>
        <h2>Upload Course Information</h2>
        <form onSubmit={handleFormSubmit} className="form">
          <div className="form-group">
            <label htmlFor="courseName">Course Name:</label>
            <input type="text" id="courseName" value={courseName} onChange={(e) => setCourseName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="year">Year:</label>
            <input type="text" id="year" value={year} onChange={(e) => setYear(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="professor">Professor:</label>
            <input type="text" id="professor" value={professor} onChange={(e) => setProfessor(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="file">File:</label>
            <input type="file" id="file" onChange={handleFileChange} required />
          </div>
          <button type="submit" disabled={uploading} className="submit-button">Upload</button>
        </form>
      </div>
    </div>
  );
}

export default CourseForm;
