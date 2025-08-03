import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./EuropeTours.css";

export default function AsiaTours() {
  const [showPopup, setShowPopup] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    travelers: "",
    date: "",
  });

  const tours = [
    {
      name: "Istanbul, Turkey",
      description: "Where East meets West, full of history and culture.",
      image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Maldives",
      description: "Crystal-clear waters, luxury resorts, and stunning marine life.",
      image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Tokyo, Japan",
      description: "A dazzling blend of tradition and futuristic wonders.",
      image: "https://images.pexels.com/photos/237211/pexels-photo-237211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
  ];

     return (
       <div className="tours-section">
         <h2>Explore Asia</h2>
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
   
