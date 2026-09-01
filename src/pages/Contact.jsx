import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return (
    <div className="page-wrapper">
      
      {/* Contact Hero Banner */}
      <section className="contact-hero" style={{backgroundImage: 'url(https://arjuncement.com/images/img_bg_4.jpg)'}}>
        <div className="hero-overlay"></div>
        <div className="container hero-content text-center">
          <span className="hero-subtitle">Get in Touch</span>
          
          {/* Breadcrumb */}
          <div className="hero-breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Contact Us</span>
          </div>

          <h1 className="hero-title">Contact Us</h1>
        </div>
      </section>

      <section className="section" style={{paddingTop: 'var(--spacing-16)'}}>
        <div className="container">
          
          {/* Premium Two-Column Section */}
          <div className="contact-premium-grid">
            
            {/* Left Column: Contact Info & Map */}
            <div className="contact-info-col">
              <div className="info-card">
                <h3 className="info-title">Contact Information</h3>
                <ul className="info-list">
                  <li>
                    <div className="info-icon"><MapPin size={22} /></div>
                    <div className="info-content">
                      <strong>Address</strong>
                      <span>363/288/1 Hasanganj Bawali<br />campwell road Lucknow 226017</span>
                    </div>
                  </li>
                  <li>
                    <div className="info-icon"><Phone size={22} /></div>
                    <div className="info-content">
                      <strong>Phone</strong>
                      <a href="tel://917525099899">+91 7525099899</a>
                      <a href="tel://918881705000">+91 8881705000</a>
                    </div>
                  </li>
                  <li>
                    <div className="info-icon"><Mail size={22} /></div>
                    <div className="info-content">
                      <strong>Email</strong>
                      <a href="mailto:cementarjun@rediffmail.com">cementarjun@rediffmail.com</a>
                    </div>
                  </li>
                  <li>
                    <div className="info-icon"><Globe size={22} /></div>
                    <div className="info-content">
                      <strong>Website</strong>
                      <a href="http://arjuncement.com">arjuncement.com</a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="map-card">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1715.7336083857056!2d81.073977!3d26.5105968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399b93971a0b35f3%3A0x79bfbf7c30854af8!2sArjun+Cement+Factory!5e1!3m2!1sen!2sin!4v1533101826520" 
                  width="100%" 
                  height="300" 
                  style={{border: 0}} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Arjun Cement Location"
                ></iframe>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="contact-form-col">
              <div className="form-card">
                <h3 className="form-title">Get In Touch</h3>
                <p className="form-subtitle">Send us a message and we'll get back to you as soon as possible.</p>
                <form className="premium-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Name</label>
                      <input type="text" placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                      <label>Mobile No</label>
                      <input type="number" placeholder="Your mobile" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Your email address" required />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea rows="6" placeholder="Say something about us" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
