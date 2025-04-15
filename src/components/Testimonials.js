import React from 'react';

const testimonials = [
  { name: 'Sarah', text: 'Amazing experience! Highly recommended.' },
  { name: 'Ali', text: 'The trip was well organized and fun!' },
  { name: 'Linda', text: 'Customer support was fantastic. I’ll book again.' },
];

const Testimonials = () => (
  <section className="testimonials">
    <h2>What Our Travelers Say</h2>
    <div className="testimonial-grid">
      {testimonials.map((t, i) => (
        <div key={i} className="testimonial-card">
          <p>"{t.text}"</p>
          <strong>- {t.name}</strong>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
