import './header.css'

import {Link} from 'react-router-dom'
import { useState } from 'react';
const Header=()=> {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control drawer visibility
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
   const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
    return (
        <header className='head'>
            <nav className='space'>
                <Link to="/" className='color'>Home</Link>
                <Link to="/AboutPage"className='color'>About</Link>
                <Link to="/CoursesPage"className='color'>Courses</Link>
                <Link to="/ContactPage"className='color'>Contact</Link>
                <Link to="/AdmissionPage" className='btn'>Apply Now!</Link>
            </nav>   
                <button className="hamburger" onClick={toggleDrawer}>
                    <span className="hamburger2"></span>
                    <span className="hamburger2"></span>
                    <span className="hamburger2"></span>
                </button>

            <nav className={`drawer-nav ${isDrawerOpen ? "open" : ""}`}>
                <button className="close-drawer-btn" onClick={toggleDrawer}>
                  ✕
                </button>
                <Link to="/HomePage" className="nav-item" onClick={closeDrawer}>
                  Home
                </Link>
                <Link to="/AboutPage" className="nav-item" onClick={closeDrawer}>
                  About
                </Link>
                <Link to="/CoursesPage" className="nav-item" onClick={closeDrawer}>
                  Courses
                </Link>
                <Link to="/ContactPage" className="nav-item" onClick={closeDrawer}>
                  Contact
                </Link>
                <Link to="/AdmissionPage" className="nav-item btn primary-btn" onClick={closeDrawer}>
                  Apply Now!
                </Link>
           </nav>

              {isDrawerOpen && (
        <div className="drawer-overlay" onClick={toggleDrawer}></div>
      )
      }

                   
        </header>
    );

};
export default Header;