import React from 'react';
import Slider from 'react-slick'; // Import the carousel component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  { name: 'Sarah', text: 'Amazing experience! Highly recommended.' },
  { name: 'Ali', text: 'The trip was well organized and fun!' },
  { name: 'Linda', text: 'Customer support was fantastic. I’ll book again.' },
];

const Testimonials = () => {
  const settings = {
    dots: true,              // Show dots at the bottom
    infinite: true,          // Loop the carousel
    speed: 500,              // Transition speed
    slidesToShow: 1,         // Show 1 slide at a time
    slidesToScroll: 1,       // Scroll 1 slide at a time
    autoplay: true,          // Auto-scroll
    autoplaySpeed: 3000      // 3 seconds per slide
  };


return (
    <section className="testimonials">
      <h2>What Our Travelers Say</h2>
      <Slider {...settings}>
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <p>"{t.text}"</p>
            <strong>- {t.name}</strong>
          </div>
        ))}
      </Slider>
    </section>
  );
};
export default Testimonials;
