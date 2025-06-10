import './header.css'
import {Link} from 'react-router-dom' 
const Header=()=> {
    return (
        <header className='head'>
            <nav className='space'>
                <Link to="/HomePage" className='color'>Home</Link>
                <Link to="/AboutPage"className='color'>About</Link>
                <Link to="/CoursesPage"className='color'>Courses</Link>
                <Link to="/ContactPage"className='color'>Contact</Link>
                <a href="/AdmissionPage" className='color'><button id="btn">Apply Now!</button></a>

            </nav>  
        </header>
    );

};
export default Header;