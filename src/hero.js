import React, { useState } from 'react';
import './Hero.css'; // You can define your styles here
import SignUpModal from './SignUpModal';
import Upload from './upload.js';
import firebase from 'firebase/compat/app'; // Import Firebase app
import 'firebase/compat/auth'; // Import Firebase authentication module
import CourseForm from './upload.js'; // Import the CourseForm component
import logo from './assets/logo.png';
import img1 from './assets/box1.jpg';
import rightI from './assets/right-img.jpg';
import Vector from './assets/vector.png';
import Notes from './notes.js';
import HomeworkList from './homework.js'; // Import the HomeworkList component
import loginicon from './assets/login.jpeg';
import Productivity from './assets/productivity.jpg';
import time from './assets/time.png';
import owl from './assets/owl.png';
import math from './assets/math.jpeg';
import Psychology from './assets/psy1.jpg';
import Science from './assets/science.jpeg';
// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvNGVxOi2jCiBpL_gzNFZnKMK6-u7FsXw",
  authDomain: "sub-hackathon.firebaseapp.com",
  projectId: "sub-hackathon",
  storageBucket: "sub-hackathon.appspot.com",
  messagingSenderId: "155419562508",
  appId: "1:155419562508:web:f2b212984cd64cf09fd429"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className='footerp'>&copy; 2024 Team TurnitUp at SBU Hackathon. All rights reserved.</p>
      </div>
    </footer>
  );
}

function App() {
  const [showNotesContent, setShowNotes] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [showHomeworks, setShowHomeworks] = useState(false); // New state for Homeworks

  const handleNotesClick = () => {
    setShowNotes(true);
    setShowModal(false);
    setShowUpload(false);
    setShowSearch(false);
    setShowHome(false);
    setShowHomeworks(false); // Ensure Homeworks are hidden when Notes are shown
  };

  const handleHomeworksClick = () => { // Function to handle Homeworks click
    setShowHomeworks(true);
    setShowNotes(false);
    setShowModal(false);
    setShowUpload(false);
    setShowSearch(false);
    setShowHome(false);
  };

  const handleSignUpButtonClick = () => {
    setShowModal(true);
  };
   

  const handleHomeButtonClick = () => {
    setShowHome(true);
    setShowNotes(false);
    setShowModal(false);
    setShowUpload(false);
    setShowSearch(false);
    setShowHomeworks(false); // Ensure Homeworks are hidden when Home is shown
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseNotes = () => {
    setShowNotes(false);
  };

  const handleUploadClick = () => {
    setShowUpload(true);
  };
  const handleCloseUpload= () => {
    setShowUpload(false);
  };

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleSearch = (query) => {
    console.log('Search query:', query);
  };

  return (
    <div className="app-container">
      <div className='header'>
        <div className='left-logo'>
          <a href="#" onClick={handleHomeButtonClick}>
            <img src={logo} className='logo' alt="Logo" />
          </a>
        </div>
        <nav className="navigation-bar">
          <ul>
            <li><a href="#" onClick={handleHomeButtonClick}>Home</a></li>
            <li><a href="#" onClick={handleNotesClick}>Notes</a></li>
            <li><a href="#" onClick={handleHomeworksClick}>Homeworks</a></li>
            <li><a href="#" onClick={handleUploadClick} >Upload</a></li>          </ul>
        </nav>
        <div className='signup-but'>
          <button className='signup' onClick={handleSignUpButtonClick}>
            <img src= {loginicon} className='loginicon' alt="Icon" />
            <a>Sign Up | Sign In</a>
          </button>
        </div>
      </div>
      {showNotesContent && <Notes onClose={handleCloseNotes} />}
      
      {showHome && (
        <div className='twosides'>
          <div className='frontside'>
            <div className='leftside'>
              <img src={img1} className='box1-top' alt="Box1"></img>
              <h1 className='title'>TurnitUP & Learn</h1>
              <h3>Empowering Students, Building Community. Upload, Share, Learn Together.</h3>
              <div className='two-buttons'>
                <button onClick={handleUploadClick} className='Upload'>Upload</button>
                <button onClick={handleNotesClick} className='Explore'>Explore</button>
              </div>
            </div>
            <div className='rightside'>
              <img src={rightI} className='right-img' alt="RightI"></img>
            </div>
          </div>
          <div className='secondpart'>
            <div className='leftsecond'>
              <div className='left-imgdiv'>
                <img src={Vector} className='vectorart2' alt="Vector"></img>
              </div>
              <div className='rightsecond'>
                <h1 className='title2'> Browse through a vast collection of materials contributed by students from universities worldwide. Find resources relevant to your courses, topics of interest, or study needs.</h1>
              </div>
            </div>
          </div>
          <div className='thirdpart'>
            <h1 className='title2'>Get productive with us.
            <img src={time} className='timeimg'></img>
            Save time and streamline your study process with our intuitive search functionality.
            <br/>
            <img src={owl} className='owlimg'></img>
            </h1>
          <img src={Productivity} className='prod-img'></img>
          </div>
          
          <h1 className='title3'> Recent</h1>
          <div className='recent'>
           
          <article class="card">
  <img
    class="card__background"
    src={math}
    alt=""
    width="1920"
    height="2193"
  />
  <div class="card__content | flow">
    <div class="card__content--container | flow">
      <h2 class="card__title">Mathematics</h2>
      <p class="card__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
        labore laudantium deserunt fugiat numquam.
      </p>
    </div>
    <button class="">Read more</button>
  </div>
</article>
<article class="card">
  <img
    class="card__background"
    src={Psychology}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div class="card__content | flow">
    <div class="card__content--container | flow">
      <h2 class="card__title">Psychology</h2>
      <p class="card__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
        labore laudantium deserunt fugiat numquam.
      </p>
    </div>
    <button >Read more</button>
  </div>
</article>
<article class="card">
  <img
    class="card__background"
    src={Science}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div class="card__content | flow">
    <div class="card__content--container | flow">
      <h2 class="card__title">Science</h2>
      <p class="card__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
        labore laudantium deserunt fugiat numquam.
      </p>
    </div>
    <button >Read more</button>
  </div>
</article>

          </div>
        </div>
      )}
      
      {showModal && <SignUpModal onClose={handleCloseModal} />}
      {showUpload&& < Upload onClose={handleCloseUpload} />}
    
      {showHomeworks && <HomeworkList />} {/* Render HomeworkList only when showHomeworks is true */}
      <Footer />
    </div>
  );
}

export default App;
