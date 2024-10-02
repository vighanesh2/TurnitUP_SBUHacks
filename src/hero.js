import React, { useState, useEffect } from 'react';
import './Hero.css';
import SignUpModal from './SignUpModal';
import Upload from './upload.js';
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import CourseForm from './upload.js'; 
import logo from './assets/logo.png';
import img1 from './assets/box1.jpg';
import rightI from './assets/right-img.jpg';
import Vector from './assets/vector.png';
import Notes from './notes.js';
import Chatbot from './chatbot.js';

import HomeworkList from './homework.js'; 
import loginicon from './assets/login.jpeg';
import Productivity from './assets/productivity.jpg';
import time from './assets/time.png';
import owl from './assets/owl.png';
import math from './assets/math.jpeg';
import Psychology from './assets/psy1.jpg';
import Science from './assets/science.jpeg';
import { auth } from "./firebase"; 


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
  const [showAI, setShowAI] = useState(false);

  const [showSearch, setShowSearch] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [showHome, setShowHome] = useState(true);
  const [showHomeworks, setShowHomeworks] = useState(false); 

  const handleNotesClick = () => {
    setShowNotes(true);
    setShowModal(false);
    setShowUpload(false);
    setShowSearch(false);
    setShowHome(false);
    setShowHomeworks(false); 
    setShowAI(false);

  };
  const handleAIClick = () => {
    setShowAI(true);

    setShowNotes(false);
    setShowModal(false);
    setShowUpload(false);
    setShowSearch(false);
    setShowHome(false);
    setShowHomeworks(false); 
  };

  const handleHomeworksClick = () => { 
    setShowHomeworks(true);
    setShowNotes(false);
    setShowModal(false);
    setShowUpload(false);
    setShowSearch(false);
    setShowHome(false);
    setShowAI(false);

  };

  const handleSignUpButtonClick = () => {
    setShowModal(true);
  };
   
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user); 
      } else {
        setCurrentUser(null); 
      }
    });

  
    return () => unsubscribe();
  }, []);
  const handleHomeButtonClick = () => {
    setShowHome(true);
    setShowNotes(false);
    setShowModal(false);
    setShowUpload(false);
    setShowSearch(false);
    setShowHomeworks(false); 
    setShowAI(false);

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
            <li><a href="#" onClick={handleUploadClick} >Upload</a></li>    
            
            <li><a href="#" onClick={handleAIClick} >Use AI</a></li>    

            
                  </ul>
        </nav>
        <div className='signup-but'>
        {currentUser ? (
            <div className='username-display'>
              <p>Welcome, {currentUser.email.split('@')[0]}!</p>
            </div>
          ) : (
            <button className='signup' onClick={handleSignUpButtonClick}>
              <img src={loginicon} className='loginicon' alt="Icon" />
              <a>Sign Up | Sign In</a>
            </button>
          )}
        
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
    
      {showHomeworks && <HomeworkList />} 
      {showAI && <Chatbot />} 

      <Footer />
    </div>
  );
}

export default App;
