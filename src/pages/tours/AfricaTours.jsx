
import React, { useState } from "react";
import "./EuropeTours.css";
export default function AfricaTours() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const tours = [
    {
      name: "Cairo, Egypt",
      description: "Explore ancient pyramids and the majestic Nile River.",
      image:
        "https://images.pexels.com/photos/258153/pexels-photo-258153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Cape Town, South Africa",
      description: "Stunning landscapes, beaches, and Table Mountain views.",
      image:
        "https:images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
     {
      name: "Zanzibar, Tanzania",
      description:
        "A tropical paradise with white-sand beaches and spice farms.",
      image:
        "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

     return (
       <div className="tours-section">
         <h2>Explore Africa</h2>
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
   
