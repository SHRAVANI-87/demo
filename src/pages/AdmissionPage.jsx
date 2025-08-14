import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';
import './AdmissionPage.css'
const AdmissionPage = () => {
    return(

            <div className="admission">
                <Header/>
                <div className='head2'>
                <h1>Admission at Vivekanand College</h1>
                <p>Welcome to the Admissions page of Vivekanand College! We are delighted you're considering 
                    joining our vibrant academic community. Our admission process is designed to be 
                    straightforward and accessible.</p>

                <p>Please review the eligibility criteria and key dates below for the upcoming academic year.
                     For any queries, feel free to contact our admissions office.</p>

                <h2>Eligibility Criteria for Undergraduate Programs</h2>

                <table border={5}>
                        
                                <tr id="bor">
                                    <th>Program</th>
                                    <th>Minimum Qualification</th>
                                    <th>Required Subjects</th>
                                    <th>Minimum Marks (%)</th>
                                </tr>
                    
                 
                     <tr id="bor1">
                        <td>B.Sc. Computer Science</td>
                        <td>10+2 (or equivalent)</td>
                        <td>Physics, Chemistry, Maths</td>
                        <td>50%</td>
                    </tr>
    
                    <tr id="bor2">
                        <td>B.Com. Accounting &amp; Finance</td>
                        <td>10+2 (or equivalent)</td>
                        <td>Commerce Stream</td>
                        <td>45%</td>
                    </tr>
                    
                    <tr id="bor3">
                        <td>B.A. English Literature</td>
                        <td>10+2 (or equivalent)</td>
                        <td>Any Stream</td>
                        <td>40%</td>
                    </tr>
                        
                </table>

                <h1>Application Process</h1>

                    <ol>
                    <li>Online Application: Fill out the application form available on our portal.</li>
                    <li>Document Submission: Upload scanned copies of required documents (mark sheets, ID proof, etc.).</li>
                    <li>Entrance Exam (if applicable): Appear for the college's entrance examination.</li>
                    <li>Merit List &amp; Interview: Check the merit list and attend the interview if shortlisted.</li>
                    <li>Fee Payment: Complete the admission by paying the required fees.</li>
                    </ol>

                    <p>For detailed information on postgraduate program admissions, specific program syllabi, and fee structures, please visit our <a href="/CoursesPage">Courses page</a> or <a href="/Contact us">Contact us</a> directly.</p>
           
                </div>
                <Footer/>
            </div>

    );
};
export default AdmissionPage;