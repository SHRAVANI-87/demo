import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './ContactPage.css'
const ContactPage = () =>{
    return(
        <div className="contact">
                <Header/>
                <div className='head2'>
                <h1>Contact Us</h1>
                <p>We'd love to hear from you! Whether you have questions about admissions, programs, or
                     campus life, our team is here to help.</p>

                <h2>General Enquiries</h2>
                <h3>Vivekanand College Main Campus</h3>
                <p>“E” ward, Tarabai Park, Kolhapur 416 260
                    Maharashtra
                    India</p>
                <p>Phone: **+91 12345 67890**</p>
                <p>Email: **info@vivekanandcollege.edu**</p>
                <p>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>

                <h2>Admissions Office</h2>
                <p>For all admission-related queries regarding undergraduate or postgraduate programs:</p>
                <p>Phone: +91 98765 43210</p>
                <p>Email: admissions@vivekanandcollege.edu</p>

                <h2>Student Support Services</h2>
                <p>For current student support, academic advising, or general assistance:</p>
                <p>Phone: +91 87654 32109</p>
                <p>Email: studentsupport@vivekanandcollege.edu</p>

                <h2>Find Us on the Map</h2>
                <p>[You can embed a Google Map here later using an iframe or a React map library.]</p> 
                <a href="https://www.google.com/maps?q=Vivekanand+College">Visit on Google Maps</a>

                <h2>Send Us A Message</h2>
                <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
    
                </div>
                <Footer/>
        </div>

    )
}
export default ContactPage
    