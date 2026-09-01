import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const testimonials = [
  {
    name: 'PANKAJ VERMA',
    text: 'Far far away, behind the word mountains,the quality they provide are great.',
    image: 'https://arjuncement.com/images/person1.jpg'
  },
  {
    name: 'PARTH SHARMA',
    text: 'I am so happy with their fine products thats why I have been a regular customer.',
    image: 'https://arjuncement.com/images/person2.jpg'
  },
  {
    name: 'DIVYANSHU SMITH',
    text: 'I have no words to define their quality and services.',
    image: 'https://arjuncement.com/images/person3.jpg'
  }
];

const About = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="page-wrapper">
      
      {/* 1. About Hero */}
      <section className="about-hero" style={{backgroundImage: 'url(https://arjuncement.com/images/11.jpg)'}}>
        <div className="hero-overlay"></div>
        <div className="container hero-content text-center">
          <img src="https://arjuncement.com/images/favicon.png" alt="Arjun Cement Icon" className="hero-logo-icon" />
          
          <div className="hero-breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">About Us</span>
          </div>

          <h1 className="hero-title">About Us</h1>
        </div>
      </section>

      {/* 2. Welcome to our Company */}
      <section className="section welcome-section">
        <div className="container">
          <div className="welcome-grid">
            <div className="welcome-text-col">
              <h2 className="section-title">Welcome to our Company</h2>
              <p className="welcome-desc">
                Arjun Cement is the registered brand of R.D. Cement Industries Pvt. Ltd.
                The Company was established in 1992 with the vision to be preferred manufacturer of cement.
                Arjun Cement aims to deliver innovative products and solutions that meet the needs of its customers.<br /><br />
                Backed by state-of-the-art technology, access to the best quality raw materials and highly skilled manpower 
                against the backdrop of India's infrastructural growth in an overdrive, we are upbeat about the future. Superior
                products and a strong Brand name, an extensive marketing and distribution network and the technical know-how represent 
                the Company's abiding strengths.
              </p>
            </div>
            <div className="welcome-image-col">
              <img src="https://arjuncement.com/images/img_bg_4.jpg" alt="Construction site" className="welcome-image" />
            </div>
          </div>
        </div>
      </section>

      {/* 3 & 4. Other Ventures & RSA GROUP */}
      <section className="section rsa-group-section" style={{backgroundColor: '#f9f9f9'}}>
        <div className="container text-center">
          <span className="subtitle-sm">OTHER VENTURES</span>
          <h2 className="group-title">RSA GROUP</h2>
          
          <div className="ventures-list-wrap">
            <ul className="ventures-list">
              <li><a href="https://arjuncement.com">CEMENT DIVISION</a></li>
              <li><a href="http://www.arjuninternational.org" target="_blank" rel="noopener noreferrer">HOTEL DIVISION</a></li>
              <li><a href="http://www.shakshimattress.com/" target="_blank" rel="noopener noreferrer">COIR / FOAM DIVISION</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Board of Directors */}
      <section className="section directors-section">
        <div className="container">
          <div className="text-center" style={{marginBottom: 'var(--spacing-12)'}}>
            <span className="subtitle-sm">Team</span>
            <h2 className="directors-title"><span className="font-light">Board of</span> <strong>Directors</strong></h2>
          </div>

          <div className="directors-grid">
            <div className="director-card">
              <div className="director-image-wrap">
                <img src="https://arjuncement.com/images/person1.jpg" alt="Anand Gupta" />
              </div>
              <div className="director-info">
                <h3>Anand Gupta</h3>
                <span className="designation">DIRECTOR OPERATION</span>
              </div>
            </div>

            <div className="director-card">
              <div className="director-image-wrap">
                <img src="https://arjuncement.com/images/person2.jpg" alt="Rajeev Gupta" />
              </div>
              <div className="director-info">
                <h3>Rajeev Gupta</h3>
                <span className="designation">DIRECTOR</span>
              </div>
            </div>

            <div className="director-card">
              <div className="director-image-wrap">
                <img src="https://arjuncement.com/images/person3.jpg" alt="Ramsaran Gupta" />
              </div>
              <div className="director-info">
                <h3>Ramsaran Gupta</h3>
                <span className="designation">DIRECTOR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="section testimonials-section" style={{backgroundColor: '#f9f9f9'}}>
        <div className="container">
          <div className="about-testimonials-grid">
            <div className="testimonials-heading-col">
              <span className="subtitle-sm" style={{letterSpacing: '8px'}}>T E S T I M O N I A L</span>
              <h2 className="testimonials-title">
                <span className="font-light">WHAT OUR</span><br />
                <strong>CLIENT SAYS</strong>
              </h2>
            </div>
            
            <div className="testimonials-content-col">
              <div className="testimonial-box">
                <div className="testimonial-quote-icon">“</div>
                
                <div className="testimonial-nav">
                  <button className="nav-btn prev-btn" onClick={prevTestimonial}>←</button>
                  <button className="nav-btn next-btn" onClick={nextTestimonial}>→</button>
                </div>

                <div className="testimonial-inner">
                  <div className="testimonial-avatar">
                    <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} />
                  </div>
                  <div className="testimonial-text-content">
                    <h3 className="testimonial-name">{testimonials[currentTestimonial].name}</h3>
                    <p className="testimonial-quote-text">{testimonials[currentTestimonial].text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
