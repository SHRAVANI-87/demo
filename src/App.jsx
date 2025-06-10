import React from 'react'
import './App.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CoursesPage from './pages/CoursesPage'
import ContactPage from './pages/ContactPage'
import AdmissionPage from './pages/AdmissionPage'
const App=()=>{
  return(
      <Router>
          <Routes id="oop">
              <Route path ="/HomePage" element={<HomePage/>}/>
              <Route path ="/AboutPage" element={<AboutPage/>}/>
              <Route path ="/CoursesPage" element={<CoursesPage/>}/>
              <Route path="/ContactPage" element={<ContactPage/>}/>
              <Route path="/AdmissionPage" element={<AdmissionPage/>}/>
          </Routes>
      </Router>
  );
};
export default App