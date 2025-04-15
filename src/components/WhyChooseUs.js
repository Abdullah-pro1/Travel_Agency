import React from 'react';
import { FaMapMarkedAlt, FaPlane, FaHeadset } from 'react-icons/fa';

const WhyChooseUs = () => (
  <section className="why-choose-us">
    <h2>Why Choose Us</h2>
    <div className="features">
      <div className="feature">
        <FaMapMarkedAlt size={40} />
        <h4>Expert Planning</h4>
        <p>Tailor-made itineraries by travel experts.</p>
      </div>
      <div className="feature">
        <FaPlane size={40} />
        <h4>Best Destinations</h4>
        <p>Explore top-rated locations worldwide.</p>
      </div>
      <div className="feature">
        <FaHeadset size={40} />
        <h4>24/7 Support</h4>
        <p>We’re here for you anytime, anywhere.</p>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
