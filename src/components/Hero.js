import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    destination: ''
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image array to cycle through
  const images = [
    'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/306407/pexels-photo-306407.jpeg',
    'https://images.pexels.com/photos/1343891/pexels-photo-1343891.jpeg',
    'https://images.pexels.com/photos/2523609/pexels-photo-2523609.jpeg'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    toast.success("🎉 Trip booked successfully!");
    setShowModal(false);
    setFormData({ startDate: '', endDate: '', destination: '' });
  };

  // Change the current image index every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds per image
  
    return () => clearInterval(interval); // Clear on unmount
  }, [images.length]);
  

   

  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Explore the World with Abdullah Travels</h1>
        <p>Discover unforgettable adventures & luxury experiences.</p>
        <button className="hero-btn" onClick={() => setShowModal(true)}>Book Now</button>
      </div>

      <div className="slider">
        <img
          src={images[currentImageIndex]}
          alt="Travel destination"
          className="slider-image"
        />
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Book Your Trip</h2>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              placeholder="Start Date"
            />
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              placeholder="End Date"
            />
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Destination"
            />
            <button onClick={handleSubmit}>Submit</button>
            <button className="close-btn" onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default Hero;
