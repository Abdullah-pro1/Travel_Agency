import React from 'react';

const About = () => (
  <div className="about-page">
    <section className="intro">
      <h1>About Us</h1>
      <p>We are passionate travel experts crafting unforgettable experiences.</p>
    </section>
    <section className="mission">
      <h2>Mission & Vision</h2>
      <p>Mission: To help people explore the world safely and joyfully.</p>
      <p>Vision: To be the world’s most trusted travel brand.</p>
    </section>
    <section className="team">
      <h2>Meet the Team</h2>
      <div className="team-members">
        {/* Add team member cards here */}
      </div>
    </section>
    <section className="certifications">
      <h2>Certifications</h2>
      <ul>
        <li>ISO Certified Travel Services</li>
        <li>Top Rated by TripAdvisor</li>
      </ul>
    </section>
    <section className="quote">
      <blockquote>
        "Travel is the only thing you buy that makes you richer."
      </blockquote>
    </section>
  </div>
);

export default About;
