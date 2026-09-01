import React from 'react';
import './Products.css';

const Products = () => {
  return (
    <div className="page-wrapper">
      
      {/* Products Hero */}
      <section className="products-hero" style={{backgroundImage: 'url(https://arjuncement.com/images/img_bg_4.jpg)'}}>
        <div className="hero-overlay"></div>
        <div className="container hero-content text-center">
          <span className="hero-subtitle">SECRET OF OUR SUCCESS</span>
          <h1 className="hero-title">Our Range of Products</h1>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="section our-products-section">
        <div className="container text-center">
          <h2 className="section-title">Our Products</h2>
          <p className="products-desc">
            Arjun Cement is one of the premium grey cement brands in the Country, available as application friendly Portland Pozzolana Cement (PPC). The product complies with quality standards specified by the Bureau of Indian Standards (BIS) and is much in demand, by both, the retail and the institutional segment.
          </p>

          <div className="product-card-wrap">
            <div className="product-card">
              <div className="product-image-container">
                <img src="https://arjuncement.com/images/2.png" alt="Arjun Gold Cement" />
              </div>
              <h3 className="product-name">Arjun Gold</h3>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Products;
