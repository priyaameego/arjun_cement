import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroAnimation from '../components/HeroAnimation';
import './Home.css';

const Home = () => {
  const testimonials = [
    {
      name: "PANKAJ VERMA",
      quote: "Far far away, behind the word mountains, the quality they provide are great.",
      avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
    },
    {
      name: "PARTH SHARMA",
      quote: "I am so happy with their fine products thats why I have been a regular customer.",
      avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png"
    },
    {
      name: "DIVYANSHU SMITH",
      quote: "I have no words to define their quality and services.",
      avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="home-page">
      <HeroAnimation />
      
      {/* Journey Section */}
      <section className="section journey-section" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div className="journey-grid">
            <div className="journey-stats-box">
              <div className="stat-content">
                <span className="stat-num">26</span>
                <span className="stat-text">YEARS<br/>EXPERIENCE</span>
              </div>
            </div>
            
            <div className="journey-heading-wrap">
              <span className="welcome-text">W E L C O M E !</span>
              <h2 className="journey-heading">OUR<br/>JOURNEY</h2>
            </div>

            <div className="journey-desc">
              <p>
                <strong>Established in 1992, We came a long way providing our customers with best quality cement. With the help of fully automatic plant we provide you with sustainable cement. Arjun Cement aims to deliver innovative products and solutions that meet the needs of its customers.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section products-section" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="container text-center">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Arjun Cement is one of the premium grey cement brands in the Country, available as application<br/>friendly Portland Pozzolana Cement (PPC). The product complies with quality standards specified by<br/>the Bureau of Indian Standards (BIS).
          </p>
          
          <div className="product-card-container">
            <div className="product-card">
              <div className="product-image-wrap">
                <img src="https://arjuncement.com/images/2.png" alt="Arjun Gold" className="product-image" />
              </div>
              <h3 className="product-name">Arjun Gold</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Vendors Section */}
      <section className="section vendors-section" style={{ backgroundColor: '#999999' }}>
        <div className="container text-center">
          <h2 className="vendors-title">OUR VENDORS</h2>
          <div className="vendors-grid">
            <div className="vendor-logo"><img src="https://arjuncement.com/images/indianoil.png" alt="Indian Oil" /></div>
            <div className="vendor-logo"><img src="https://arjuncement.com/images/ntpc.png" alt="NTPC" /></div>
            <div className="vendor-logo"><img src="https://arjuncement.com/images/bhel.png" alt="BHEL" /></div>
            <div className="vendor-logo"><img src="https://arjuncement.com/images/minor.png" alt="Minor Irrigation" /></div>
            <div className="vendor-logo"><img src="https://arjuncement.com/images/urja.png" alt="Meja Urja" /></div>
          </div>
        </div>
      </section>

      {/* Certified Products Section */}
      <section id="certified" className="section certified-section" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div className="certified-layout">
            <div className="certified-text-col">
              <h2 className="certified-heading">
                <span className="light-text">WE GIVE<br/>YOU</span><br/>
                <strong>CERTIFIED<br/>PRODUCTS</strong>
              </h2>
              <p className="certified-desc">
                An unremitting commitment to the highest<br/>standards of quality has earned Arjun<br/>Cement a lot of recognition through the<br/>years. The company has earned recognition<br/>related to productivity, environment<br/>management, and best practices in Human<br/>Resource Development by reputed bodies.
              </p>
            </div>
            
            <div className="certifications-grid">
              <div className="cert-item"><img src="https://arjuncement.com/images/iso9001.png" alt="ISO 9001" /></div>
              <div className="cert-item"><img src="https://arjuncement.com/images/iaf.png" alt="IAF" /></div>
              <div className="cert-item"><img src="https://arjuncement.com/images/isi.png" alt="ISI" /></div>
              <div className="cert-item"><img src="https://arjuncement.com/images/bis.png" alt="BIS" /></div>
              <div className="cert-item"><img src="https://arjuncement.com/images/ohsas.png" alt="OHSAS" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <div className="testimonials-layout">
            <div className="testimonials-text-col">
              <span className="testimonial-subtitle">T E S T I M O N I A L</span>
              <h2 className="testimonial-heading">
                <span className="light-text">WHAT OUR</span><br/>
                <strong>CLIENT SAYS</strong>
              </h2>
            </div>
            
            <div className="testimonial-card-wrapper">
              <div className="quote-mark">“</div>
              <div className="testimonial-card">
                <div className="testimonial-avatar">
                  <img src={testimonials[currentTestimonial].avatar} alt={testimonials[currentTestimonial].name} />
                </div>
                <div className="testimonial-content">
                  <h4 className="client-name">{testimonials[currentTestimonial].name}</h4>
                  <p className="client-quote">{testimonials[currentTestimonial].quote}</p>
                </div>
                <div className="testimonial-controls">
                  <button className="control-btn prev-btn" onClick={prevTestimonial}>&#8592;</button>
                  <button className="control-btn next-btn" onClick={nextTestimonial}>&#8594;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
