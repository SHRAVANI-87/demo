import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './CoursesPage.css'
const CoursesPage = () =>{
    return(
    <div>
        <Header/>
        <div className='head2'>
        <h1>Our Academic Programs</h1>
        
        <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate
            programs designed to equip students with the knowledge and skills demanded by today's
            dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>

        <h2>Discover Campus Life</h2>
        <video className='video' controls>
            <source src="public/videos/college-tour-FAmcnyfF.mp4" />
        </video>
        <p id="par">Get a glimpse of the vibrant academic and social life at Vivekanand College.</p>
        <h2>Undergraduate Programs (UG)</h2>
        <ul id="ull">
                <li><h4>Bachelor of Science (B.sc)</h4></li>
                <ul>
                    <li>Computer Science (3 years)</li>
                    <li>Information Technology (3 years)</li>
                    <li>Biotechnology (3 years)</li>
                </ul>
            
        
             <li><h4>Bachelor of Commerce (B.Com)</h4></li>
                <ul>
                    <li>Accounting & Finance (3 years)</li>
                    <li>Banking & Insurance (3 years)</li>
                </ul>
            

            <li><h4>Bachelor of Arts (B.A)</h4></li>
                <ul>
                    <li>English Literature (3 years)</li>
                    <li>Psychology (3 years)</li>
                </ul>
            
        </ul>

            <h2>Postgraduate Programs (PG)</h2>
            <ul className="postgraduate">
                <li><h4>Master of Science (M.Sc.)</h4></li>
                    <ul>
                        <li>Computer Science (2 years)</li>
                        <li>Information Technology (2 years)</li>
                    </ul>
                <li><h4>Master of Commerce (M.Com) (2 years)</h4></li>
                <li><h4>Master of Arts (M.A.) (2 years)</h4></li>
            </ul>

       <h2>Program Details & Fee Structure (Annual)</h2>

       <table border={5} id="tbl">
            <thead>
                    <tr>
                        <th ro>Program Type</th>
                        <th>Course Name</th>
                        <th>Duration</th>
                        <th>Annual Fee (INR)</th>
                        <th>Eligibility</th>
                    </tr>
            </thead>
            <tbody>
                <tr>
                    <th>UG</th>
                    <th>B.Sc. Computer Science</th>
                    <th>3 Years</th>
                    <th>₹ 85,000</th>
                    <th>10+2 with PCM (50%)</th>
                </tr>
                <tr>
                    <th>UG</th>
                    <th>B.Com. Accounting & Finance</th>
                    <th>3 Years</th>
                    <th>₹ 70,000</th>
                    <th>10+2 Commerce (45%)</th>
                </tr>
                <tr>
                    <th>PG</th>
                    <th>M.Sc. Information Technology</th>
                    <th>2 Years</th>
                    <th>₹ 95,000</th>
                    <th>B.Sc. IT/CS (50%)</th>
                </tr>
            </tbody>
        </table>

        <h2>Specialized & Vocational Courses</h2>
        <p>In addition to traditional degree programs, we offer various certificate and diploma courses in 
            areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development,
             providing specialized training for career enhancement.</p>

        <p>Have questions about a specific course?</p>
        <a href="/ContactPage"><button id="bb">Inquire About Courses</button></a>
        </div>
        <Footer/>
    </div>
        
    )

}
export default CoursesPage;
