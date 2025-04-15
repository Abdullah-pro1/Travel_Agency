import React from 'react';

const Contact = () => (
  <div className="contact-page">
    <h1>Contact Us</h1>
    <form className="contact-form">
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <input type="text" placeholder="Subject" />
      <textarea placeholder="Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
    <div className="map-and-info">
      <iframe
        title="map"
        src="https://maps.google.com/maps?q=karachi&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        width="100%"
        height="300"
        allowFullScreen
      ></iframe>
      <div className="contact-details">
        <p><strong>Phone:</strong> +92 300 1234567</p>
        <p><strong>Email:</strong> contact@wanderlusttravels.com</p>
        <p><strong>Hours:</strong> Mon-Fri 9am - 6pm</p>
        <div className="socials">
          {/* Add icons here */}
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
