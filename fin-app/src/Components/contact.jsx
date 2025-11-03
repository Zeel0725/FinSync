import React from 'react';
import './contact.css'; // Import CSS file for styling
import Footer from './Footer';

const Contact = () => {
    return (
        <div className="contact">
            {/* Page Header */}
            
            <section className="contact">
                {/* Section heading */}
                <h2>Contact Us</h2>
                {/* Contact form */}
                <form>
                    {/* Name input field */}
                    <input type="text" placeholder="Name" />
                    {/* Email input field */}
                    <input type="email" placeholder="Email" />
                    {/* Message textarea */}
                    <textarea placeholder="Message"></textarea>
                    {/* Submit button */}
                    <button className="submit-button">Send</button>
                </form>
            </section>
            <Footer/>
        </div>
    );
};

export default Contact;
