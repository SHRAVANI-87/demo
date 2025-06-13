import React from 'react'
import { useNavigation } from 'react-router-dom';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';
import './HomePage.css'
const HomePage = () => {
   
    return(
            <div className="homepage">
                <Header/>
                
                <div className='head2'>
                    <div className="overlay">   
                        <img src="/images/vck.jpg" alt="image" height={"300"} width="960"></img>
                        <div class="center"><h1 ClassName="welcome">Welcome to Vivekanand College !</h1></div>

                    </div>
                
                <h3 ClassName="your">Your journey to excellence starts here.</h3>

                <p>**Vivekanand College is a premier educational institution dedicated to fostering academic
                     excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 
                     1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
                    
                 <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond 
                        textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community 
                        create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>

                <h2>Why Choose vivekanad College?</h2>
                <ul>
                    <li>**Legacy of Excellence:** Decades of commitment to quality education.</li>
                    <li>**Experienced  Faculty:** Learn from renowned experts and passionate educators.</li>
                    <li>**Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.</li>
                    <li>**Holistic Development:** Focus on co-curricular activities, sports, and community service.</li>
                    <li>**Strong Placements:** Excellent career opportunities with leading companies.</li>
                </ul>

                <h2>Campus Life & Facilities</h2>

                    <div ClassName="image">
                
                            <img src="/images/students-studying-DbLGuwF_.jpeg"height="400" width="450" alt="vck"></img>
                            <img src="/images/campus-life-Crkero7B.jpg" height="400" width="450" alt="vck2"></img>
                     </div>
                <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning
                     experience and personal growth.</p>

                <p className='ready'>Ready to explore our courses</p>

                         <div>
                            <a href="/CoursesPage"><button id="cd">Explore Courses</button></a>
                        </div>


            </div>
                            <Footer/>
            </div>


    );
};
export default HomePage;    