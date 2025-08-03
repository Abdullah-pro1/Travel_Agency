import React from 'react';
import { useNavigate } from 'react-router-dom';

const destinations = [
  {
    name: 'Paris',
    description: 'The city of lights and love.',
    image: 'https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    route: '/tours/europe/paris'
  },
  {
    name: 'Maldives',
    description: 'Tropical paradise with crystal waters.',
    image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    route: '/tours/asia'
  },
  {
    name: 'Tokyo',
    description: 'Modern city with rich culture.',
    image: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    route: '/tours/asia'
  },
];

  const Destinations = () => {
  const navigate = useNavigate();
  return (
  <section className="destinations">
    <h2>Popular Destinations</h2>
    <div className="destination-cards">
      {destinations.map((d, i) => (
        <div key={i} className="card" onClick={() => navigate(d.route)} style={{ cursor: 'pointer' }}>
          <img src={d.image} alt={d.name} />
          <h3>{d.name}</h3>
          <p>{d.description}</p>
        </div>
      ))}
    </div>
  </section>
);
}

export default Destinations;
