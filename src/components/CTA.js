import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();
  return (
    <section className="cta">
      <h2>Ready for Your Next Adventure?</h2>
      <p>Book your tour today and make memories for a lifetime!</p>
      <button onClick={() => navigate('/contact')}>Contact Us</button>
    </section>
  );
};

export default CTA;
