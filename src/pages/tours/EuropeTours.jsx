import React, { useState } from "react";
import "./EuropeTours.css"; // Make sure to create this CSS file

const tours = [
  {
    name: "Paris, France",
    description: "Experience the romance and charm of the Eiffel Tower and French cuisine.",
    image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
  },
  {
    name: "Rome, Italy",
    description: "Walk through the ruins of the Roman Empire and taste authentic Italian pizza.",
    image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
  },
  {
    name: "Amsterdam, Netherlands",
    description: "Explore scenic canals and world-class museums.",
    image: "https://images.pexels.com/photos/208733/pexels-photo-208733.jpeg",
  },
];

export default function EuropeTours() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="tours-section">
      <h2>Explore Europe</h2>
      <div className="tour-grid">
        {tours.map((tour, index) => (
          <div className="tour-card" key={index}>
            <img src={tour.image} alt={tour.name} />
            <h3>{tour.name}</h3>
            <p>{tour.description}</p>
          </div>
        ))}
      </div>
      <button className="book-btn" onClick={() => setIsModalOpen(true)}>
        Book Your Tour
      </button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Tour Booking Form</h2>
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="date" placeholder="Travel Date" required />
              <select required>
                <option value="">Select Destination</option>
                {tours.map((tour, i) => (
                  <option key={i} value={tour.name}>{tour.name}</option>
                ))}
              </select>
              <button type="submit">Submit Booking</button>
              <button className="close-btn" onClick={() => setIsModalOpen(false)}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
