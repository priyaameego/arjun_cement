import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Check, Smartphone, Mail, MapPin, ArrowUp } from 'lucide-react';
import './Footer.css';

const TwitterIcon = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const FacebookIcon = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const LinkedinIcon = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-widget">
            <h4>ABOUT COMPANY</h4>
            <p className="about-text">
              Arjun Cement is an affiliate of the multi-disciplinary conglomerate R.S.A. Groups of
              Cement division. The Company was established in 1992 with the vision to be
              preferred manufacturer of cement that partners in nation building and engages with
              its community. Arjun Cement aims to deliver innovative products and solutions that meet
              the needs of its customers.
            </p>
            <ul className="social-icons">
              <li><a href="#" aria-label="Twitter"><TwitterIcon size={14} /></a></li>
              <li><a href="#" aria-label="Facebook"><FacebookIcon size={14} /></a></li>
              <li><a href="#" aria-label="LinkedIn"><LinkedinIcon size={14} /></a></li>
              <li><a href="#" aria-label="Website"><Globe size={14} /></a></li>
            </ul>
          </div>

          <div className="footer-widget">
            <h4>INFORMATION</h4>
            <ul className="footer-links">
              <li><Link to="/about"><Check size={16} className="text-accent" /> Our Company</Link></li>
              <li><Link to="/#certified"><Check size={16} className="text-accent" /> Certification</Link></li>
              <li><Link to="/arjun"><Check size={16} className="text-accent" /> Our Products</Link></li>
              <li><Link to="/about"><Check size={16} className="text-accent" /> Company History</Link></li>
              <li><a href="#"><Check size={16} className="text-accent" /> FAQ</a></li>
            </ul>
          </div>

          <div className="footer-widget">
            <h4>CONTACT INFO</h4>
            <div className="contact-address">
              363/288/1 Hasanganj Bawali<br />campwell road Lucknow 226017
            </div>
            <ul className="contact-info">
              <li>
                <Smartphone size={16} className="text-accent" />
                <a href="tel://917525099899">+917525099899</a>
              </li>
              <li>
                <Smartphone size={16} className="text-accent" />
                <a href="tel://918881705000">+918881705000</a>
              </li>
              <li>
                <Mail size={16} className="text-accent" />
                <a href="mailto:cementarjun@rediffmail.com">cementarjun@rediffmail.com</a>
              </li>
              <li>
                <MapPin size={16} className="text-accent" />
                <a href="http://arjuncement.com">arjuncement.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright &copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <div className="scroll-to-top">
        <a href="#" aria-label="Scroll to top" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          <ArrowUp size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
