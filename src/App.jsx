import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CoursesPage from './pages/CoursesPage'
import ContactPage from './pages/ContactPage'
import AdmissionPage from './pages/AdmissionPage'
import ChatbotComponent from './components/Chatbot/ChatbotComponents'
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup'


const App = () =>{
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
      <>
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Shravani"
          studentPhotoUrl="/images/shravani.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
      
      <Router>
        <div>
          <Routes id="oop">
              <Route path ="/" element={<HomePage/>}/>
              <Route path ="/AboutPage" element={<AboutPage/>}/>
              <Route path ="/CoursesPage" element={<CoursesPage/>}/>
              <Route path="/ContactPage" element={<ContactPage/>}/>
              <Route path="/AdmissionPage" element={<AdmissionPage/>}/>
          </Routes>
        
        </div>
      <ChatbotComponent/>
      </Router>
    </>
  );
};
export default App